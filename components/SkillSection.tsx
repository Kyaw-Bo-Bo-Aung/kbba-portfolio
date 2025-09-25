"use client";
import { Server, Cloud, Monitor } from "lucide-react";
import HtmlIcon from "./svgs/html";
import CssIcon from "./svgs/css";
import JsIcon from "./svgs/js";
import ReactIcon from "./svgs/react";
import NodeJsIcon from "./svgs/node";
import ExpressJsIcon from "./svgs/express";
import TypeScriptIcon from "./svgs/typeScript";
import MongoDBIcon from "./svgs/mongo";
import NextJsIcon from "./svgs/next";
import DockerIcon from "./svgs/docker";
import GitIcon from "./svgs/git";
import PgSqlIcon from "./svgs/postgresql";
import JavaIcon from "./svgs/java";
import SpringIcon from "./svgs/spring";
import SpringBootIcon from "./svgs/springboot";
import SassIcon from "./svgs/sass";
import GraphQLIcon from "./svgs/graphql";
import TailwindIcon from "./svgs/tailwind";
import AwsIcon from "./svgs/aws";
import { useTranslation } from "react-i18next";
import HeadlineDivider from "./common/HeadlineDivider";

export default function SkillsCarousel() {
  const { t } = useTranslation();

  const skills = [
    { name: "Java", icon: <JavaIcon />, color: "text-orange-300" },
    { name: "Spring", icon: <SpringIcon />, color: "text-green-300" },
    { name: "Spring Boot", icon: <SpringBootIcon />, color: "text-green-300" },
    { name: "HTML5", icon: <HtmlIcon />, color: "text-orange-400" },
    { name: "CSS3", icon: <CssIcon />, color: "text-blue-400" },
    { name: "JavaScript", icon: <JsIcon />, color: "text-yellow-400" },
    { name: "React", icon: <ReactIcon />, color: "text-cyan-300" },
    { name: "Node.js", icon: <NodeJsIcon />, color: "text-green-500" },
    { name: "Express", icon: <ExpressJsIcon />, color: "secondary-text" },
    { name: "MongoDB", icon: <MongoDBIcon />, color: "text-green-500" },
    { name: "PostgreSQL", icon: <PgSqlIcon />, color: "text-blue-500" },
    // { name: "Python", icon: "🐍", color: "text-yellow-300" },
    { name: "TypeScript", icon: <TypeScriptIcon />, color: "text-blue-400" },
    // { name: "Vue.js", icon: "💚", color: "text-green-400" },
    { name: "Next.js", icon: <NextJsIcon />, color: "secondary-text" },
    { name: "Docker", icon: <DockerIcon />, color: "text-blue-400" },
    { name: "AWS", icon: <AwsIcon />, color: "secondary-text" },
    { name: "Git", icon: <GitIcon />, color: "secondary-text" },
    // { name: "Linux", icon: "🐧", color: "text-yellow-300" },
    // { name: "Redis", icon: "🔴", color: "text-red-400" },
    { name: "GraphQL", icon: <GraphQLIcon />, color: "text-pink-400" },
    // { name: "Firebase", icon: "🔥", color: "text-orange-400" },
    { name: "Tailwind", icon: <TailwindIcon />, color: "text-teal-400" },
    { name: "Sass", icon: <SassIcon />, color: "text-pink-400" },
  ];

  // Duplicate the skills array to create seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section className="my-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text mb-6">
            {t("skill.title")} &{" "}
            <span className="title-text">
              {t("skill.title2")}
            </span>
          </h2>
          <p className="text-xl secondary-text max-w-3xl mx-auto">
            {t("skill.description")}
          </p>

          {/* Decorative line */}
          <HeadlineDivider />
        </div>

        {/* Infinite Scrolling Container */}
        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-32 h-full skill-edge-right z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full skill-edge-left z-10 pointer-events-none"></div>

          {/* Scrolling track */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll space-x-8 py-8">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className=" backdrop-blur-sm border border-slate-700 rounded-2xl p-6 w-32 h-32 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-2xl">
                    {/* Icon */}
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>

                    {/* Skill name */}
                    <span
                      className={`text-sm font-semibold ${skill.color} transition-colors duration-300`}
                    >
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills Categories */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="skill-card">
            <Monitor className="skill-icon skill-icon-blue" />
            <h3 className="skill-title">{t("skill.frontend.title")}</h3>
            <p className="skill-desc">{t("skill.frontend.description")}</p>
          </div>

          <div className="skill-card">
            <Server className="skill-icon skill-icon-green" />
            <h3 className="skill-title">{t("skill.backend.title")}</h3>
            <p className="skill-desc">{t("skill.backend.description")}</p>
          </div>

          <div className="skill-card">
            <Cloud className="skill-icon skill-icon-purple" />
            <h3 className="skill-title">{t("skill.cloud.title")}</h3>
            <p className="skill-desc">{t("skill.cloud.description")}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 35s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
