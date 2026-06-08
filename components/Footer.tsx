"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
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

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark-200 border-t border-white/5 pt-16 pb-8">
      {/* Gradient top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">&lt;SJ /&gt;</div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Full-stack developer building scalable, end-to-end web products — from
              backend APIs to polished frontends. Based in Bhopal, India.
            </p>
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
                  className="p-2.5 glass rounded-lg border border-white/10 text-gray-400 hover:text-primary hover:border-primary/40 transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-gray-400 hover:text-primary text-sm transition-colors animated-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-white font-semibold mb-5">Get In Touch</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <a
                href="mailto:jawaliya7060@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={14} className="text-primary" />
                jawaliya7060@gmail.com
              </a>
              <p className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                </span>
                Bhopal, Madhya Pradesh, India
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Shivam Jawaliya. Built with{" "}
            <Heart size={12} className="text-red-500 fill-red-500" /> using Next.js & Tailwind CSS.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors glass px-4 py-2 rounded-lg border border-white/10 hover:border-primary/30"
          >
            <ArrowUp size={14} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
