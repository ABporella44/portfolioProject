import PageHero from "../components/PageHero.jsx";
import SkillsGrid from "../components/SkillsGrid.jsx";
import EducationExperience from "../components/EducationExperience.jsx";

export default function ResumePage() {
  return (
    <>
      <PageHero label="Resume" />
      <SkillsGrid />
      <EducationExperience />
    </>
  );
}
