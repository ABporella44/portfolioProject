import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const PAGES = {
  Home: HomePage,
  About: AboutPage,
  Services: ServicesPage,
  Resume: ResumePage,
  Projects: ProjectsPage,
  Blogs: BlogsPage,
  Contact: ContactPage,
};

export default function App() {
  const [page, setPage] = useState("Home");
  const ActivePage = PAGES[page];

  return (
    <div className="font-sans antialiased text-slate-800 bg-white min-h-screen">
      <Header page={page} setPage={setPage} />
      <ActivePage setPage={setPage} />
      <Footer setPage={setPage} />
    </div>
  );
}
