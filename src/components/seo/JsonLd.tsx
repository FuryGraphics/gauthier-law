// Native <script> (not next/script) is correct for structured data per the Next docs.
// "<" is escaped so no string in the payload can close the tag.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
