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
          <h2 className="text-4xl font-bold text-white">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            I’d love to hear from you — let’s build something great together.
          </p>
        </div>

        {/* 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-700/50 transition"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 rounded-md mr-3">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">Email</h4>
                <p className="text-gray-400 text-xs">{contactInfo.email}</p>
              </div>
            </a>

            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-700/50 transition"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900 rounded-md mr-3">
                <Github className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">GitHub</h4>
                <p className="text-gray-400 text-xs">Repositories & projects</p>
              </div>
            </a>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-700/50 transition"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 rounded-md mr-3">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">LinkedIn</h4>
                <p className="text-gray-400 text-xs">Professional networking</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-700/50 border border-slate-600 rounded-md text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-700/50 border border-slate-600 rounded-md text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm bg-slate-700/50 border border-slate-600 rounded-md text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 text-sm bg-slate-700/50 border border-slate-600 rounded-md text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full py-2 px-4 text-sm rounded-md font-semibold flex items-center justify-center transition ${
                isFormValid && !isSubmitting
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                  : "bg-slate-700 text-gray-400 cursor-not-allowed"
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
                className={`mt-3 p-2 rounded-md flex items-center text-sm ${
                  submitStatus === "success"
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
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
