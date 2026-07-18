"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

type Entry = {
  role: string;
  org: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  skills?: string[];
};

const work: Entry[] = [
  {
    role: "Full Stack Developer Intern",
    org: "GBJ Buzz Private Limited",
    period: "Jul 2026 – Present",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Delivered 6+ responsive UI modules using Next.js, JavaScript, HTML5, and CSS3 for a live full-stack production application",
      "Built 5+ RESTful API endpoints with Node.js and Express.js, connecting MongoDB and PostgreSQL across 3+ modules",
      "Automated 1 AI-powered feature using LLM APIs including OpenAI, Claude, and Gemini to streamline 2+ workflow tasks",
      "Debugged and tested application modules, cutting production bugs by 15% while coordinating weekly progress through Git/GitHub",
    ],
    skills: ["Next.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "LLM APIs"],
  },
  {
    role: "Software Development Engineer Intern",
    org: "YugaYatra Retail (OPC) Private Ltd.",
    period: "May 2026 – Jul 2026",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Developed and shipped 8+ core features for the HomiePG platform using React.js, Node.js, Express.js, MongoDB, and REST APIs",
      "Designed a live notification module for booking updates, rent reminders, and tenant announcements, shortening communication delays by 28%",
      "Refactored 10+ backend endpoints and MongoDB queries, lowering average latency by 20%",
      "Collaborated through Git/GitHub across 15+ feature releases",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git/GitHub"],
  },
  {
    role: "Competitive Programmer",
    org: "LeetCode / CodeChef",
    period: "Sept 2023 – Present",
    location: "Online",
    type: "Part-time",
    bullets: [
      "Achieved Knight rank on LeetCode with max rating of 1881",
      "Earned 4-Star rating on CodeChef with max rating of 1851",
      "Solved 350+ problems on LeetCode using efficient, well-optimized approaches including Dynamic Programming",
      "Focused on Data Structures and Algorithms, contest problem solving, and performance-oriented solutions",
    ],
    skills: ["C++", "DSA", "Dynamic Programming", "Competitive Programming"],
  },
];

const education: Entry[] = [
  {
    role: "B.Tech – Electronics and Communication Engineering",
    org: "Indian Institute of Information Technology Bhopal",
    period: "Sept 2023 – 2027",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    bullets: [
      "CGPA: 8.02 — consistent academic performance",
      "Experienced in Machine Learning Algorithms, DSA, Web Development (MERN), Neural Networks, NLP",
      "Currently learning Deep Learning (TensorFlow/PyTorch), Computer Vision, MLOps, Generative AI",
      "Active in coding clubs and open-source contributions",
    ],
    skills: ["MERN Stack", "ML/AI", "NLP", "Computer Vision", "MLOps"],
  },
];

const certifications = [
  {
    title: "Google Advanced Machine Learning Specialization",
    issuer: "Google",
    desc: "Trained and deployed deep learning models using TensorFlow and Keras",
    emoji: "🎓",
  },
];

function TimelineEntry({ entry, index, last }: { entry: Entry; index: number; last: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, rotateY: -12 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: "800px" }}
      className="relative pl-10"
    >
      {/* Pulsing dot */}
      <div className="absolute left-0 top-6 flex flex-col items-center">
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-5 rounded-full bg-primary border-4 border-[var(--surface)] z-10"
        />
        {!last && (
          <div
            className="w-0.5 bg-gradient-to-b from-primary/40 to-transparent absolute top-5 left-2"
            style={{ height: "calc(100% + 2rem)" }}
          />
        )}
      </div>

      <div className="bg-[var(--card-2)] rounded-2xl p-6 border border-[var(--bd-2)] hover:border-primary/30 transition-colors duration-300 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold text-[var(--fg)] mb-1">{entry.role}</h3>
            <p className="text-primary font-semibold">{entry.org}</p>
          </div>
          <div className="flex flex-col gap-1.5 text-right">
            <span className="inline-flex items-center gap-1.5 text-xs text-[var(--fg-3)] justify-end">
              <Calendar size={12} />{entry.period}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-[var(--fg-4)] justify-end">
              <MapPin size={12} />{entry.location}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 self-end">
              {entry.type}
            </span>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {entry.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-[var(--fg-3)]">
              <CheckCircle2 size={14} className="text-primary flex-shrink-0 mt-0.5" />
              {b}
            </li>
          ))}
        </ul>

        {entry.skills && (
          <div className="flex flex-wrap gap-2 pt-3 border-t border-[var(--bd-2)]">
            {entry.skills.map((s) => (
              <span key={s} className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [tab, setTab] = useState<"work" | "education">("work");
  const timelineRef = useRef(null);
  const lineInView = useInView(timelineRef, { once: true, margin: "-80px" });
  const data = tab === "work" ? work : education;

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">
            My journey
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-primary to-sky-500 mx-auto rounded-full" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex justify-center gap-3 mb-12"
        >
          {(["work", "education"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                tab === t
                  ? "bg-primary text-white"
                  : "bg-[var(--card-2)] border border-[var(--bd-2)] text-[var(--fg-3)] hover:text-[var(--fg)]"
              }`}
            >
              {t === "work" ? <Briefcase size={16} /> : <GraduationCap size={16} />}
              {t === "work" ? "Work Experience" : "Education"}
            </button>
          ))}
        </motion.div>

        {/* Timeline with drawing line */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            ref={timelineRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Drawing vertical line */}
            <motion.div
              className="absolute left-[9px] top-6 w-0.5 bg-gradient-to-b from-primary/60 to-transparent origin-top"
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ height: "calc(100% - 3rem)" }}
            />

            {data.map((entry, i) => (
              <TimelineEntry key={entry.role} entry={entry} index={i} last={i === data.length - 1} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap size={20} className="text-primary" />
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert.title} className="bg-[var(--card-2)] rounded-xl p-5 border border-[var(--bd-2)] hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{cert.emoji}</span>
                  <div>
                    <p className="font-semibold text-[var(--fg)]">{cert.title}</p>
                    <p className="text-primary text-sm">{cert.issuer}</p>
                    <p className="text-[var(--fg-3)] text-xs mt-1">{cert.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
