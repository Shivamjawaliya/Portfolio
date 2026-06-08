"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Download, MapPin, GraduationCap, Trophy, Code2, Users } from "lucide-react";

const RESUME_URL =
  "https://drive.google.com/file/d/1uOPR-2YMa0f2q3qic-TsW2sO524RUVD0/view?usp=sharing";

const stats = [
  { value: "2+", label: "Years of Experience", icon: Trophy },
  { value: "10+", label: "Projects Built", icon: Code2 },
  { value: "350+", label: "LeetCode Problems", icon: GraduationCap },
  { value: "8.02", label: "CGPA (IIIT Bhopal)", icon: Users },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  };
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">
            Get to know me
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Avatar + decorative rings */}
          <motion.div
            ref={ref}
            {...fadeUp(0.1)}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Spinning rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 scale-110"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-blue-500/20 scale-125"
              />

              {/* Avatar circle */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-primary/40 overflow-hidden glow-cyan">
                <Image
                  src="/profile.jpg"
                  alt="Shivam Jawaliya"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Floating badge – Location */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass border border-primary/30 rounded-2xl px-4 py-2 flex items-center gap-2"
              >
                <MapPin size={14} className="text-primary" />
                <span className="text-sm font-medium">Bengaluru, India</span>
              </motion.div>

              {/* Floating badge – LeetCode */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -top-4 -left-4 glass border border-yellow-500/30 rounded-2xl px-4 py-2 flex items-center gap-2"
              >
                <Trophy size={14} className="text-yellow-400" />
                <span className="text-sm font-medium text-yellow-400">Knight 🏅</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right – Text content */}
          <div className="space-y-6">
            <motion.div {...fadeUp(0.2)}>
              <h3 className="text-2xl font-bold mb-4">
                Full-Stack Developer
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m a B.Tech student in Electronics and Communication Engineering at{" "}
                <span className="text-primary font-medium">IIIT Bhopal</span>, deeply
                passionate about building scalable, high-quality software products
                from idea to production.
              </p>
            </motion.div>

            <motion.p {...fadeUp(0.3)} className="text-gray-400 leading-relaxed">
              I&apos;m a full-stack developer building end-to-end web products across SaaS
              platforms and cloud infrastructure. I work primarily with{" "}
              <span className="text-primary">Next.js</span>,{" "}
              <span className="text-primary">React</span>, and{" "}
              <span className="text-primary">Node.js</span>, covering everything from backend
              architecture and REST APIs to UI/UX design and DevOps — containerization, CI/CD,
              deployment, and long-term system reliability.
            </motion.p>

            <motion.p {...fadeUp(0.35)} className="text-gray-400 leading-relaxed">
              I&apos;ve solved <span className="text-primary font-semibold">350+ problems</span>{" "}
              on LeetCode (Knight, Max Rating: 1881) and hold a{" "}
              <span className="text-primary font-semibold">4-Star</span> rating on CodeChef,
              which keeps my algorithmic thinking sharp. I&apos;m certified in{" "}
              <span className="text-primary">Google Advanced Machine Learning</span>,
              specializing in TensorFlow and Keras for deep learning.
            </motion.p>

            {/* Info chips */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3">
              {[
                { icon: GraduationCap, text: "B.Tech ECE — IIIT Bhopal (2023–2027)" },
                { icon: MapPin, text: "Bengaluru, Karnataka" },
                { icon: Trophy, text: "CGPA: 8.02" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg text-sm text-gray-300 border border-white/10"
                >
                  <Icon size={14} className="text-primary flex-shrink-0" />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* Download CV */}
            <motion.div {...fadeUp(0.5)}>
              <motion.a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6,182,212,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-600 text-white font-semibold rounded-xl transition-all"
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 text-center border border-white/10 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon size={22} className="text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
