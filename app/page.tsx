import ContactSection from "@/components/ContactSection";
import EducationCertificates from "@/components/EducationCertificates";
import ExperienceTimeline from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import PortfolioWebsites from "@/components/Portfolios";
import SkillsCarousel from "@/components/SkillSection";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <Navigation />
        <div id="hero">
          <HeroSection />
        </div>
        <div id="skills">
          <SkillsCarousel />
        </div>
        <div id="experience">
          <ExperienceTimeline />
        </div>
        <div id="education">
          <EducationCertificates />
        </div>
        <div id="projects">
          <PortfolioWebsites />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </>
  );
}
