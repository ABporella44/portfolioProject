export default function SectionHeading({ eyebrow, title, sub, dark }) {
  return (
    <div className="max-w-xl mx-auto text-center mb-14">

      <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${dark ? "text-white" : "text-slate-900"}`}>{title}</h2>
      {sub && <p className={dark ? "text-slate-300" : "text-slate-500"}>{sub}</p>}
    </div>
  );
}
