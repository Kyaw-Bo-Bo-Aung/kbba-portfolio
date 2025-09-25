"use client";

import { Github, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeadlineDivider from "./common/HeadlineDivider";

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
          <h2 className="text-4xl font-bold text mb-4">
            Featured <span className="title-text">Projects</span>
          </h2>
          <p className="text-lg secondary-text max-w-2xl mx-auto mb-6">
            A showcase of my recent work including personal projects and client
            solutions
          </p>
          <HeadlineDivider />
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
              className="project-card"
            >
              {/* Project Image */}
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="project-image"
                />
                <div className="project-overlay"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-purpose">{project.purpose}</p>

                {project.tech && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="project-tech">
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
                    className="project-button"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                ) : (
                  <div className="project-button-disabled">
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
