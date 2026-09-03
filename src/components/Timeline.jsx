import { MapPin } from "lucide-react";

export default function Timeline({ items }) {
  return (
    <div className="space-y-6">
      {items.map((t, i) => (
        <div
          key={i}
          className="flex flex-col sm:flex-row items-start gap-5 bg-white rounded-xl border border-slate-100 p-6 hover:shadow-md transition-shadow"
        >
<div
            className="w-[51.2px] h-[51.2px] rounded-full flex items-center justify-center text-white font-bold text-xs text-center shrink-0 overflow-hidden"
          >
           <img
    src={t.icon} // Ensure your object has an 'image' property (or replace with your image URL variable)
    alt={t.title || "Timeline image"}
    className="w-full h-full object-cover"
  />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <h4 className="font-bold text-slate-900">{t.title}</h4>
              <span className="text-xs font-semibold text-cyan-600">{t.year}</span>
            </div>
            <p className="text-xs text-slate-400 mb-2 flex items-center gap-1">
              <MapPin size={12} />
              {t.place}
            </p>
            <p className="text-sm text-slate-500 mb-3">{t.desc}</p>
            {t.tags && (
              <div className="flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
