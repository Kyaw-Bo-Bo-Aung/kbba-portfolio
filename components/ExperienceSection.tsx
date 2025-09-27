/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useTranslation, Trans } from "react-i18next";
import { MapPin, Calendar, Briefcase, Building } from "lucide-react";
import { motion } from "framer-motion";
import HeadlineDivider from "./common/HeadlineDivider";

export default function ExperienceTimeline() {
  const { t } = useTranslation();

  const experiences = t("items", { returnObjects: true }) as any[];

  return (
    <section className="my-20 from-slate-900 to-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text text-3xl font-bold mb-6">
            {t("experience.title")}{" "}
            <span className="title-text">{t("experience.title2")}</span>
          </h2>
          <p className="secondary-text text-md max-w-3xl mx-auto">
            {t("experience.subtitle")}
          </p>
          <HeadlineDivider />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 timeline-bg"></div>
          {/* Experience Cards */}
          <div className="space-y-12 md:space-y-24">
            {experiences?.map((experience: any, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Timeline Dot */}{" "}
                  <div
                    className={`hidden md:block absolute ${
                      isEven ? "md:left-1/2 left-8" : "md:left-1/2 left-8"
                    } transform md:-translate-x-1/2 -translate-x-1/2 z-20`}
                  >
                    <div className="w-4 h-4 timeline-bg rounded-full border-4 border-slate-900 shadow-lg"></div>
                  </div>
                  {/* Card */}
                  <div className="w-full md:w-5/12 md:ml-0">
                    <div className="experience-card group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="experience-title">
                            {experience.title}
                          </h3>
                          <div className="experience-company text-emerald-400">
                            <Building className="w-4 h-4 mr-2" />
                            <span>{experience.company}</span>
                          </div>
                        </div>
                        <Briefcase className="w-6 h-6 text-indigo-400 flex-shrink-0 ml-4" />
                      </div>

                      <div className="experience-meta">
                        <div className="experience-meta-item">
                          <Calendar className="w-4 h-4 mr-2 text-red-400" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="experience-meta-item">
                          <MapPin className="w-4 h-4 mr-2 text-blue-800" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      <p className="experience-desc">
                        {experience.description}
                      </p>

                      <div className="experience-achievements space-y-2">
                        <h4>{t("experience.achievements")}</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map(
                            (ach: string, idx: number) => (
                              <li key={idx}>
                                <span>•</span>
                                {ach}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
