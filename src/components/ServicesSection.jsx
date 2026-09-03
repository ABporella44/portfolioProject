import SectionHeading from "./SectionHeading.jsx";
import { SERVICES } from "../data/content.js";

export default function ServicesSection({ full }) {
  const items =  SERVICES 

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Services"
          title="Services I can help you with"
          sub="I craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning."
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-100 p-7 hover:shadow-lg transition-shadow bg-white">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: s.tint }}>
                <s.icon size={22} style={{ color: s.fg }} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{s.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
