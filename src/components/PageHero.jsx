export default function PageHero({ label }) {

  const labelData = [{label:"About",labelText:"A Little about me!"},{label:"Services",labelText:"Services I can help you with!"},{label:"Resume",labelText:"Technologies I work with"},{label:"Projects",labelText:"Client Projects, Where I've Made a Difference!"},{label:"Blogs",labelText:"My Blogs"},{label:"Contact",labelText:"Get in touch with me for your next project!"}]
  return (
    <div className="relative bg-[#0B1224] pt-32 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <h1 className="relative text-center text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
        {labelData.find((item) => item.label === label)?.labelText || "Default Text"}
      </h1>
      <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#F8FAFC" />
      </svg>
    </div>
  );
}
