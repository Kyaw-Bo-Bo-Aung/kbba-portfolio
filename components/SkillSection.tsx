'use client'
import {
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
  Palette,
  Settings,
  Zap,
  Cloud,
  GitBranch,
  Terminal,
  Layers,
} from "lucide-react";
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

export default function SkillsCarousel() {
  const skills = [
    { name: "Java", icon: <JavaIcon />, color: "text-orange-300" },
    { name: "Spring", icon: <SpringIcon />, color: "text-green-300" },
    { name: "Spring Boot", icon: <SpringBootIcon />, color: "text-green-300" },
    { name: "HTML5", icon: <HtmlIcon />, color: "text-orange-400" },
    { name: "CSS3", icon: <CssIcon />, color: "text-blue-400" },
    { name: "JavaScript", icon: <JsIcon />, color: "text-yellow-400" },
    { name: "React", icon: <ReactIcon />, color: "text-cyan-300" },
    { name: "Node.js", icon: <NodeJsIcon />, color: "text-green-500" },
    { name: "Express", icon: <ExpressJsIcon />, color: "text-gray-300" },
    { name: "MongoDB", icon: <MongoDBIcon />, color: "text-green-500" },
    { name: "PostgreSQL", icon: <PgSqlIcon />, color: "text-blue-500" },
    // { name: "Python", icon: "🐍", color: "text-yellow-300" },
    { name: "TypeScript", icon: <TypeScriptIcon />, color: "text-blue-400" },
    // { name: "Vue.js", icon: "💚", color: "text-green-400" },
    { name: "Next.js", icon: <NextJsIcon />, color: "text-white" },
    { name: "Docker", icon: <DockerIcon />, color: "text-blue-400" },
    { name: "AWS", icon: <AwsIcon />, color: "text-orange-300" },
    { name: "Git", icon: <GitIcon />, color: "text-orange-400" },
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
    <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Tech Stack &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-400">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-slate-500 rounded-full"></div>
          </div>
        </div>

        {/* Infinite Scrolling Container */}
        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling track */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll space-x-8 py-8">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 w-32 h-32 flex flex-col items-center justify-center hover:bg-slate-700/50 hover:border-slate-600 hover:scale-110 transition-all duration-300 hover:shadow-2xl">
                    {/* Icon */}
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>

                    {/* Skill name */}
                    <span
                      className={`text-sm font-semibold ${skill.color} group-hover:text-white transition-colors duration-300`}
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
          <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:bg-slate-700/30 transition-all duration-300">
            <Code2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Frontend</h3>
            <p className="text-gray-400">
              Modern UI/UX with React, NextJs and responsive design
            </p>
          </div>

          <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:bg-slate-700/30 transition-all duration-300">
            <Server className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
            <p className="text-gray-400">
              Scalable APIs with Node.js, Express, Java, Spring Boot, REST, GraphQL and databases
            </p>
          </div>

          <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:bg-slate-700/30 transition-all duration-300">
            <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Cloud</h3>
            <p className="text-gray-400">
              Microservices,
              Cloud deployment, Docker, and CI/CD pipelines
            </p>
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
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
