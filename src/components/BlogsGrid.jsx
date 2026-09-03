import { Calendar, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { BLOGS } from "../data/content.js";

export default function BlogsGrid() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="From The Views of My Collegues and Client's"/>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {BLOGS.map((b) => (
            <div key={b.title} className="rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="h-40" style={{ background: b.tint }} />
              <div className="p-5">
                <h4 className="font-bold text-slate-900 mb-4 leading-snug">{b.title}</h4>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-500">
                    <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center font-semibold text-slate-500">
                      {b.author.split(" ").map((w) => w[0]).join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">{b.author}</p>
                      <p className="flex items-center gap-1 text-slate-400">
                        <Calendar size={11} />
                        {b.date}
                      </p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 font-semibold text-cyan-600">
                    Read more <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
