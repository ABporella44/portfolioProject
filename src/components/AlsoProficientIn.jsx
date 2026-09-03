const CATEGORIES = [
  {
    label: "Languages",
    items: [
      { name: "JavaScript", badge: "JS", color: "#F7DF1E", dark: true },
      { name: "TypeScript", badge: "TS", color: "#3178C6" },
      { name: "HTML5", badge: "5", color: "#E34F26" },
      { name: "CSS", badge: "#", color: "#7952B3" },
      { name: "SQL" },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "React 18", badge: "⚛", color: "#61DAFB", dark: true },
      { name: "Angular", badge: "▲", color: "#DD0031" },
      { name: "Next.js", badge: "N", color: "#0F172A" },
      { name: "Node.js", badge: "⬡", color: "#68A063" },
      { name: "Express", badge: "ex", color: "#0F172A" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", badge: "🐘", color: "#336791" },
      { name: "MongoDB", badge: "🍃", color: "#47A248" },
      { name: "MySQL", badge: "my", color: "#4479A1" },
      { name: "Oracle 11g" },
    ],
  },
  {
    label: "Auth & Security",
    items: [
      { name: "OAuth 2.0", badge: "🛡", color: "#F97316" },
      { name: "PKCE" },
      { name: "JWT" },
      { name: "Bearer Tokens" },
      { name: "Axios Interceptors" },
    ],
  },
  {
    label: "Visualization",
    items: [
      { name: "Highcharts", badge: "◆", color: "#6E7CF4" },
      { name: "D3.js", badge: "D3", color: "#F9A03C" },
      { name: "Chart.js", badge: "◈", color: "#FF6384" },
    ],
  },
  {
    label: "Methodology",
    items: [
      { name: "Agile" },
      { name: "Scrum" },
      { name: "JIRA", badge: "▸", color: "#2684FF" },
      { name: "Code Reviews" },
      { name: "PI Planning" },
    ],
  },
];

function Pill({ item }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 bg-white shadow-sm">
      {item.badge && (
        <span
          className="w-4 h-4 rounded-[4px] flex items-center justify-center text-[9px] font-bold shrink-0"
          style={{
            background: item.color,
            color: item.dark ? "#0F172A" : "#FFFFFF",
          }}
        >
          {item.badge}
        </span>
      )}
      {item.name}
    </span>
  );
}

export default function AlsoProficientIn() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-white px-5 py-2 text-xs font-semibold tracking-wide text-cyan-600">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            Also proficient in
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="space-y-10">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3 sm:gap-6 items-center"
            >
              <p className="text-sm font-bold tracking-wide text-cyan-600">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <Pill key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
