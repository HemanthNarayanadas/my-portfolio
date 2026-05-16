"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  { name: "MongoDB Associate Developer", issuer: "MongoDB" },
  { name: "Oracle Certified Associate", issuer: "Oracle" },
  { name: "RPA Automation Anywhere", issuer: "Automation Anywhere" },
  { name: "Deloitte Data Analytics", issuer: "Deloitte" },
  { name: "HP LIFE AI for Beginners", issuer: "HP LIFE" }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-green-500/50 transition-colors"
            >
              <div className="p-3 bg-green-500/10 rounded-xl text-green-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1 leading-tight">{cert.name}</h3>
                <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>{cert.issuer}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
