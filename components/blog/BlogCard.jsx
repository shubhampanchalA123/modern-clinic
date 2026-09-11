"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const formatDate = (dateString) => {
  if (!dateString) return "";
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
};

export default function BlogCard({ post }) {
  const [imgError, setImgError] = useState(false);
  const displayDate = formatDate(post?.publishedAt || post?.createdAt || post?.date);
  const imageUrl = post?.image && !imgError ? post.image : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={`/blog/${post?.slug || ""}`}
        className="
          group block rounded-2xl overflow-hidden 
          bg-card/70 backdrop-blur-xl 
          border border-border shadow-sm hover:shadow-md
          transition-all duration-300 hover:-translate-y-1
        "
      >
        {/* Image */}
        <div className="relative w-full h-48 bg-muted overflow-hidden flex items-center justify-center">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post?.title || "Blog image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              className="object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 p-4 text-center">
              <span className="text-3xl mb-1">🌿</span>
              <span className="text-xs font-medium text-emerald-400/80 uppercase tracking-wider">
                {post?.category || "Health & Wellness"}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-primary font-medium truncate">
              {post?.category || "General"}
            </span>
            {displayDate && (
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {displayDate}
              </span>
            )}
          </div>

          <h3 className="mt-2 text-lg font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            {post?.title}
          </h3>

          <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-3">
            {post?.excerpt}
          </p>

          <div className="mt-4 text-primary text-sm font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            Read more <span aria-hidden="true">&rarr;</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
