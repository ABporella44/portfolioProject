import PageHero from "../components/PageHero.jsx";
import ProjectsGrid from "../components/ProjectsGrid.jsx";

export default function ProjectsPage() {
  return (
    <>
      <PageHero label="Projects" />
      <ProjectsGrid withFilter={true} />
    </>
  );
}
