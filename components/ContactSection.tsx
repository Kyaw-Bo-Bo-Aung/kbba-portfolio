"use client";
import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
  User,
} from "lucide-react";
import HeadlineDivider from "./common/HeadlineDivider";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();
  const storage = typeof window !== "undefined" ? localStorage : null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "email_limit" | null>(
    null
  );

  const contactInfo = {
    email: "dev.kyawboboaung@gmail.com",
    github: "https://www.linkedin.com/in/kyaw-bo-bo-aung/",
    linkedin: "https://www.linkedin.com/in/kyaw-bo-bo-aung/",
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if(new Date().getTime() - new Date(storage?.getItem("lastContactFormSubmitted") || "").getTime() < 60 * 1000) {
      setSubmitStatus("email_limit");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });
      setSubmitStatus("success");
      storage?.setItem("lastContactFormSubmitted", new Date().toISOString());
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.name.trim() && formData.email.trim() && formData.subject.trim() && formData.message.trim();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text">
            {t("contact.sectionTitle")}{" "}
            <span className="title-text">{t("contact.sectionTitle2")}</span>
          </h2>
          <p className="secondary-text text-sm mt-2">{t("contact.subtitle")}</p>
          {/* Divider */}
          <HeadlineDivider />
        </div>

        {/* 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {/* Email */}
            <a href={`mailto:${contactInfo.email}`} className="contact-card">
              <div className="contact-icon bg-gradient-to-r from-red-500 to-pink-500">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4>{t("contact.info.email.label")}</h4>
                <p>{contactInfo.email}</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon bg-gradient-to-r from-gray-700 to-gray-900">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h4>{t("contact.info.github.label")}</h4>
                <p>{contactInfo.github}</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon bg-gradient-to-r from-blue-500 to-blue-600">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h4>{t("contact.info.linkedin.label")}</h4>
                <p>{contactInfo.linkedin}</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <label className="contact-label">
                {t("contact.form.name.label")}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t("contact.form.name.placeholder")}
                  className="contact-input contact-input-with-icon"
                />
              </div>
            </div>

            <div>
              <label className="contact-label">
                {t("contact.form.email.label")}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t("contact.form.email.placeholder")}
                  className="contact-input contact-input-with-icon"
                />
              </div>
            </div>

            <input
              type="text"
              name="website"
              value={formData.website || ""}
              onChange={handleInputChange}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />
            <div>
              <label className="contact-label">
                {t("contact.form.subject.label")}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={t("contact.form.subject.placeholder")}
                className="contact-input"
              />
            </div>

            <div>
              <label className="contact-label">
                {t("contact.form.message.label")}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder={t("contact.form.message.placeholder")}
                className="contact-input resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`contact-submit ${
                isFormValid && !isSubmitting
                  ? "contact-submit-enabled"
                  : "contact-submit-disabled"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-gray-400 border-t-white rounded-full animate-spin mr-2"></div>
                  {t("contact.form.sending")}
                </div>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  {t("contact.form.submit.enabled")}
                </>
              )}
            </button>

            {submitStatus && (
              <div
                className={`contact-status ${
                  submitStatus === "success"
                    ? "contact-status-success"
                    : "contact-status-error"
                }`}
              >
                {submitStatus === "success" ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {t("contact.form.status.success")}
                  </>
                ) : submitStatus === "email_limit" ?
                (
                  <>
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {t("contact.form.status.email_limit")}
                  </>
                )
                : (
                  <>
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {t("contact.form.status.error")}
                  </>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
