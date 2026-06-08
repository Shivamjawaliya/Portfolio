"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  long: string;
  tags: string[];
  category: "Full Stack" | "Frontend" | "Backend";
  github: string;
  demo?: string;
  images: string[];
  gradient: string;
};

const projects: Project[] = [
  {
    title: "CoinFinex",
    description:
      "Virtual stock trading platform with real-time price tracking, portfolio management and Google OAuth.",
    long: "Full-stack virtual stock trading platform using React & TypeScript. Features real-time stock price tracking, interactive portfolio management, 10+ REST API endpoints, Google OAuth via Passport.js, JWT auth, OTP-based password reset, and Vercel CI/CD deployment.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "REST API", "OAuth", "CI/CD"],
    category: "Full Stack",
    github: "https://github.com/Shivamjawaliya",
    demo: "https://coinfinex.vercel.app/",
    images: [
      "/projects/coinfinex-1.png",
      "/projects/coinfinex-2.png",
      "/projects/coinfinex-3.png",
    ],
    gradient: "from-cyan-500/20 to-blue-600/20",
  },
  {
    title: "CampusHub",
    description:
      "Full-stack college management system handling 500+ student and staff records with role-based access.",
    long: "Managed 500+ student and staff records, improving data retrieval speed by 30% and reducing data redundancy by 25%. Implemented secure role-based login cutting unauthorized access by 25%. Real-time notifications for course and grade updates, boosting user engagement by 20%.",
    tags: ["JavaScript", "Python", "Flask", "SQLite", "Role-Based Auth", "REST API"],
    category: "Full Stack",
    github: "https://github.com/Shivamjawaliya",
    demo: "https://shivamjawaliya.pythonanywhere.com",
    images: [
      "/projects/campushub-1.png",
      "/projects/campushub-2.png",
    ],
    gradient: "from-green-500/20 to-teal-600/20",
  },
  {
    title: "IntelliText",
    description:
      "Browser extension for universal text enhancement — translation, summarization, and content generation.",
    long: "Universal text processor with custom prompts for any webpage input, enabling translation, summarization and content generation with 70% accuracy. Supports 15+ major web applications via cross-platform DOM integration with 60% success rate.",
    tags: ["React", "JavaScript ES6+", "Chrome Extension", "DOM API", "Generative AI"],
    category: "Frontend",
    github: "https://github.com/Shivamjawaliya",
    images: [
      "/projects/intellitext-1.png",
      "/projects/intellitext-2.png",
      "/projects/intellitext-3.png",
    ],
    gradient: "from-purple-500/20 to-pink-600/20",
  },
];

const filters = ["All", "Full Stack", "Frontend", "Backend"] as const;
type Filter = (typeof filters)[number];

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  };

  return (
    <div className="relative h-52 overflow-hidden bg-dark-300 group/carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Nav arrows — show only if >1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          >
            <ChevronRight size={16} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === current ? "bg-primary w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl border border-white/10 hover:border-primary/40 overflow-hidden transition-all duration-300 flex flex-col"
    >
      {/* Screenshot carousel */}
      <div className="relative">
        <ImageCarousel images={project.images} title={project.title} />

        {/* Category badge */}
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 text-xs font-medium text-primary border border-primary/30 backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">
          {expanded ? project.long : project.description}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-primary hover:underline mb-4 self-start"
        >
          {expanded ? "Show less" : "Read more"}
        </button>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="px-2.5 py-1 rounded-lg bg-white/5 text-gray-500 text-xs">
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* Buttons — push to bottom */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:border-white/30 transition-all"
          >
            <Github size={15} /> GitHub
          </a>
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary/10 border border-primary/30 text-sm font-medium text-primary hover:bg-primary/20 transition-all"
            >
              <ExternalLink size={15} /> Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">
            What I&apos;ve built
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === f
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "glass border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Shivamjawaliya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/10 hover:border-primary/40 rounded-xl text-gray-300 hover:text-primary font-medium transition-all"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
