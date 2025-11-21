"use client";
import { motion } from "framer-motion";

export default function MobileSidebar({ open, setOpen, topics, active, setActive }) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: open ? "0%" : "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-3/4 h-full bg-card shadow-xl z-50 p-6 overflow-y-auto"
    >
      <h2 className="text-xl font-bold mb-4">Topics</h2>

      {topics.map((item, index) => (
        <button
          key={index}
          className={`w-full text-left px-4 py-3 rounded-lg mb-2
            ${active === index ? "bg-primary text-primary-foreground" : "bg-background text-foreground"}
          `}
          onClick={() => { setActive(index); setOpen(false); }}
        >
          {item.question}
        </button>
      ))}
    </motion.div>
  );
}
