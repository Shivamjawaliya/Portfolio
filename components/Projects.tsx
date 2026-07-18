"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Tag } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  long: string;
  tags: string[];
  category: "Full Stack" | "Frontend" | "Backend";
  github: string;
  demo?: string;
  year: string;
  images: string[];
};

const projects: Project[] = [
  {
    title: "CoinFinex",
    description: "Virtual stock trading platform with real-time price tracking, portfolio management and Google OAuth.",
    long: "Full-stack virtual stock trading platform using React & TypeScript. Features real-time stock price tracking, interactive portfolio management, 10+ REST API endpoints, Google OAuth via Passport.js, JWT auth, OTP-based password reset, and Vercel CI/CD deployment.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "REST API", "OAuth", "CI/CD"],
    category: "Full Stack",
    github: "https://github.com/Shivamjawaliya",
    demo: "https://coinfinex.vercel.app/",
    year: "2024",
    images: ["/projects/coinfinex-1.png", "/projects/coinfinex-2.png", "/projects/coinfinex-3.png"],
  },
  {
    title: "CampusHub",
    description: "Full-stack college management system handling 500+ student and staff records with role-based access.",
    long: "Managed 500+ student and staff records, improving data retrieval speed by 30% and reducing data redundancy by 25%. Implemented secure role-based login cutting unauthorized access by 25%. Real-time notifications for course and grade updates, boosting user engagement by 20%.",
    tags: ["JavaScript", "Python", "Flask", "SQLite", "Role-Based Auth", "REST API"],
    category: "Full Stack",
    github: "https://github.com/Shivamjawaliya",
    demo: "https://shivamjawaliya.pythonanywhere.com",
    year: "2024",
    images: ["/projects/campushub-1.png", "/projects/campushub-2.png"],
  },
  {
    title: "IntelliText",
    description: "Browser extension for universal text enhancement — translation, summarization, and content generation.",
    long: "Universal text processor with custom prompts for any webpage input, enabling translation, summarization and content generation with 70% accuracy. Supports 15+ major web applications via cross-platform DOM integration with 60% success rate.",
    tags: ["React", "JavaScript ES6+", "Chrome Extension", "DOM API", "Generative AI"],
    category: "Frontend",
    github: "https://github.com/Shivamjawaliya",
    year: "2024",
    images: ["/projects/intellitext-1.png", "/projects/intellitext-2.png"],
  },
];

const filters = ["All", "Full Stack", "Frontend", "Backend"] as const;
type Filter = (typeof filters)[number];

// 3D tilt card
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const sx = useSpring(rawX, { stiffness: 150, damping: 20 });
  const sy = useSpring(rawY, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width - 0.5);
    rawY.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onMouseLeave() { rawX.set(0); rawY.set(0); }

  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, perspective: "800px" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative bg-[var(--card)] rounded-2xl border border-[var(--bd-1)] hover:border-[var(--bd-3)] transition-colors duration-300 overflow-hidden"
    >
      {/* Top bar: number + year */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#1E1E1E]">
        <span className="text-4xl font-bold text-[var(--num-color)] group-hover:text-[var(--num-hover)] transition-colors font-mono leading-none">
          {num}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-[var(--fg-5)] font-mono">{project.year}</span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project screenshot */}
      <div className="relative h-44 overflow-hidden bg-[var(--surface)]">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title + arrow */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-xl font-bold text-[var(--fg)] group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <motion.div
            className="text-gray-600 group-hover:text-primary transition-colors mt-0.5 flex-shrink-0"
            whileHover={{ x: 3, y: -3 }}
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>

        <p className="text-[var(--fg-4)] text-sm leading-relaxed mb-4">
          {expanded ? project.long : project.description}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-primary hover:underline mb-4 block"
        >
          {expanded ? "Show less ↑" : "Read more ↓"}
        </button>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[var(--card-3)] text-[var(--fg-3)] text-xs border border-[var(--bd-3)]">
              <Tag size={9} />{tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded-md bg-[var(--card-3)] text-[var(--fg-5)] text-xs border border-[var(--bd-3)]">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[var(--bd-2)] text-xs font-medium text-[var(--fg-3)] hover:text-[var(--fg)] hover:border-[var(--bd-3)] transition-all">
            <Github size={13} /> GitHub
          </a>
          {project.demo && (
            <motion.a href={project.demo} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-primary/10 border border-primary/25 text-xs font-medium text-primary hover:bg-primary/20 transition-all">
              <ExternalLink size={13} /> Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-4">
            Selected Work
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Things I&apos;ve <span className="gradient-text">Built</span>
            </h2>
            <a
              href="https://github.com/Shivamjawaliya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--fg-3)] hover:text-primary transition-colors group"
            >
              View all on GitHub
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          <div className="mt-5 w-16 h-[2px] bg-gradient-to-r from-primary to-sky-500 rounded-full" />
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                active === f
                  ? "bg-primary text-white"
                  : "bg-[var(--card-2)] border border-[var(--bd-2)] text-[var(--fg-4)] hover:text-[var(--fg-2)] hover:border-[var(--bd-3)]"
              }`}>
              {f}
            </button>
          ))}
        </motion.div>

        {/* Numbered project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Impact stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--divider)] rounded-2xl overflow-hidden border border-[var(--divider)]"
        >
          {[
            { value: "350+", label: "DSA Problems", sub: "LeetCode & CodeChef" },
            { value: "10+",  label: "Projects Built", sub: "End-to-end products" },
            { value: "2+",   label: "Years Coding",   sub: "Since Sept 2023" },
            { value: "8.02", label: "CGPA",           sub: "IIIT Bhopal" },
          ].map(({ value, label, sub }) => (
            <div key={label} className="bg-[var(--surface)] px-6 py-8 flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-bold gradient-text">{value}</span>
              <span className="text-sm font-semibold text-[var(--fg)]">{label}</span>
              <span className="text-xs text-[var(--fg-5)]">{sub}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
