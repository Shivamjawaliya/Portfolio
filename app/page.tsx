"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ThreeBackground from "@/components/ThreeBackground";
import SharedProfileImage from "@/components/SharedProfileImage";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  // Restore saved preference; default to dark
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = saved !== "light";
    setDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Apply and persist on every toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  if (loading) return <LoadingScreen />;

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[var(--surface)] text-[var(--fg)]">
      <ThreeBackground />
      <ScrollProgress />
      <SharedProfileImage />
      <div className="relative z-10">
        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode((d) => !d)} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
