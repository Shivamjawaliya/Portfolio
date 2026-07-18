"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Download, MapPin, GraduationCap, Trophy, Code2, Users, Globe, Server, Brain } from "lucide-react";

const RESUME_URL =
  "https://drive.google.com/file/d/1QE0KuKuQbpnp4Hshe6nbp1_rDhLhT8-x/view?usp=sharing";

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
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay },
  };
}

export default function About() {
  const ref = useRef(null);
  useInView(ref, { once: true });

  // 3D mouse-tilt for the right-side text card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">
            Get to know me
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-primary to-sky-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Avatar anchor for the shared scroll image */}
          <motion.div ref={ref} {...fadeUp(0.1)} className="flex justify-center">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative w-60 h-60 sm:w-72 sm:h-72">
                <div
                  data-profile-image-anchor="about"
                  className="absolute inset-0 rounded-full overflow-hidden z-10"
                >
                  <Image
                    src="/profile.jpg"
                    alt="Shivam Jawaliya"
                    fill
                    className="object-cover object-center opacity-0"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right – Text card with 3D mouse tilt */}
          <motion.div
            style={{ perspective: "1000px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="space-y-6"
            >
              <motion.div {...fadeUp(0.2)}>
                <h3 className="text-2xl font-bold mb-4">Full-Stack Developer</h3>
                <p className="text-[var(--fg-3)] leading-relaxed">
                  I&apos;m a B.Tech student in Electronics and Communication Engineering at{" "}
                  <span className="text-primary font-medium">IIIT Bhopal</span>, deeply
                  passionate about building scalable, high-quality software products
                  from idea to production.
                </p>
              </motion.div>

              <motion.p {...fadeUp(0.3)} className="text-[var(--fg-3)] leading-relaxed">
                I&apos;m a full-stack developer building end-to-end web products across SaaS
                platforms and cloud infrastructure. I work primarily with{" "}
                <span className="text-primary">Next.js</span>,{" "}
                <span className="text-primary">React</span>, and{" "}
                <span className="text-primary">Node.js</span>, covering everything from backend
                architecture and REST APIs to UI/UX design and DevOps — containerization, CI/CD,
                deployment, and long-term system reliability.
              </motion.p>

              <motion.p {...fadeUp(0.35)} className="text-[var(--fg-3)] leading-relaxed">
                I&apos;ve solved{" "}
                <span className="text-primary font-semibold">350+ problems</span>{" "}
                on LeetCode (Knight, Max Rating: 1881) and hold a{" "}
                <span className="text-primary font-semibold">4-Star</span> rating on CodeChef with max rating of 1851.
                I&apos;m certified in{" "}
                <span className="text-primary">Google Advanced Machine Learning</span>,
                specializing in TensorFlow and Keras.
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
                    className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg text-sm text-[var(--fg-2)] border border-[var(--bd-2)]"
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors"
                >
                  <Download size={18} />
                  Download CV
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Expertise grid */}
        <div className="mt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-primary font-semibold tracking-widest text-xs uppercase mb-8"
          >
            Areas of Expertise
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Globe,
                title: "Full-Stack Development",
                items: ["Next.js / React", "Node.js / Express", "REST APIs", "TypeScript"],
                color: "#06B6D4",
              },
              {
                icon: Code2,
                title: "Problem Solving / DSA",
                items: ["LeetCode Knight 1881", "CodeChef 1851", "350+ Problems", "Algorithms & DS"],
                color: "#38BDF8",
              },
              {
                icon: Server,
                title: "DevOps & Cloud",
                items: ["Docker", "AWS (EC2, S3)", "CI/CD (Vercel, GH Actions)", "Linux / Shell"],
                color: "#2563EB",
              },
              {
                icon: Brain,
                title: "Machine Learning",
                items: ["TensorFlow / Keras", "Google ML Certified", "Data Analysis", "Python / NumPy"],
                color: "#0EA5E9",
              },
            ].map(({ icon: Icon, title, items, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className="bg-[var(--card)] border border-[var(--bd-1)] hover:border-[var(--bd-3)] rounded-2xl p-5 group transition-colors"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${color}18` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <h4 className="font-semibold text-white text-sm mb-3 group-hover:text-primary transition-colors">
                  {title}
                </h4>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[var(--fg-4)]">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats row — rotateY entrance */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              style={{ perspective: "600px" }}
              className="bg-[var(--card-2)] rounded-2xl p-6 text-center border border-[var(--bd-2)] card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon size={22} className="text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
              <div className="text-[var(--fg-3)] text-sm">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
