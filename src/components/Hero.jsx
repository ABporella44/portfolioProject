import { Github, Twitter, Globe, Linkedin } from "lucide-react";
import TypedRole from "./TypedRole.jsx";

export default function Hero({ setPage }) {
  return (
    <section className="relative bg-[#FBEBE1] pt-32 pb-24 overflow-hidden">
      <div className="absolute top-24 left-10 w-14 h-14 border-2 border-amber-200 rounded-full hidden md:block" />
      <div className="absolute bottom-16 left-24 w-8 h-8 border-2 border-rose-200 rotate-45 hidden md:block" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="flex justify-center md:justify-start">
  <div className="w-72 h-80 sm:w-80 sm:h-96 overflow-hidden shadow-xl bg-orange-100">
    <img
      src="/MyImage.png"
      fetchpriority="high" 
      alt="Abhilash Porella, freelance developer"
      className="w-full h-full object-cover object-top"
    />
  </div>
</div>

        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6">Hi, I'm <span className="text-cyan-500">Abhilash Porella</span></h1>
          <h3 className="text-4xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-6">
            I'm a freelance<h5><TypedRole/></h5>
          </h3>
          
          <p className="text-slate-500 mb-8 max-w-md">
            I build fast, accessible interfaces and the systems behind them — from first component
            to production deploy.
          </p>
          <div className="flex items-center gap-4">

              <a target="_blank" rel="noopener noreferrer" href="https://porellaresume.s3.eu-north-1.amazonaws.com/Porella_Abhilash_Resume+(1).pdf">            <button
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >              Download CV
            </button></a>

            <div className="flex items-center gap-3">
              {[Github, Twitter, Globe, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:text-cyan-500 hover:border-cyan-400 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
