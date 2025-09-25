"use client";
import { useState, useEffect } from "react";
import {
  Home,
  Zap,
  Briefcase,
  FolderOpen,
  Mail,
  ChevronUp,
  Menu,
  X,
  School,
  Star,
} from "lucide-react";

const sections = [
  { id: "hero", label: "Home", icon: Home },
  { id: "skills", label: "Skills", icon: Zap },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: Star },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
      setShowScrollTop(scrollPosition > 500);

      // Determine active section
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
        offset:
          document.getElementById(section.id)?.getBoundingClientRect().top || 0,
      }));

      const currentSection = sectionElements.find(
        (section) =>
          section.element && section.offset >= -200 && section.offset <= 300
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Navigation */}
      <nav
        className={`fixed top-1/2 right-6 transform -translate-y-1/2 z-50 hidden lg:block transition-all duration-300 ${
          isScrolled ? "opacity-100 scale-100" : "opacity-80 scale-95"
        }`}
      >
        <div className="bg-slate-800/90 backdrop-blur-md border border-slate-600 rounded-2xl p-3 shadow-2xl">
          <ul className="space-y-2">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;

              return (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "btn-action shadow-lg scale-110"
                        : "bg-slate-700/50 text-gray-400 hover:bg-slate-600/50 hover:text-white hover:scale-105"
                    }`}
                    title={section.label}
                  >
                    <Icon className="w-5 h-5" />

                    {/* Tooltip */}
                    <span
                      className={`absolute right-full mr-3 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 pointer-events-none transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? "group-hover:opacity-100"
                          : "group-hover:opacity-100"
                      }`}
                    >
                      {section.label}
                      <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-slate-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Top Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <div className="text-xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-400 to-slate-400 leading-tight">KBBA</div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-slate-800/50 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-700 shadow-2xl transition-all duration-300 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="px-4 py-4">
              <ul className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;

                  return (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                            : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white"
                        }`}
                      >
                        <Icon className="w-5 h-5 mr-3" />
                        <span className="font-medium">{section.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 w-12 h-12  action-bg text-white rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-purple-500/25 ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        title="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </>
  );
}
