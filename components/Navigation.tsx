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
        className={`nav-desktop ${
          isScrolled ? "opacity-100 scale-100" : "opacity-80 scale-95"
        }`}
      >
        <div className="nav-desktop-container space-y-2">
          <ul>
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`nav-desktop-btn ${
                      isActive
                        ? "nav-desktop-btn-active"
                        : "nav-desktop-btn-inactive"
                    }`}
                    title={section.label}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="nav-tooltip">{section.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Top Navigation */}
      <nav
        className={`nav-mobile ${
          isScrolled ? "nav-mobile-scrolled" : "bg-transparent"
        }`}
      >
        <div className="nav-mobile-container">
          <div className="nav-mobile-inner">
            <div className="text-xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-400 to-slate-400">
              KBBA
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="nav-mobile-menu-btn"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          <div
            className={`nav-mobile-dropdown ${
              isMobileMenuOpen
                ? "nav-mobile-dropdown-open"
                : "nav-mobile-dropdown-closed"
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
                        className={`nav-mobile-link ${
                          isActive
                            ? "nav-mobile-link-active"
                            : "nav-mobile-link-inactive"
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

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn action-bg ${
          showScrollTop ? "scroll-top-visible" : "scroll-top-hidden"
        }`}
        title="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </>
  );
}
