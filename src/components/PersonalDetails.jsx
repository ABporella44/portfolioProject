export default function PersonalDetails() {
  const rows = [
    ["Date of birth", "23 Aug 1992"],
    ["Spoken Languages", "English · Hindi · Telugu"],
    ["Nationality", "Indian"],
    ["Interest", "Swimming · Cooking · Photography · Technology"],
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2 inline-block border-b-2 border-cyan-400 pb-1">
            Personal Details
          </h3>
          <p className="text-slate-500 mt-4 leading-relaxed">
            I'm a product-minded frontend developer who cares as much about how an interface feels
            as how it's built. Off-screen you'll usually find me reading, hiking, or tinkering with
            a synth.
          </p>
        </div>
        <div className="space-y-4">
          {rows.map(([label, value]) => (
            <div key={label} className="flex justify-between border-b border-slate-100 pb-3">
              <span className="text-slate-600 font-medium">{label}</span>
              <span className="text-cyan-600">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
