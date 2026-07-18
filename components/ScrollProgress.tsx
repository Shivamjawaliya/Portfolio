"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      style={{ width }}
      className="fixed top-0 left-0 h-[3px] bg-primary z-[100] origin-left"
    />
  );
}
