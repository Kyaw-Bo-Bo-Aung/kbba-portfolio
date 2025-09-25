"use client";

import { Github, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PortfolioWebsites() {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Dashboard",
      purpose:
        "Full-stack admin dashboard for managing online store operations with real-time analytics and inventory management",
      githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
      isPrivate: false,
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/portfolio/ecommerce.png", // replace with real image
    },
    {
      id: 2,
      name: "Client Management System",
      purpose:
        "Internal system developed for client to streamline their business operations and workflow management",
      githubUrl: null,
      isPrivate: true,
      tech: null,
      image: "/portfolio/client-system.png",
    },
    {
      id: 3,
      name: "Weather Forecast App",
      purpose:
        "Modern weather application with location-based forecasts, interactive maps, and detailed weather insights",
      githubUrl: "https://github.com/yourusername/weather-app",
      isPrivate: false,
      tech: ["React", "Weather API", "CSS3", "JavaScript"],
      image: "/portfolio/weather.png",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="my-20 from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            A showcase of my recent work including personal projects and client
            solutions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative rounded-2xl overflow-hidden border border-slate-700 group bg-slate-800/40"
            >
              {/* Project Image */}
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.purpose}
                </p>

                {project.tech && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                ) : (
                  <div className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-400 bg-slate-700/50 cursor-not-allowed">
                    <Lock className="w-4 h-4 mr-2" />
                    Confidential
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
