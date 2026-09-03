import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { PROJECTS, PROJECT_FILTERS } from "../data/content.js";

export default function ProjectsGrid({ withFilter }) {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);
  const shown = withFilter ? visible : PROJECTS.slice(0, 3);

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Recent Projects"
          sub="A sample of things I've built, from prototypes to production apps."
        />
        {withFilter && (
          <div className="flex flex-wrap justify-center gap-6 mb-10 border-b border-slate-100 pb-4">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-sm font-semibold pb-2 border-b-2 transition-colors ${
                  filter === f ? "text-cyan-500 border-cyan-500" : "text-slate-400 border-transparent hover:text-slate-700"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {shown.map((p) => (
            <div key={p.name} className="rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow group">
              <div  className="h-44 flex items-center justify-center" style={{ background: p.tint }}>
                <img src={p.icon} alt={p.name} className="w-full h-full object-contain" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 text-sm">{p.name}</p>
                  <p className="text-xs text-slate-400">{p.client}</p>
                </div>
                <ArrowUpRight size={16} className="text-slate-300 group-hover:text-cyan-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
