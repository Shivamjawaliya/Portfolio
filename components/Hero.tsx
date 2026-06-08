"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Download, ArrowDown, Code2 } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const RESUME_URL =
  "https://drive.google.com/file/d/1uOPR-2YMa0f2q3qic-TsW2sO524RUVD0/view?usp=sharing";

const socials = [
  { icon: Github, href: "https://github.com/Shivamjawaliya", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shivam-jawaliya-9629372b6/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:jawaliya7060@gmail.com", label: "Email" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/Shivam_Jawaliya/", label: "LeetCode" },
];

// Floating orb component
function Orb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

// Particle dot
function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-primary/40"
      style={style}
      animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
      transition={{
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 3,
      }}
    />
  );
}

export default function Hero() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    },
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background orbs */}
      <Orb className="w-96 h-96 bg-cyan-500 -top-20 -left-20" delay={0} />
      <Orb className="w-80 h-80 bg-blue-600 top-1/3 -right-20" delay={2} />
      <Orb className="w-64 h-64 bg-purple-600 bottom-20 left-1/4" delay={4} />

      {/* Particles */}
      {particles.map((p) => (
        <Particle key={p.id} style={p.style} />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-primary text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Greeting */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Shivam Jawaliya</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 h-12 flex items-center justify-center"
        >
          <span className="text-primary mr-3">&gt;</span>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Node.js Developer",
              2000,
              "Problem Solver",
              2000,
              "LeetCode Knight 🏅",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building end-to-end products — from{" "}
          <span className="text-primary font-medium">scalable backends</span> to{" "}
          <span className="text-primary font-medium">polished frontends</span>,
          with clean UI and reliable DevOps. Based in Bhopal, India.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6,182,212,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 glow-cyan-sm"
          >
            <Code2 size={18} />
            View My Work
          </motion.a>

          <motion.a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3.5 glass border border-primary/40 text-primary hover:bg-primary/10 font-semibold rounded-xl transition-all duration-300"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl glass border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-2 text-gray-500 text-sm"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={18} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
