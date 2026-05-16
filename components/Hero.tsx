"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "Student Intern", "Java Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-sky-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl text-blue-400 font-semibold mb-4 tracking-wider uppercase">
            Hello, I am
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            Narayanadas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Hemanth</span> Kumar
          </h1>
          
          <div className="h-12 mb-8 flex justify-center items-center">
            <p className="text-2xl md:text-4xl font-medium text-slate-300">
              I am a <span className="text-blue-400 border-r-2 border-blue-400 pr-1 animate-pulse">{text}</span>
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            Passionate BTech CSE student seeking a Student Intern – DEV Engineer role. Strong in C, Java, Data Structures, and Web Technologies. Enthusiastic about software design, coding, debugging, and working in Agile teams.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://drive.google.com/file/d/16AOeznSPqN3JXps7RQicrs0xD58kcJnT/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center gap-2 transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all flex items-center gap-2 border border-slate-700 transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
