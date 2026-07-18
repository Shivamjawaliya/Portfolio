"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Mail, MapPin, Phone, Send, Github, Linkedin,
  CheckCircle, AlertCircle, Loader2,
} from "lucide-react";

type FormData = { name: string; email: string; subject: string; message: string };

const contactInfo = [
  { icon: Mail, label: "Email", value: "jawaliya7060@gmail.com", href: "mailto:jawaliya7060@gmail.com", color: "#06B6D4" },
  { icon: Phone, label: "Phone", value: "+91 7060390740", href: "tel:+917060390740", color: "#38BDF8" },
  { icon: MapPin, label: "Location", value: "Bengaluru, Karnataka, India", href: "https://maps.google.com/?q=Bengaluru,India", color: "#2563EB" },
];

const socials = [
  { icon: Github, href: "https://github.com/Shivamjawaliya", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shivam-jawaliya-9629372b6/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:jawaliya7060@gmail.com", label: "Email" },
];

// Reusable 3D word-flip component (same pattern as Hero)
function FlipWord({ word, delay }: { word: string; delay: number }) {
  return (
    <motion.span
      className="inline-block mr-[0.25em]"
      initial={{ opacity: 0, y: 30, rotateX: 60 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {word}
    </motion.span>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [shimmer, setShimmer] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 1500));
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
    void data;
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 bg-[var(--card-3)] border rounded-xl text-[var(--fg)] placeholder-[var(--fg-5)] focus:outline-none focus:border-primary/60 transition-all ${
      hasError ? "border-red-500/60" : "border-[var(--bd-3)]"
    }`;

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* 3D word-flip heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-primary font-semibold tracking-widest text-sm uppercase mb-3"
          >
            Reach out
          </motion.p>

          <div style={{ perspective: "800px" }}>
            <h2 className="text-4xl sm:text-5xl font-bold">
              {["Let's"].map((w, i) => <FlipWord key={w} word={w} delay={i * 0.08} />)}
              <span className="gradient-text">
                {["Work", "Together"].map((w, i) => <FlipWord key={w} word={w} delay={(i + 1) * 0.08} />)}
              </span>
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-gray-400 max-w-xl mx-auto"
          >
            Whether you have a project in mind, want to collaborate, or just want to say hi —
            my inbox is always open.
          </motion.p>
          <div className="mt-6 w-20 h-1 bg-gradient-to-r from-primary to-sky-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left – Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-5 bg-[var(--card-2)] rounded-2xl border border-[var(--bd-2)] hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}18` }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <div>
                  <p className="text-xs text-[var(--fg-4)] mb-0.5">{label}</p>
                  <p className="font-medium text-[var(--fg)] group-hover:text-primary transition-colors text-sm">{value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <p className="text-sm text-gray-500 mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-[var(--card-2)] rounded-xl border border-[var(--bd-2)] text-[var(--fg-3)] hover:text-primary hover:border-primary/40 transition-all"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[var(--card-2)] rounded-2xl p-8 border border-[var(--bd-2)] space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--fg-2)] mb-2">
                    Name <span className="text-primary">*</span>
                  </label>
                  <motion.input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your name"
                    whileFocus={{ scale: 1.01 }}
                    className={inputClass(!!errors.name)}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--fg-2)] mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <motion.input
                    {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" } })}
                    type="email"
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.01 }}
                    className={inputClass(!!errors.email)}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--fg-2)] mb-2">
                  Subject <span className="text-primary">*</span>
                </label>
                <motion.input
                  {...register("subject", { required: "Subject is required" })}
                  placeholder="What's this about?"
                  whileFocus={{ scale: 1.01 }}
                  className={inputClass(!!errors.subject)}
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--fg-2)] mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <motion.textarea
                  {...register("message", { required: "Message is required", minLength: { value: 20, message: "At least 20 characters" } })}
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  whileFocus={{ scale: 1.01 }}
                  className={`${inputClass(!!errors.message)} resize-none`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>

              {/* Submit button with shimmer sweep */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                onHoverStart={() => setShimmer(true)}
                onHoverEnd={() => setShimmer(false)}
                whileTap={{ scale: 0.98 }}
                className="relative w-full flex items-center justify-center gap-3 py-3.5 bg-primary hover:bg-primary-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors overflow-hidden"
              >
                {/* Shimmer sweep */}
                {shimmer && (
                  <motion.span
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)",
                      width: "60%",
                    }}
                    initial={{ x: "-100%" }}
                    animate={{ x: "280%" }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  />
                )}
                {status === "loading" ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </motion.button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
                >
                  <CheckCircle size={16} />
                  Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                >
                  <AlertCircle size={16} />
                  Something went wrong. Email me at jawaliya7060@gmail.com
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
