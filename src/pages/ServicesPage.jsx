import PageHero from "../components/PageHero.jsx";
import ServicesSection from "../components/ServicesSection.jsx";

export default function ServicesPage() {
  return (
    <>
      <PageHero label="Services" />
      <ServicesSection full={true} />
    </>
  );
}
