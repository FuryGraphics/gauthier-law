export type FactRow = { label: string; kind: string; detail: string };

/** Three-column reference table (damages, deadlines). Scrolls horizontally on narrow screens. */
export function FactTable({
  caption,
  columns,
  rows,
  note,
}: {
  caption: string;
  columns: [string, string, string];
  rows: FactRow[];
  note: string;
}) {
  return (
    <figure>
      <div className="overflow-x-auto rounded-sm border border-white/10">
        <table className="w-full min-w-[40rem] border-collapse text-left">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-navy/60 text-xs font-semibold uppercase tracking-[0.15em] text-gold-light">
            <tr>
              {columns.map((column) => (
                <th key={column} scope="col" className="px-6 py-4">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.map((row) => (
              <tr key={row.label} className="transition-colors hover:bg-white/[0.02]">
                <th scope="row" className="px-6 py-5 align-top font-medium text-bone">
                  {row.label}
                </th>
                <td className="px-6 py-5 align-top whitespace-nowrap text-gold-light">{row.kind}</td>
                <td className="px-6 py-5 align-top leading-relaxed text-mist">{row.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="mt-5 text-sm leading-relaxed text-mist">{note}</figcaption>
    </figure>
  );
}
