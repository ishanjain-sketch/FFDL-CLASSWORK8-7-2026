import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function LionCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [visible, setVisible] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 32 });
  const springY = useSpring(y, { stiffness: 400, damping: 32 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isTouch || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("lion-cursor-active");

    const move = (e) => {
      x.set(e.clientX - 20);
      y.set(e.clientY - 20);

      const target = e.target.closest(
        "a, button, [role='button'], input, textarea, select"
      );
      setIsPointer(Boolean(target));
    };
    const down = () => setIsDown(true);
    const up = () => setIsDown(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      document.documentElement.classList.remove("lion-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: springX,
        y: springY,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      animate={{
        scale: isDown ? 0.85 : isPointer ? 1.25 : 1,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <path
        d="M37,20 L28.66,25 L28.5,34.72 L20,30 L11.5,34.72 L11.34,25 L3,20 L11.34,15 L11.5,5.28 L20,10 L28.5,5.28 L28.66,15 Z"
        fill="#FAC775"
        stroke="#CC8600"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="21" r="7.5" fill="#FFFFFF" stroke="#14213D" strokeWidth="1.2" />
      <circle cx="16.5" cy="20" r="1.1" fill="#14213D" />
      <circle cx="23.5" cy="20" r="1.1" fill="#14213D" />
      <path d="M18.5,23 L21.5,23 L20,25.3 Z" fill="#14213D" />
      <path
        d="M20,25.3 Q17.5,27 15.5,26"
        stroke="#14213D"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M20,25.3 Q22.5,27 24.5,26"
        stroke="#14213D"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}