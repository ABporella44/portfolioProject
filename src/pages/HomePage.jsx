import Hero from "../components/Hero.jsx";
import PersonalDetails from "../components/PersonalDetails.jsx";
import SkillsGrid from "../components/SkillsGrid.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import EducationExperience from "../components/EducationExperience.jsx";
import ProjectsGrid from "../components/ProjectsGrid.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function HomePage({ setPage }) {
  return (
    <>
      <Hero setPage={setPage} />
      <PersonalDetails />
      <SkillsGrid />
      <ServicesSection full={true} />
      <EducationExperience />
      <ProjectsGrid withFilter={false} />
      <ContactForm />
    </>
  );
}
