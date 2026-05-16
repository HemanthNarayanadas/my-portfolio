"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="glass p-8 rounded-2xl h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Phone</p>
                    <p className="text-white font-medium">+91 8688272445</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <a href="mailto:hemanthnarayanadas145@gmail.com" className="text-white font-medium hover:text-blue-400 transition-colors">
                      hemanthnarayanadas145@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Location</p>
                    <p className="text-white font-medium">Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3"
          >
            <div className="glass p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                    placeholder="Hello Hemanth, I'd like to discuss an opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : submitted ? (
                    <span className="text-green-300">Message Sent Successfully!</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
