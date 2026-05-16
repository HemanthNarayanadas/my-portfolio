"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Wrench, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["C", "Java"]
  },
  {
    title: "Web Technologies",
    icon: <Layout className="w-6 h-6" />,
    skills: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Core Subjects",
    icon: <Database className="w-6 h-6" />,
    skills: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "OOP"]
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Jenkins", "CI/CD", "Basic Git"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-700/50">
                <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-100">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
