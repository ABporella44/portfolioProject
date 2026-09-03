import SectionHeading from "./SectionHeading.jsx";
import Timeline from "./Timeline.jsx";
import { TIMELINE, EDUCATION } from "../data/content.js";

export default function EducationExperience() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="Life Time" title="Education & Experience" sub="A quick look at where I've worked and studied." />
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Experience</h4>
            <Timeline items={TIMELINE} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Education</h4>
            <div className="space-y-6">
              {EDUCATION.map((e, i) => (
                <div key={i} className="flex items-start gap-5 bg-white rounded-xl border border-slate-100 p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${e.color}1A` }}>
                    <e.icon size={20} style={{ color: e.color }} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="font-bold text-slate-900 text-sm">{e.title}</h4>
                      <span className="text-xs font-semibold text-cyan-600">{e.year}</span>
                    </div>
                    <p className="text-xs text-slate-400 mb-2">{e.place}</p>
                    <p className="text-sm text-slate-500">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
