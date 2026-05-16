import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import CodingProfiles from "@/components/CodingProfiles";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white selection:bg-blue-500/30">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <CodingProfiles />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-800 bg-slate-900">
        <p className="text-slate-400">
          © {new Date().getFullYear()} Narayanadas Hemanth Kumar. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
