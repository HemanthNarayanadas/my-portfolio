"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)] shrink-0">
              <Image 
                src="/profile.jpg" 
                alt="Narayanadas Hemanth Kumar" 
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                I am a passionate BTech CSE and BBA Dual Degree student at K L University. I have a strong foundation in C, Java, Data Structures, and modern Web Technologies. I am enthusiastic about software design, coding, debugging, and I thrive when working in Agile teams to build impactful solutions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-slate-800 rounded-lg text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Hyderabad, India</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-slate-800 rounded-lg text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:hemanthnarayanadas145@gmail.com" className="hover:text-blue-400 transition-colors">
                    hemanthnarayanadas145@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/HemanthNarayanadas" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700">
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/hemanth-narayanadas-4906211b4" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700">
                  <FaLinkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a href="#coding-profiles" className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 rounded-lg transition-colors border border-blue-500/30">
                  <ExternalLink className="w-5 h-5" />
                  <span>Coding Profiles</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
