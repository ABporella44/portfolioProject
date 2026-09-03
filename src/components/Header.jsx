import { useState, useEffect } from "react";
import { Menu, X, ArrowRight,CodeXml } from "lucide-react";
import { NAV_ITEMS } from "../data/content.js";

export default function Header({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (item) => {
    setPage(item);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || page !== "Home" ? "bg-white/95 backdrop-blur border-b border-slate-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={() => goTo("Home")} className="flex items-center gap-2 font-extrabold text-lg tracking-tight text-slate-900">
           <span className="flex items-center justify-center p-2 rounded-full bg-cyan-400 aspect-square">
          <CodeXml className="w-5 h-5 text-[#0a0f1a]" />
           </span>
          ABHILASH
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => goTo(item)}
              className={`text-sm font-medium transition-colors ${
                page === item ? "text-cyan-500" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <button
          onClick={() => goTo("Contact")}
          className="hidden md:inline-flex items-center gap-1 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
        >
          Hire Me! <ArrowRight size={14} />
        </button>

        <button className="md:hidden text-slate-800" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => goTo(item)}
              className={`text-left text-sm font-medium ${page === item ? "text-cyan-500" : "text-slate-700"}`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
