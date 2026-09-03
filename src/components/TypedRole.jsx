import { useState, useEffect } from "react";

const ROLES = ["React Developer", "Vue Developer", "Node.js Developer"];

export default function TypedRole() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1200);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <span className="text-cyan-500 border-amber-300">
      {text}
      <span className="inline-block w-[2px] h-[0.9em] bg-slate-800 ml-1 align-middle animate-pulse" />
    </span>
  );
}
