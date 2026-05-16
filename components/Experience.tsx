"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "K L University, Hyderabad",
    duration: "2023 - Present",
    details: [
      "Current CGPA: 9.1/10",
      "Specializing in Software Engineering and Web Technologies.",
      "Relevant Coursework: Data Structures, Algorithms, DBMS, Operating Systems."
    ]
  },
  {
    degree: "Dual Degree – Bachelor of Business Administration",
    institution: "K L University",
    duration: "2024 - Present",
    details: [
      "Current CGPA: 8.78/10",
      "Focusing on organizational management and business strategy.",
      "Combining technical expertise with business acumen for holistic problem solving."
    ]
  },
  {
    degree: "Intermediate (MPC)",
    institution: "State Board",
    duration: "Completed 2023",
    details: [
      "Achieved a CGPA of 8.77/10",
      "Strong foundation in Mathematics, Physics, and Chemistry."
    ]
  },
  {
    degree: "Schooling",
    institution: "Vijetha Vidyalaya School, Hyderabad",
    duration: "Completed",
    details: [
      "Achieved a CGPA of 7.1/10",
      "Built a strong foundation in core academic subjects."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education Journey</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-8px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-400 z-10 mt-1.5 md:mt-0"></div>

              {/* Content */}
              <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} pl-8 md:pl-0`}>
                <div className={`glass-card p-6 inline-block w-full ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className={`flex items-center gap-2 mb-2 text-blue-400 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                    <GraduationCap className="w-5 h-5" />
                    <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  </div>
                  
                  <div className={`flex items-center gap-2 mb-4 text-slate-400 text-sm ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                    <span className="font-medium text-purple-400">{item.institution}</span>
                    <span>•</span>
                    <Calendar className="w-4 h-4" />
                    <span>{item.duration}</span>
                  </div>

                  <ul className={`space-y-2 text-slate-300 ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                    {item.details.map((detail, i) => (
                      <li key={i} className="text-sm">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
