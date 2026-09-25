export type PenaltyRow = { offense: string; level: string; range: string };

/** Statutory penalty ranges. Scrolls horizontally inside its own container on narrow screens. */
export function PenaltyTable({ caption, rows, note }: { caption: string; rows: PenaltyRow[]; note: string }) {
  return (
    <figure>
      <div className="overflow-x-auto rounded-sm border border-white/10">
        <table className="w-full min-w-[40rem] border-collapse text-left">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-navy/60 text-xs font-semibold uppercase tracking-[0.15em] text-gold-light">
            <tr>
              <th scope="col" className="px-6 py-4">
                Charge
              </th>
              <th scope="col" className="px-6 py-4">
                Classification
              </th>
              <th scope="col" className="px-6 py-4">
                General Penalty Range
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.map((row) => (
              <tr key={row.offense} className="transition-colors hover:bg-white/[0.02]">
                <th scope="row" className="px-6 py-5 align-top font-medium text-bone">
                  {row.offense}
                </th>
                <td className="px-6 py-5 align-top whitespace-nowrap text-gold-light">{row.level}</td>
                <td className="px-6 py-5 align-top leading-relaxed text-mist">{row.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="mt-5 text-sm leading-relaxed text-mist">{note}</figcaption>
    </figure>
  );
}
