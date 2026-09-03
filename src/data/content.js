import {
  Smartphone, Triangle, Box, Wind, Atom, Leaf, Server, Database,
  Layers, DollarSign, CheckSquare, GraduationCap, Trophy, BookOpen,Code,Layout, Figma, Briefcase, FileText, ShieldCheck, HelpCircle, TrendingUp, Code2, Zap,
  Scissors
} from "lucide-react";



export const NAV_ITEMS = ["Home", "About", "Services", "Resume", "Projects", "Contact"];

export const SKILLS = [
  { name: "React", exp: "7 Years Experience", icon: Atom, color: "#61DAFB" },
  { name: "Angular", exp: "1 Year Experience", icon: Triangle, color: "#DD0031" },
  { name: "Bootstrap", exp: "5 Year Experience", icon: Box, color: "#7952B3" },
  { name: "Vue", exp: "0.6 Year Experience", icon: Wind, color: "#41B883" },
  { name: "MongoDB", exp: "0.6 Months Experience", icon: Leaf, color: "#47A248" },
  { name: "My Sql", exp: "4 Year Experience", icon: Server, color: "#FF2D20" },
  { name: "Node.js", exp: "2 Months Experience", icon: Database, color: "#3C873A" },
  { name: "Python", exp: "1 Year Experience", icon: Code, color: "#3C873A" },
  { name: "Android", exp: "1 Year Experience", icon: Smartphone, color: "#3DDC84" },
];

export const SERVICES = [
  { title: "Software Development", icon: Code, tint: "#E7EEFD", fg: "#4C6FE8",
    text: "Custom, scalable software tailored to turn complex business needs into efficient digital solutions." },
  { title: "Frontend Development", icon: Layout, tint: "#FDEEE4", fg: "#E8804C",
    text: "Responsive, high-performance interfaces designed to deliver smooth and engaging user experiences." },
  { title: "Backend Development", icon: Server, tint: "#E4F6EA", fg: "#2FA85B",
    text: "Robust architectures, secure APIs, and reliable databases built for speed and effortless scalability." },
  { title: "UI/UX Design", icon: Scissors, tint: "#F3E8FF", fg: "#9333EA",
    text: "User-centered designs, wireframes, and prototypes that blend sleek aesthetics with intuitive usability." },
  { title: "Product Management", icon: Briefcase, tint: "#FEF3C7", fg: "#D97706",
    text: "Strategic direction from ideation to launch, aligning business goals with market demand and user needs." },
  { title: "Requirements Gathering", icon: FileText, tint: "#E0F2FE", fg: "#0284C7",
    text: "Translating vague ideas into clear technical specifications, user stories, and actionable roadmaps." },
  { title: "End-to-End Product Support", icon: Layers, tint: "#FDEEE4", fg: "#E8804C",
    text: "Complete lifecycle management from initial concept and deployment to long-term feature iteration." },
  { title: "Manual Testing & QA", icon: ShieldCheck, tint: "#FFE4E6", fg: "#E11D48",
    text: "Meticulous quality assurance to catch edge cases, eliminate bugs, and guarantee seamless functionality." },
  { title: "Awesome Support", icon: HelpCircle, tint: "#E7EEFD", fg: "#4C6FE8",
    text: "Round-the-clock help keeping projects on track, from first commit to final deploy." },
  { title: "Dynamic Growth", icon: TrendingUp, tint: "#E4F6EA", fg: "#2FA85B",
    text: "Interfaces and backend solutions built to scale as your customer base and features expand." },
  { title: "Clean Code", icon: Code2, tint: "#FDEEE4", fg: "#E8804C",
    text: "Readable, well-tested components that the next developer won't dread opening." },  
  { title: "Fast Delivery", icon: Zap, tint: "#FEF3C7", fg: "#D97706",
    text: "Iterative releases with visible progress every week, avoiding black-box development." },
  { title: "Ongoing Support", icon: CheckSquare, tint: "#E4F6EA", fg: "#2FA85B",
    text: "Maintenance and updates after launch, ensuring long-term product stability." },
];

export const TIMELINE = [
  { year: "2024 Jul — Now", title: "Sr Software Engineer", place: "Tech Mahindra — Hyderabad, India",
    desc: "Delivering quality code by applying the best development practices across client React and Node projects.",
    tags: ["React", "Python", "MySQL"], color: "#E8607A",icon:'./techm.jpeg' },
  { year: "2022 Jul — 2024 Jul", title: "Software Engineer", place: "CognitivZen Technologies — Hyderabad, India",
    desc: "Delivered quality code by applying the best development practices for design-led product teams.Built and maintained full-stack applications end to end, from schema to shipped feature",
    tags: ["Node.js", "React", "Python","JavaScript"], color: "#E8B23C",icon:'./cognitivzen.png' },
  { year: "2022 Feb — 2022 Jul", title: "React Developer", place: "Troy IT consultency, Ireland",
    desc: "Worked on React and Node.js projects, building responsive web applications and implementing RESTful APIs.",
    tags: ["React", "JavaScript", "MySQL"], color: "#3CA86E",icon:'./troy.jpeg' },
  { year: "2021 Sep — 2022 Jan", title: "Frontend Developer", place: "Key Point Technolgies, Hyderabad, India",
    desc: "Started as a junior developer building responsive marketing sites and internal tools.",
    tags: ["Bootstrap", "Material UI","HTML5","CSS3"], color: "#4C6FE8" ,icon:'./kpt.jpeg'},
  { year: "2020 Aug — 2021 Jun", title: "Frontend React Developer", place: "Snapper IT, hyderabad, India",
    desc: "As a junior developer building responsive E commerce sites and internal tools.",
    tags: ["Bootstrap", "Material UI","HTML5","CSS3","JavaScript"], color: "#4C6FE8" ,icon:'./snapperIt.jpeg'},
  { year: "2017 Jan — 2017 Dec", title: "JR.Frontend Developer", place: "DWBI services , Dallas, Texas, USA",
    desc: "Engineered responsive, standards-compliant web pages using HTML5, CSS3, JavaScript/jQuery, and Bootstrap, adhering to W3C and Web 2.0 principles.Enhanced rendering performance of view pages by utilizing the ReactJS library early in its adoptio",
    tags: ["Bootstrap", "Material UI","HTML5","CSS3","JavaScript"], color: "#4C6FE8" ,icon:'./dwbiservices.jpeg'},
];

export const EDUCATION = [
    { year: "2018 Jan — 2019 Dec", title: "Executive Masters in Information Technology and Security Assurance", place: "University of Cumberlands",icon: GraduationCap, color: "#3CA86E",
    desc: "Professional Executive Masters in Information Technology and Security Assurance.", icon: GraduationCap, color: "#E8B23C" },
  { year: "2015 Aug — 2016 Dec", title: "Masters of Technology", place: "Sanfransico Bay University",icon: GraduationCap, color: "#3CA86E",
    desc: "Master of science in computer Science.", icon: GraduationCap, color: "#E8B23C" },
  { year: "2010 — 2014", title: "Bachelor of Technology", place: "Malla Reddy Engineering College", University:"Jawharlal Nehru Technological University, Hyderabad",icon: GraduationCap, color: "#3CA86E",
    desc: "Undergraduate computer applications degree with a focus on web technologies.", icon: GraduationCap, color: "#E8B23C" },
  {year:'2008 — 2010', title: "Intermediate / Pre-University", place: "KLN Junior College, Miryalaguda",desc: "Maths, Physics, Chemistry.", icon: BookOpen, color: "#E8B23C"},
  { year: "2007 — 08", title: "High / Higher Secondary School", place: "Pragathi Vidyalayam, Nereducherla",
    desc: "Completed secondary education with a focus on mathematics and computing.", icon: Trophy, color: "#E8607A" },
];

export const PROJECT_FILTERS = ["All", "Angular", "React"];

export const PROJECTS = [
  { name: "IQ-GEO Product Enhancement", cat: "React", client: "Brightspeed", icon: "./iqgeo.png", tint: "#FBE2E2", fg: "#D0433F" },
  { name: "My Place 4 Parts ", cat: "React", client: "My place4parts", icon: "./myplaceforparts.jpeg", tint: "#E1E9FB", fg: "#4C5FD0" },
  { name: "Transflow", cat: "Python", client: "Key Point Technologies", icon: "./transflow.jpeg", tint: "#E1F5EA", fg: "#2E9C6E" },
  { name: "Close Brothers", cat: "Angular", client: "Close Brothers Inc", icon: "./closeBrothers.jpeg", tint: "#DFF3F6", fg: "#2C9BAC" },
  { name: "Portfolio Application", cat: "React", client: "Abhilash Porella", icon: "./portfolio.png", tint: "#F6EEE1", fg: "#B07D2C" },
];

export const BLOGS = [
  { title: "Change the world with small things", author: "Charles Woodall", date: "14 Feb 2026", tint: "#F1E7DE" },
  { title: "With a clean, minimal and professional look", author: "Jarvis Owen", date: "12 Jan 2026", tint: "#E1EAF1" },
  { title: "Why consistency beats intensity in code", author: "Jarvis Owen", date: "12 Jan 2026", tint: "#EDEAE1" },
];
