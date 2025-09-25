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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const contactInfo = {
    email: "kyawboboaung@gmail.com",
    github: "https://github.com/kyawboboaung",
    linkedin: "https://linkedin.com/in/kyawboboaung",
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

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.name && formData.email && formData.subject && formData.message;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text">
            Get in{" "}
            <span className="title-text">
              Touch
            </span>
          </h2>
          <p className="secondary-text text-sm mt-2">
            I’d love to hear from you — let’s build something great together.
          </p>
          <HeadlineDivider />
        </div>

        {/* 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <a href={`mailto:${contactInfo.email}`} className="contact-card">
              <div className="contact-icon bg-gradient-to-r from-red-500 to-pink-500">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4>Email</h4>
                <p>{contactInfo.email}</p>
              </div>
            </a>

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
                <h4>GitHub</h4>
                <p>Repositories & projects</p>
              </div>
            </a>

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
                <h4>LinkedIn</h4>
                <p>Professional networking</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <label className="contact-label">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="contact-input contact-input-with-icon"
                />
              </div>
            </div>

            <div>
              <label className="contact-label">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="contact-input contact-input-with-icon"
                />
              </div>
            </div>

            <div>
              <label className="contact-label">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                className="contact-input"
              />
            </div>

            <div>
              <label className="contact-label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Tell me about your project..."
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
                  Sending...
                </div>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
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
                    Message sent successfully!
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Failed to send. Try again.
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
