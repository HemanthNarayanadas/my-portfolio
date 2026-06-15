"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "School Management ERP System",
    description: "Developed a comprehensive School Management ERP platform featuring multi-role authentication (Principal, Teacher, Student, Parent), attendance management, academic tracking, and responsive performance analytics dashboards.",
    impact: "Designed a responsive school website CMS, implemented secure RBAC authentication, and built student performance analytics dashboards.",
    image: "/project_erp.png",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "JWT"],
    github: "https://github.com/HemanthNarayanadas/school-erp",
    demo: "#"
  },
  {
    title: "Smart Quiz & Performance Analytics System",
    description: "A web-based application allowing users to take quizzes, receive instant score evaluations, and analyze performance through accuracy, percentage, and progress tracking.",
    impact: "Implemented secure database connectivity, responsive UI design, and automated performance insights.",
    image: "/project_quiz.png",
    tags: ["HTML/CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/HemanthNarayanadas/smart-quiz-performance-analytics",
    demo: "#"
  },
  {
    title: "AVL Tree Implementation",
    description: "Developed a self-balancing AVL tree in C with insertion, deletion, and rotation logic ensuring O(log n) search complexity.",
    impact: "Tested edge cases and validated performance, demonstrating strong grasp of complex data structures.",
    image: "/project_avl.png",
    tags: ["C Programming", "Data Structures", "Algorithms"],
    github: "https://github.com/HemanthNarayanadas",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-slate-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="mb-6">
                  <p className="text-slate-400 text-sm font-medium border-l-2 border-sky-500 pl-3">
                    <span className="text-white block mb-1">Impact:</span>
                    {project.impact}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-700/50 flex gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                    <FaGithub className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors ml-4">
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
