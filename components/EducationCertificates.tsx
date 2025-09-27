/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useTranslation } from "react-i18next";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import HeadlineDivider from "./common/HeadlineDivider";

export default function EducationCertificates() {
  const { t } = useTranslation();

  const education = t("education.list", { returnObjects: true }) as any;
  const certificates = t("certificates.list", { returnObjects: true }) as any;

  return (
    <section className="my-20 from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl text font-bold mb-4">
            {t("education.sectionTitle")} &{" "}
            <span className="title-text">{t("certificates.sectionTitle")}</span>
          </h2>
          <HeadlineDivider />
        </div>

        <div className="grid gap-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold secondary-text">
                {t("education.sectionTitle")}
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((edu: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="education-card"
                >
                  <h4 className="education-title">{edu.degree}</h4>
                  <p className="education-school">{edu.school}</p>
                  <div className="education-meta">
                    <div className="education-meta-item">
                      <Calendar className="w-4 h-4 mr-2 text-pink-400" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="education-meta-item">
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
              <h3 className="text-xl font-bold text">
                {t("certificates.sectionTitle")}
              </h3>
            </div>

            <div className="space-y-3">
              {certificates.map((cert: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="certificate-card"
                >
                  <h4 className="certificate-title">{cert.title}</h4>
                  <p className="certificate-provider">{cert.provider}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
