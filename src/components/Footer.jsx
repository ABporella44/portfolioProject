import { Github, Twitter, Linkedin, Globe, Instagram,CodeXml } from "lucide-react";

export default function Footer({ setPage }) {

  const SOCIAL_LINKS = [
  { type: "Github", link: "https://github.com/ABporella44", icon: Github },
  { type: "Twitter", link: "https://twitter.com/your-username", icon: Twitter },
  { type: "Linkedin", link: "https://x.com/abhilashpraddy?s=11", icon: Linkedin },
  { type: "instagram", link: "https://www.instagram.com/storiesofabhirama/", icon: Instagram },
];

  return (
    <footer className="bg-[#0B1224] text-slate-300 pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div>
          <p className="flex items-center gap-2 font-extrabold text-lg text-white mb-4">
           <span className="flex items-center justify-center p-2 rounded-full bg-cyan-400 aspect-square">
          <CodeXml className="w-5 h-5 text-[#0a0f1a]" />
           </span>
            ABHILASH PORELLA
          </p>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            A freelance developer portfolio, rebuilt as a real multi-component React application.
          </p>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
  rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-white font-semibold mb-4 text-sm">Company</p>
          <ul className="space-y-2 text-sm text-slate-400">
            {["Home", "About", "Services"].map((i) => (
              <li key={i}>
                <button onClick={() => setPage(i)} className="hover:text-cyan-400 transition-colors">
                  {i}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-4 text-sm">Information</p>
          <ul className="space-y-2 text-sm text-slate-400">
            {["Resume", "Projects", "Blogs"].map((i) => (
              <li key={i}>
                <button onClick={() => setPage(i)} className="hover:text-cyan-400 transition-colors">
                  {i}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-4 text-sm">More info</p>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <button onClick={() => setPage("Contact")} className="hover:text-cyan-400 transition-colors">
                Contact
              </button>
            </li>
            <li>
              <span className="cursor-default">Terms &amp; condition</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
        <p>© 2026 Abhilash Porella. Built with React.</p>
      </div>
    </footer>
  );
}
