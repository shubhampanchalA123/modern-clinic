"use client";
import { motion } from "framer-motion";

export default function VideoCard({ id, title, compact = false }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: -3 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`
        bg-card/70 backdrop-blur-xl border border-border 
        rounded-xl shadow-sm hover:shadow-lg 
        overflow-hidden transition-all
        ${compact ? "max-w-sm mx-auto" : "max-w-md mx-auto"}
      `}
    >
      {/* Video frame (shorter height in compact mode) */}
      <div className={compact ? "aspect-[16/10]" : "aspect-video"}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          className="w-full h-full rounded-b-xl"
          allowFullScreen
        />
      </div>

      {/* Title */}
      <div className="p-3">
        <h3
          className={`
            font-semibold text-foreground 
            ${compact ? "text-sm" : "text-base md:text-lg"}
          `}
        >
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
