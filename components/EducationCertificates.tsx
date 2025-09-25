"use client";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationCertificates() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      location: "New York, NY",
      duration: "2014 - 2018",
    },
    {
      id: 2,
      degree: "Master of Software Engineering",
      school: "Tech Institute of Excellence",
      location: "San Francisco, CA",
      duration: "2018 - 2020",
    },
  ];

  const certificates = [
    {
      id: 1,
      title: "AWS Solutions Architect Professional",
      provider: "Amazon Web Services",
    },
    {
      id: 2,
      title: "Google Cloud Professional Developer",
      provider: "Google Cloud Platform",
    },
    { id: 3, title: "React Developer Certification", provider: "Meta" },
    {
      id: 4,
      title: "Node.js Application Development",
      provider: "Linux Foundation",
    },
    {
      id: 5,
      title: "MongoDB Certified Developer",
      provider: "MongoDB University",
    },
    { id: 6, title: "Docker Certified Associate", provider: "Docker Inc." },
  ];

  return (
    <section className="my-20 from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid gap-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-slate-800/40 border border-slate-700 rounded-lg p-5 
                             hover:bg-slate-700/40 hover:border-slate-600 
                             transition-all duration-300 group"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-emerald-400 font-medium mb-3">
                    {edu.school}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-pink-400" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-red-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificates Section */}
          <div>
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-orange-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-3">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/40 border border-slate-700 rounded-lg p-4 
                             hover:bg-slate-700/40 hover:border-slate-600 
                             transition-all duration-300 group"
                >
                  <h4 className="text-base font-semibold text-white group-hover:text-orange-300 transition-colors duration-300 mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-gray-400">{cert.provider}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
