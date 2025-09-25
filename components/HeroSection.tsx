"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
  Database,
  Monitor,
} from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const { t, i18n } = useTranslation();

  const roles = t("roles", { returnObjects: true }) as string[];

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText !== currentRole) {
            setDisplayText(currentRole.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText !== "") {
            setDisplayText(currentRole.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  return (
    <section className="py-20 min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Name */}
            <h1 className="text-5xl lg:text-7xl hero-tile leading-tight">
              {t("name.first")}
            </h1>

            {/* Animated Role */}
            <div className="h-12 flex flex-col">
              <span className="text-2xl lg:text-3xl secondary-text mr-2">
                {t("hero.iam")}
              </span>
              <span className="text-2xl lg:text-3xl font-semibold running-text min-w-max">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-lg text leading-relaxed max-w-2xl">
              {t("hero.description")}
            </p>

            {/* Skills */}
            <div className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0">
              <div className="skill-badge">
                <Monitor className="w-5 h-5 skill-icon-blue" />
                <span>{t("hero.skills.frontend")}</span>
              </div>
              <div className="skill-badge">
                <Database className="w-5 h-5 skill-icon-green" />
                <span>{t("hero.skills.backend")}</span>
              </div>
              <div className="skill-badge">
                <Code className="w-5 h-5 skill-icon-purple" />
                <span>{t("hero.skills.fullstack")}</span>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center space-x-4 secondary-text">
              <MapPin className="w-5 h-5 text-red-400" />
              <span>{t("hero.availability")}</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="btn-action px-8 py-3">
                {t("hero.buttons.work")}
              </button>

              <button
                className="border border-gray-600 text-gray-400 px-8 py-3 rounded-lg font-semibold cursor-pointer
           transition-colors duration-300 hover:bg-gray-700 hover:border-gray-500 hover:text-white"
              >
                {t("hero.buttons.contact")}
              </button>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Elements */}
              {/* <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20"></div> */}

              {/* Image Container */}
              {/* <div className="relative rounded-2xl p-1 shadow-2xl"> */}
              <div className="w-50 h-30 sm:w-100 sm:h-[14rem] md:w-160 lg:h-[28rem] rounded-xl flex items-center justify-center text-gray-400">
                <Image
                  src="/kbba_hero.png"
                  alt="Profile Image"
                  fill
                  objectFit="contain"
                  // width={600}
                  // height={400}
                  className="rounded-xl object-cover"
                />
              </div>
              {/* Placeholder for your image */}
              {/* <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                      KBA
                    </div>
                    <p className="text-sm">Your photo will go here</p>
                    <p className="text-xs text-gray-500">
                      Replace this placeholder with your image
                    </p>
                  </div> */}
              {/* </div> */}
              {/* </div> */}

              {/* Floating Elements */}
              {/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full animate-bounce"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div> */}
            </div>
          </div>
        </div>

        {/* 🌍 Language Switcher */}
        <div className="mt-8 flex gap-3 text">
          <button onClick={() => i18n.changeLanguage("en")}>🇺🇸 EN</button>
          <button onClick={() => i18n.changeLanguage("mm")}>🇲🇲 MM</button>
          <button onClick={() => i18n.changeLanguage("th")}>🇹🇭 TH</button>
        </div>
      </div>
    </section>
  );
}
