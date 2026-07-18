"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";

const RESUME_URL =
  "https://drive.google.com/file/d/1QE0KuKuQbpnp4Hshe6nbp1_rDhLhT8-x/view?usp=sharing";

const socials = [
  { icon: Github,     href: "https://github.com/Shivamjawaliya",                      label: "GitHub"   },
  { icon: Linkedin,   href: "https://www.linkedin.com/in/shivam-jawaliya-9629372b6/", label: "LinkedIn" },
  { icon: Mail,       href: "mailto:jawaliya7060@gmail.com",                           label: "Email"    },
  { icon: SiLeetcode, href: "https://leetcode.com/u/Shivam_Jawaliya/",                label: "LeetCode" },
];

function Word({ word, delay, reduced }: { word: string; delay: number; reduced: boolean }) {
  return (
    <motion.span
      className="inline-block mr-[0.22em]"
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 40, rotateX: 90 }}
      animate={reduced  ? { opacity: 1 } : { opacity: 1, y: 0, rotateX: 0 }}
      transition={reduced
        ? { duration: 0.4, delay }
        : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {word}
    </motion.span>
  );
}

export default function Hero() {
  const reduced = useReducedMotion() ?? false;
  const { scrollY } = useScroll();

  const textY  = useTransform(scrollY, [0, 600], [0, reduced ? 0 : -50]);
  const photoY = useTransform(scrollY, [0, 600], [0, reduced ? 0 : -80]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 50%, rgba(6,182,212,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-12 xl:gap-20 items-center min-h-screen py-24">

          {/* LEFT: Text */}
          <motion.div style={{ y: textY }} className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 text-primary text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </motion.div>

            <div style={{ perspective: "900px" }} className="mb-3 w-full">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
                <span className="block text-[var(--fg)]">
                  {["Hi!", "I'm"].map((w, i) => (
                    <Word key={w} word={w} delay={i * 0.08} reduced={reduced} />
                  ))}
                </span>
                <span className="block gradient-text">
                  {["Shivam", "Jawaliya"].map((w, i) => (
                    <Word key={w} word={w} delay={0.16 + i * 0.08} reduced={reduced} />
                  ))}
                </span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="text-xl sm:text-2xl font-semibold text-[var(--fg-2)] mb-5 flex items-center gap-2"
            >
              <span className="text-primary">&gt;</span>
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer. Problem Solver.", 3000,
                  "React & Next.js Engineer.",             2000,
                  "Node.js Backend Developer.",            2000,
                  "LeetCode Knight 🏅 — Rating 1881.",    2500,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.54 }}
              className="text-[var(--fg-3)] text-base sm:text-lg leading-relaxed max-w-lg mb-10"
            >
              Full-stack engineering with a focus on craft. Building scalable web products
              using <span className="text-[var(--fg)] font-medium">Next.js</span> and{" "}
              <span className="text-[var(--fg)] font-medium">Node.js</span> — from backend
              architecture to polished UIs and DevOps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.66 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-7 py-3 bg-primary hover:bg-primary-600 text-white font-semibold rounded-xl text-sm transition-colors duration-300"
              >
                View my work <ExternalLink size={15} />
              </motion.a>

              <motion.a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-7 py-3 border border-[var(--bd-3)] hover:border-primary/50 text-[var(--fg-2)] hover:text-[var(--fg)] font-semibold rounded-xl text-sm transition-all duration-300"
              >
                Resume <Download size={15} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.78 }}
              className="flex items-center gap-3"
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
                  className="p-2.5 rounded-xl border border-[var(--bd-2)] text-[var(--fg-4)] hover:text-primary hover:border-primary/40 transition-all duration-300"
                >
                  <Icon size={19} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Rectangular profile photo */}
          <motion.div
            style={{ y: photoY }}
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[400px]"
            >
              <div className="relative rounded-2xl">
                <div
                  data-profile-image-anchor="hero"
                  className="relative rounded-2xl overflow-hidden z-10"
                >
                  <Image
                    src="/profile.jpg"
                    alt="Shivam Jawaliya"
                    width={400}
                    height={500}
                    className="w-full object-cover object-top opacity-0"
                    style={{ aspectRatio: "4/5" }}
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--fg-5)] text-xs"
      >
        <span className="tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
