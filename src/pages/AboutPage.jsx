import PageHero from "../components/PageHero.jsx";
import PersonalDetails from "../components/PersonalDetails.jsx";
import EducationExperience from "../components/EducationExperience.jsx";

export default function AboutPage() {
  return (
    <>
      <PageHero label="About" />
      <PersonalDetails />
      <EducationExperience />
    </>
  );
}
