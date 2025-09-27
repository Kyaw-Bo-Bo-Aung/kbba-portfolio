"use client";

import { Earth, Github, Globe, Link, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeadlineDivider from "./common/HeadlineDivider";

export default function PortfolioWebsites() {
  const projects = [
    {
      id: 1,
      name: "AirBooking",
      purpose:
        "A travel technology platform for corporate travel management, providing an AI-powered solution for planning, booking, and managing travel for businesses, TMCs, and airlines.",
      githubUrl: null,
      websiteUrl: "https://github.com/yourusername/weather-app",
      isPrivate: false,
      tech: [
        "Airline Booking",
        "IATA NDC Standard",
        "Payment Gateway",
        "Microservices",
        "Branding",
        "APIs",
      ],
      image: "/portfolios/air_retailer_1.png",
    },
    {
      id: 2,
      name: "KZL - Travel Management System",
      purpose:
        "A comprehensive web application designed to streamline and automate the management of travel-related activities for businesses, including booking, expense tracking, and itinerary management.",
      githubUrl: null,
      isPrivate: true,
      tech: ["Order Management", "Inventory", "CRM", "Analytics"],
      image: "/portfolio/client-system.png",
    },
    {
      id: 3,
      name: "WANNABE - Online Shop Management System",
      purpose:
        "A full-featured web platform that streamlines online retail operations, covering product catalog management, inventory tracking, order processing, customer relations, and sales analytics.",
      githubUrl: null,
      isPrivate: true,
      tech: ["Stock Management", "Order Processing", "Delivery Tracking"],
      image: "/portfolios/wannabe.png",
    },
    {
      id: 4,
      name: "BiB Softwares (App Suite)",
      purpose:
        "A suite of business management software solutions designed to optimize various operational aspects such as HR, school administration, sales, and inventory management.",
      githubUrl: null,
      websiteUrl: "https://github.com/yourusername/weather-app",
      isPrivate: false,
      tech: [
        "HR Management",
        "School Management",
        "POS & Inventory Control System",
        "Mini ERP",
      ],
      image: "/portfolio/weather.png",
    },
    {
      id: 5,
      name: "Dingar - Digital Wallet",
      purpose:
        "A digital wallet application that allows users to securely store, manage, and transact with their money electronically, providing features such as peer-to-peer payments and transaction history.",
      githubUrl: "null",
      isPrivate: false,
      tech: ["Mobile Payments", "QR Code", "Account Checking"],
      image: "/portfolios/e_wallet.png",
    },
    {
      id: 6,
      name: "Job Finder Platform",
      purpose:
        "A job search platform that connects job seekers with employers, offering features such as job listings from the third-party APIs.",
      githubUrl: "null",
      isPrivate: false,
      tech: ["Third-party API", "Job Search", "Filtering", "Bookmarking"],
      image: "/portfolios/job_finder.png",
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
          <h2 className="text-3xl font-bold text mb-4">
            Featured <span className="title-text">Projects</span>
          </h2>
          <p className="text-md secondary-text max-w-2xl mx-auto mb-6">
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
              <div className="relative w-full h-52">
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

                {project.isPrivate && (
                  <div className="project-button-disabled">
                    <Lock className="w-4 h-4 mr-2" />
                    Confidential
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
                ) : null}
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex border border-gray-600 text-gray-400 cursor-pointer
            duration-300 hover:bg-gray-700 hover:border-gray-500 hover:text-whiteinline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Website
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center items-baseline gap-5">
        <motion.div
          className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-slate-500 rounded-full`}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>
        <span>and many more on my github</span>
        <motion.div
          className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-slate-500 rounded-full`}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>
      </div>
    </section>
  );
}
