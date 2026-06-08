"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jawaliya7060@gmail.com",
    href: "mailto:jawaliya7060@gmail.com",
    color: "#06B6D4",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7060390740",
    href: "tel:+917060390740",
    color: "#3B82F6",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bhopal, Madhya Pradesh, India",
    href: "https://maps.google.com/?q=Bhopal,India",
    color: "#8B5CF6",
  },
];

const socials = [
  { icon: Github, href: "https://github.com/Shivamjawaliya", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shivam-jawaliya-9629372b6/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:jawaliya7060@gmail.com", label: "Email" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      // Using EmailJS — set your own service/template/publicKey in .env.local
      // import emailjs from '@emailjs/browser';
      // await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
      // Simulated delay for demonstration
      await new Promise((r) => setTimeout(r, 1500));
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Bg blobs */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">
            Reach out
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hi —
            my inbox is always open.
          </p>
          <div className="mt-6 w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
        </motion.div>

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
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-5 glass rounded-2xl border border-white/10 hover:border-primary/30 transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}18` }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                  <p className="font-medium text-white group-hover:text-primary transition-colors text-sm">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                    className="p-3 glass rounded-xl border border-white/10 text-gray-400 hover:text-primary hover:border-primary/40 transition-all"
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
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass rounded-2xl p-8 border border-white/10 space-y-5"
            >
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/60 focus:bg-white/8 transition-all ${
                      errors.name ? "border-red-500/60" : "border-white/10"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
                    })}
                    type="email"
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/60 transition-all ${
                      errors.email ? "border-red-500/60" : "border-white/10"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject <span className="text-primary">*</span>
                </label>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  placeholder="What's this about?"
                  className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/60 transition-all ${
                    errors.subject ? "border-red-500/60" : "border-white/10"
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 20, message: "At least 20 characters" },
                  })}
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/60 transition-all resize-none ${
                    errors.message ? "border-red-500/60" : "border-white/10"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(6,182,212,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 py-3.5 bg-primary hover:bg-primary-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
                >
                  <CheckCircle size={16} />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                >
                  <AlertCircle size={16} />
                  Something went wrong. Please email me directly at jawaliya7060@gmail.com
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
