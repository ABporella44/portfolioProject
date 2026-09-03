import SectionHeading from "./SectionHeading.jsx";
import { SKILLS } from "../data/content.js";
import AlsoProficientIn from "./AlsoProficientIn.jsx";

export default function SkillsGrid() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          sub="Technologies I reach for most often, and how long I've used them."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {SKILLS.map((s) => (
            <div
              key={s.name}
              className="bg-white rounded-xl border border-slate-100 p-5 flex items-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${s.color}1A` }}
              >
                <s.icon size={20} style={{ color: s.color }} />
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">{s.name}</p>
                <p className="text-xs text-slate-400">{s.exp}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <AlsoProficientIn />
        </div>
      </div>
    </section>
  );
}
