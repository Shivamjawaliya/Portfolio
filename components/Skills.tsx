"use client";

import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiGit,
  SiLinux,
  SiMlflow,
  SiJupyter,
  SiFirebase,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";

type Skill = { name: string; icon: React.ElementType; level: number; color: string };
type Category = { title: string; emoji: string; skills: Skill[] };

const categories: Category[] = [
  {
    title: "Programming Languages",
    emoji: "💻",
    skills: [
      { name: "JavaScript", icon: SiJavascript, level: 90, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, level: 80, color: "#3178C6" },
      { name: "Python", icon: SiPython, level: 82, color: "#3776AB" },
      { name: "C++ (DSA)", icon: SiCplusplus, level: 78, color: "#00599C" },
      { name: "SQL", icon: SiSqlite, level: 75, color: "#003B57" },
    ],
  },
  {
    title: "Frontend",
    emoji: "🎨",
    skills: [
      { name: "React.js", icon: SiReact, level: 88, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, level: 85, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, level: 92, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, level: 88, color: "#1572B6" },
      { name: "Bootstrap", icon: SiBootstrap, level: 80, color: "#7952B3" },
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 85, color: "#339933" },
      { name: "Express.js", icon: SiExpress, level: 83, color: "#ffffff" },
      { name: "Django", icon: SiDjango, level: 70, color: "#092E20" },
      { name: "REST APIs", icon: SiNodedotjs, level: 88, color: "#06B6D4" },
    ],
  },
  {
    title: "Databases",
    emoji: "🗄️",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 82, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, level: 78, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, level: 70, color: "#336791" },
      { name: "Firebase", icon: SiFirebase, level: 72, color: "#FFCA28" },
    ],
  },
  {
    title: "Cloud / DevOps",
    emoji: "☁️",
    skills: [
      { name: "Docker", icon: SiDocker, level: 78, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, level: 65, color: "#326CE5" },
      { name: "AWS S3", icon: FaAws, level: 72, color: "#FF9900" },
      { name: "GitHub Actions", icon: SiGithubactions, level: 80, color: "#2088FF" },
      { name: "MLflow", icon: SiMlflow, level: 68, color: "#0194E2" },
      { name: "Git", icon: SiGit, level: 90, color: "#F05032" },
      { name: "Linux", icon: SiLinux, level: 75, color: "#FCC624" },
    ],
  },
  {
    title: "Design & Other Tools",
    emoji: "🛠️",
    skills: [
      { name: "Figma", icon: SiFigma, level: 72, color: "#F24E1E" },
      { name: "Jupyter", icon: SiJupyter, level: 75, color: "#F37626" },
    ],
  },
];

function SkillCard({ skill, delay }: { skill: Skill; delay: number }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="glass rounded-xl p-4 border border-white/10 hover:border-primary/40 transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${skill.color}18` }}
        >
          <Icon size={20} style={{ color: skill.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white truncate">{skill.name}</p>
          <p className="text-xs text-gray-500">{skill.level}%</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Decorative blob */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">
            What I work with
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((cat, catIdx) => (
            <div key={cat.title}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.05 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                <div className="flex-1 h-px bg-white/10" />
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    delay={catIdx * 0.05 + skillIdx * 0.07}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CP stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 glass rounded-2xl p-8 border border-primary/20 flex flex-col sm:flex-row items-center justify-center gap-8 text-center"
        >
          {[
            { platform: "LeetCode", rank: "Knight 🏅", rating: "1881", color: "#FFA116" },
            { platform: "CodeChef", rank: "4-Star ⭐", rating: "1605", color: "#5B4638" },
            { platform: "Problems Solved", rank: "350+", rating: "& counting", color: "#06B6D4" },
          ].map(({ platform, rank, rating, color }) => (
            <div key={platform} className="flex flex-col items-center gap-1">
              <span className="text-sm text-gray-500 font-medium">{platform}</span>
              <span className="text-2xl font-bold" style={{ color }}>{rank}</span>
              <span className="text-xs text-gray-400">Max Rating: {rating}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
