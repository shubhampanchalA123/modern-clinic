"use client";
import { motion } from "framer-motion";

export default function VideoCard({ id, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="
        bg-card border border-border rounded-2xl 
        shadow-sm hover:shadow-lg 
        overflow-hidden
      "
    >
      {/* Video */}
      <div className="aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          className="w-full h-full"
          allowFullScreen
        />
      </div>

      {/* Title */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
    </motion.div>
  );
}
