#!/usr/bin/env node
// Post-build SEO + compliance audit over every prerendered page.
// Usage: npm run build && npm run audit:seo
// Errors fail the run (exit 1). Warnings need a human look. Placeholders are listed
// so open client items stay visible page by page.

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const APP_DIR = ".next/server/app";
const TITLE_SUFFIX = " | Gauthier Law Firm";
const PHONE_HREF = "tel:+12143770786";
const COMPLIANCE_LINE = "Prior results do not guarantee a similar outcome.";
const SKIP = [/^\/_/, /^\/styleguide$/];

const BANNED = /\b(specialists?|experts?|board[\s-]certified)\b/gi;
const CAUTION = /\b(speciali[sz]\w*|expertise)\b/gi;
const FABRICATION_PATTERNS = [
  [/\b\d+\+?\s*years?\s+(?:of\s+)?(?:experience|in practice|practicing)/gi, "years-in-practice claim"],
  [/\b\d[\d,]*\+?\s*(?:reviews?|ratings?)\b/gi, "review count"],
  [/\b[1-5](?:\.\d)?\s*(?:\/\s*5|-star|\s?stars?)\b/gi, "star rating"],
  [/\b\d[\d,]*\+?\s*(?:cases|clients)\s+(?:won|handled|dismissed|represented|helped)/gi, "case-volume claim"],
  [/\b\d{1,3}\s?%\s*(?:success|win|dismissal)/gi, "success-rate claim"],
];

if (!existsSync(APP_DIR)) {
  console.error("No build output found. Run `npm run build` first.");
  process.exit(1);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return walk(path);
    return path.endsWith(".html") ? [path] : [];
  });

const routeFor = (file) => {
  const rel = relative(APP_DIR, file).split(sep).join("/").replace(/\.html$/, "");
  return rel === "index" ? "/" : `/${rel}`;
};

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];

const findTag = (html, tagName, predicate) =>
  (html.match(new RegExp(`<${tagName}\\s[^>]*>`, "g")) ?? []).find(predicate);

const meta = (html, key) => {
  const tag = findTag(html, "meta", (t) => attr(t, "name") === key || attr(t, "property") === key);
  return tag ? decode(attr(tag, "content") ?? "") : undefined;
};

const visibleText = (html) =>
  decode(
    html
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<style[\s\S]*?<\/style>/g, " ")
      .replace(/<[^>]+>/g, " "),
  ).replace(/\s+/g, " ");

const schemaTypes = (html) => {
  const types = new Set();
  const collect = (node) => {
    if (Array.isArray(node)) return node.forEach(collect);
    if (!node || typeof node !== "object") return;
    [node["@type"]].flat().filter(Boolean).forEach((t) => types.add(t));
    if (node["@graph"]) collect(node["@graph"]);
  };
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      collect(JSON.parse(json));
    } catch {
      types.add("!INVALID_JSON");
    }
  }
  return types;
};

const expectedSchema = (route) => {
  if (route === "/") return ["LegalService"];
  if (/^\/attorney/.test(route)) return ["Attorney"];
  if (/^\/locations\/[^/]+$/.test(route)) return ["LocalBusiness"];
  if (/^\/practice-areas\/(car-accidents|slip-and-fall)$/.test(route)) return ["FAQPage"];
  return [];
};

const pathOf = (url) => {
  try {
    return new URL(url).pathname.replace(/(.)\/$/, "$1");
  } catch {
    return null;
  }
};

function auditPage(route, html) {
  const errors = [];
  const warnings = [];
  const head = html.match(/<head>[\s\S]*?<\/head>/)?.[0] ?? "";
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? "";
  const text = visibleText(html);

  // Title
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  if (!title.endsWith(TITLE_SUFFIX) || title.length <= TITLE_SUFFIX.length)
    errors.push(`title "${title}" is not "[Target Keyword]${TITLE_SUFFIX}"`);

  // Meta description
  const description = meta(html, "description");
  if (!description) errors.push("missing meta description");
  else if (description.length < 150 || description.length > 160)
    errors.push(`meta description is ${description.length} chars (needs 150–160)`);

  // Canonical + Open Graph
  const canonicalTag = findTag(html, "link", (t) => attr(t, "rel") === "canonical");
  const canonical = canonicalTag && attr(canonicalTag, "href");
  if (!canonical) errors.push("missing canonical");
  else if (pathOf(canonical) !== route) errors.push(`canonical ${canonical} does not match route`);
  for (const key of ["og:title", "og:description", "og:url", "og:image", "og:type", "twitter:card"]) {
    if (!meta(html, key)) errors.push(`missing ${key}`);
  }
  const ogUrl = meta(html, "og:url");
  if (ogUrl && pathOf(ogUrl) !== route) errors.push(`og:url ${ogUrl} does not match route`);

  // Headings
  const h1Count = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1Count !== 1) errors.push(`${h1Count} <h1> elements (needs exactly 1)`);
  const levels = [...main.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  if (levels[0] !== 1) errors.push("first heading in <main> is not the H1");
  levels.forEach((level, i) => {
    if (i > 0 && level > levels[i - 1] + 1) errors.push(`heading jumps from h${levels[i - 1]} to h${level}`);
  });

  // Breadcrumbs + schema
  const types = schemaTypes(html);
  if (types.has("!INVALID_JSON")) errors.push("invalid JSON-LD block");
  if (route !== "/") {
    if (!/aria-label="Breadcrumb"/.test(main)) errors.push("missing visible breadcrumb nav");
    if (!types.has("BreadcrumbList")) errors.push("missing BreadcrumbList schema");
  }
  for (const type of expectedSchema(route)) {
    if (!types.has(type)) errors.push(`missing ${type} schema`);
  }

  // Internal links within page content
  const internal = new Set(
    [...main.matchAll(/<a\s[^>]*href="(\/[^"#?]*)/g)].map((m) => m[1].replace(/(.)\/$/, "$1")).filter((h) => h !== route),
  );
  if (internal.size < 2) errors.push(`only ${internal.size} internal link(s) in page content (needs 2–3+)`);
  else if (internal.size < 3) warnings.push(`only ${internal.size} internal links in page content (aim for 3+)`);

  // Images
  for (const img of main.match(/<img\s[^>]*>/g) ?? []) {
    const alt = attr(img, "alt");
    const src = attr(img, "src") ?? "(no src)";
    const decorative = attr(img, "aria-hidden") === "true" || attr(img, "role") === "presentation";
    if (alt === undefined || (alt === "" && !decorative)) errors.push(`image without descriptive alt: ${src}`);
    if (attr(img, "loading") !== "lazy") warnings.push(`image not lazy-loaded: ${src}`);
  }

  // Sitewide shell
  if (!head.includes("googletagmanager.com/gtag/js")) errors.push("GA4 tag missing from <head>");
  if (!text.includes(COMPLIANCE_LINE)) errors.push("footer compliance line missing");
  if (!html.includes('href="/disclaimer"')) errors.push("no link to /disclaimer");
  if (!html.includes('href="/privacy-policy"')) errors.push("no link to /privacy-policy");
  if (!html.includes(`href="${PHONE_HREF}"`) || !text.includes("Call Now")) errors.push("mobile Call Now button missing");

  // Language rules
  const checked = `${title} ${description ?? ""} ${text}`;
  for (const [word] of checked.matchAll(BANNED)) errors.push(`banned term "${word}"`);
  for (const [word] of checked.matchAll(CAUTION)) warnings.push(`review term "${word}" (specialization claims are restricted)`);
  const withoutPlaceholders = checked.replace(/\[[^\]]*\]/g, " ");
  for (const [pattern, label] of FABRICATION_PATTERNS) {
    for (const [match] of withoutPlaceholders.matchAll(pattern)) warnings.push(`verify ${label}: "${match}"`);
  }

  const placeholders = [...new Set(checked.match(/\[(?:INSERT|CONFIRM|CLIENT)[^\]]*\]/g) ?? [])];
  return { errors: [...new Set(errors)], warnings: [...new Set(warnings)], placeholders, title, description };
}

const pages = walk(APP_DIR)
  .map((file) => ({ route: routeFor(file), html: readFileSync(file, "utf8") }))
  .filter(({ route }) => !SKIP.some((re) => re.test(route)))
  .sort((a, b) => a.route.localeCompare(b.route));

const results = pages.map(({ route, html }) => ({ route, ...auditPage(route, html) }));

// Cross-page uniqueness
for (const field of ["title", "description"]) {
  const seen = new Map();
  for (const r of results) {
    if (!r[field]) continue;
    if (seen.has(r[field])) r.errors.push(`duplicate ${field} (also on ${seen.get(r[field])})`);
    else seen.set(r[field], r.route);
  }
}

// Sitemap ↔ built pages: every sitemap URL must be a real page, and every page
// must be listed in the sitemap.
const sitemapErrors = [];
const sitemapFile = join(APP_DIR, "sitemap.xml.body");
if (!existsSync(sitemapFile)) {
  sitemapErrors.push("sitemap.xml was not generated");
} else {
  const sitemapPaths = new Set(
    [...readFileSync(sitemapFile, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => pathOf(m[1]) ?? m[1]),
  );
  const builtPaths = new Set(results.map((r) => r.route));
  for (const path of sitemapPaths) if (!builtPaths.has(path)) sitemapErrors.push(`sitemap lists ${path}, but no page was built`);
  for (const path of builtPaths) if (!sitemapPaths.has(path)) sitemapErrors.push(`page ${path} is missing from the sitemap`);
  console.log(`Sitemap: ${sitemapPaths.size} URLs · ${builtPaths.size} built pages`);
}
const robotsFile = join(APP_DIR, "robots.txt.body");
if (!existsSync(robotsFile) || !readFileSync(robotsFile, "utf8").includes("/sitemap.xml")) {
  sitemapErrors.push("robots.txt is missing or does not reference the sitemap");
}
sitemapErrors.forEach((e) => console.log(`✖ ${e}`));

let errorCount = sitemapErrors.length;
let warningCount = 0;
for (const r of results) {
  errorCount += r.errors.length;
  warningCount += r.warnings.length;
  const mark = r.errors.length ? "✖" : r.warnings.length ? "▲" : "✔";
  console.log(`${mark} ${r.route}`);
  r.errors.forEach((e) => console.log(`    error: ${e}`));
  r.warnings.forEach((w) => console.log(`    warn:  ${w}`));
  if (r.placeholders.length) console.log(`    placeholders (${r.placeholders.length}): ${r.placeholders.join(" · ")}`);
}
console.log(`\n${results.length} pages · ${errorCount} errors · ${warningCount} warnings`);
process.exit(errorCount ? 1 : 0);
