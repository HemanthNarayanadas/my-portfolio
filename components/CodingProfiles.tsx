"use client";

import { motion } from "framer-motion";
import { Code, Terminal, Trophy } from "lucide-react";

const profiles = [
  {
    platform: "LeetCode",
    icon: <Code className="w-8 h-8" />,
    stats: { solved: "300+", rating: "Top 15%" },
    link: "https://leetcode.com/",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20"
  },
  {
    platform: "CodeChef",
    icon: <Terminal className="w-8 h-8" />,
    stats: { rating: "1600+", stars: "3★" },
    link: "https://www.codechef.com/",
    color: "text-amber-700",
    bg: "bg-amber-700/10",
    border: "border-amber-700/20"
  },
  {
    platform: "Codeforces",
    icon: <Trophy className="w-8 h-8" />,
    stats: { rating: "1200+", rank: "Pupil" },
    link: "https://codeforces.com/",
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20"
  }
];

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Coding Profiles</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={profile.link}
                target="_blank"
                rel="noreferrer"
                className={`glass p-8 rounded-2xl block hover:-translate-y-2 transition-all duration-300 border ${profile.border}`}
              >
                <div className={`w-16 h-16 ${profile.bg} rounded-2xl flex items-center justify-center mb-6 ${profile.color}`}>
                  {profile.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">{profile.platform}</h3>
                
                <div className="space-y-4">
                  {Object.entries(profile.stats).map(([key, value], i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-slate-400 capitalize">{key}</span>
                      <span className="font-semibold text-white">{value as string}</span>
                    </div>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
