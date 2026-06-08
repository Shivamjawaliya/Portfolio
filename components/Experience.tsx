"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    role: "Full Stack Developer",
    org: "Independent / Academic Projects",
    period: "Sept 2023 – Present",
    location: "Bengaluru, India",
    type: "Full-time / Academic",
    bullets: [
      "Full Stack Developer with strong command of Data Structures and Algorithms",
      "Solved 350+ problems on LeetCode, writing efficient algorithms using Dynamic Programming",
      "Enhanced backend APIs in Node.js projects, reducing response time by 15–20%",
      "Architected CoinFinex — a virtual stock trading platform using React, TypeScript, Node.js and MongoDB",
      "Built CampusHub — a college management system handling 500+ student records using Flask & SQLite",
      "Built scalable CI/CD pipelines using GitHub Actions and Vercel for automated deployments",
    ],
    skills: ["React", "Next.js", "Node.js", "MongoDB", "Docker", "AWS S3", "CI/CD"],
  },
  {
    role: "Competitive Programmer",
    org: "LeetCode / CodeChef",
    period: "Sept 2023 – Present",
    location: "Online",
    type: "Part-time",
    bullets: [
      "Achieved Knight rank on LeetCode with max rating of 1881",
      "Earned 4-Star rating on CodeChef with max rating of 1605",
      "Focused on Dynamic Programming, Graph Algorithms, and System Design",
      "Consistently solved weekly contest problems improving problem-solving speed",
    ],
    skills: ["C++", "DSA", "Dynamic Programming", "Graph Theory"],
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
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-10"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 flex flex-col items-center">
        <div className="w-5 h-5 rounded-full bg-primary border-4 border-dark shadow-lg shadow-primary/40 z-10" />
        {!last && <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/60 to-primary/10 mt-1 min-h-full absolute top-5 left-2" style={{ height: "calc(100% + 2rem)" }} />}
      </div>

      <div className="glass rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 mb-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">{entry.role}</h3>
            <p className="text-primary font-semibold">{entry.org}</p>
          </div>
          <div className="flex flex-col gap-1.5 text-right">
            <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 justify-end sm:justify-end">
              <Calendar size={12} />
              {entry.period}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 justify-end">
              <MapPin size={12} />
              {entry.location}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 self-end">
              {entry.type}
            </span>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-4">
          {entry.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-gray-400">
              <CheckCircle2 size={14} className="text-primary flex-shrink-0 mt-0.5" />
              {b}
            </li>
          ))}
        </ul>

        {/* Skills */}
        {entry.skills && (
          <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
            {entry.skills.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20"
              >
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

  const data = tab === "work" ? work : education;

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">
            My journey
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-12"
        >
          {(["work", "education"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                tab === t
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "glass border border-white/10 text-gray-400 hover:text-white"
              }`}
            >
              {t === "work" ? <Briefcase size={16} /> : <GraduationCap size={16} />}
              {t === "work" ? "Work Experience" : "Education"}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {data.map((entry, i) => (
              <TimelineEntry
                key={entry.role}
                entry={entry}
                index={i}
                last={i === data.length - 1}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap size={20} className="text-primary" />
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="glass rounded-xl p-5 border border-white/10 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{cert.emoji}</span>
                  <div>
                    <p className="font-semibold text-white">{cert.title}</p>
                    <p className="text-primary text-sm">{cert.issuer}</p>
                    <p className="text-gray-400 text-xs mt-1">{cert.desc}</p>
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
