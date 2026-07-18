"use client";

import { useCallback, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

type AnchorBox = {
  left: number;
  top: number;
  width: number;
  height: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const mix = (from: number, to: number, progress: number) => from + (to - from) * progress;

function readAnchor(selector: string): AnchorBox | null {
  const node = document.querySelector<HTMLElement>(selector);
  if (!node) return null;

  const rect = node.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
    width: rect.width,
    height: rect.height,
  };
}

export default function SharedProfileImage() {
  const reduced = useReducedMotion() ?? false;
  const { scrollY } = useScroll();
  const [ready, setReady] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const width = useMotionValue(0);
  const height = useMotionValue(0);
  const radius = useMotionValue(18);
  const glow = useMotionValue(0.18);
  const opacity = useMotionValue(0);

  const boxShadow = useTransform(
    glow,
    (value) => `0 0 ${Math.round(34 + value * 44)}px rgba(6, 182, 212, ${value})`,
  );

  const update = useCallback(
    (currentScroll = window.scrollY) => {
      const hero = readAnchor('[data-profile-image-anchor="hero"]');
      const about = readAnchor('[data-profile-image-anchor="about"]');

      if (!hero || !about || hero.width === 0 || about.width === 0) {
        opacity.set(0);
        setReady(false);
        return;
      }

      const viewportHeight = window.innerHeight;
      const startScroll = Math.max(0, hero.top - viewportHeight * 0.24);
      const endScroll = Math.max(startScroll + 1, about.top - viewportHeight * 0.44);
      const progress = reduced ? 1 : clamp((currentScroll - startScroll) / (endScroll - startScroll), 0, 1);

      const nextLeft = mix(hero.left, about.left, progress) - window.scrollX;
      const nextTop = mix(hero.top, about.top, progress) - currentScroll;
      const nextWidth = mix(hero.width, about.width, progress);
      const nextHeight = mix(hero.height, about.height, progress);

      x.set(nextLeft);
      y.set(nextTop);
      width.set(nextWidth);
      height.set(nextHeight);
      radius.set(mix(18, Math.min(nextWidth, nextHeight) / 2, progress));
      glow.set(mix(0.18, 0.42, progress));
      opacity.set(1);
      setReady(true);
    },
    [glow, height, opacity, radius, reduced, width, x, y],
  );

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => update());
    const timers = [350, 900, 1600, 2400].map((delay) =>
      window.setTimeout(() => update(), delay),
    );
    const handleResize = () => update();
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(frame);
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("resize", handleResize);
    };
  }, [update]);

  useMotionValueEvent(scrollY, "change", update);

  return (
    <motion.div
      data-profile-floating="true"
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 overflow-hidden border border-primary/35 bg-[var(--surface)]"
      style={{
        x,
        y,
        width,
        height,
        borderRadius: radius,
        opacity,
        boxShadow,
        visibility: ready ? "visible" : "hidden",
      }}
    >
      <Image
        src="/profile.jpg"
        alt=""
        fill
        sizes="(max-width: 768px) 260px, 400px"
        className="object-cover object-top"
        priority
      />
    </motion.div>
  );
}
