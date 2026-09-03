import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const inputCls =
  "w-full bg-[#F8FAFC] border border-slate-200 rounded-md px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", contact: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", contact: "", message: "" });
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Get in touch!</h3>
          <p className="text-slate-500 mb-8 max-w-sm">
            Always available for freelancing if the right project comes along. Feel free to reach out.
          </p>
          <form onSubmit={submit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Name</label>
                <input required value={form.name} onChange={update("name")} placeholder="Your name" className={inputCls} />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Email</label>
                <input required type="email" value={form.email} onChange={update("email")} placeholder="Your email" className={inputCls} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Subject</label>
                <input value={form.subject} onChange={update("subject")} placeholder="Your subject" className={inputCls} />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Contact</label>
                <input value={form.contact} onChange={update("contact")} placeholder="+00 1234 5678 90" className={inputCls} />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="Enter your message..."
                className={inputCls}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              <Send size={15} /> Send message
            </button>
            {sent && <p className="text-sm text-emerald-600 font-medium">Thanks — your message has been noted.</p>}
          </form>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-[#F8FAFC] rounded-xl p-5">
            <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center text-cyan-500 shrink-0">
              <Phone size={18} />
            </div>
            <div>
              <p className="font-semibold text-slate-900">+91 9177686202</p>
              <p className="text-xs text-slate-400">9:00am to 7:00pm</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#F8FAFC] rounded-xl p-5">
            <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center text-cyan-500 shrink-0">
              <Mail size={18} />
            </div>
            <div>
              <p className="font-semibold text-slate-900">porella.abhilash@gmail.com</p>
              <p className="text-xs text-slate-400">Monday to Saturday</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#F8FAFC] rounded-xl p-5">
            <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center text-cyan-500 shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Remote / Worldwide</p>
              <p className="text-xs text-slate-400">Available for relocation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
