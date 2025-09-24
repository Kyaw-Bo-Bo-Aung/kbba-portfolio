import HeroSection from "@/components/HeroSection";
import SkillsCarousel from "@/components/SkillSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <HeroSection />
        <SkillsCarousel />
    </div>
    </>
  );
}
