"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fetchPublicBlogBySlug, clearCurrentBlog } from "@/redux/slices/blogSlice";
import { ArrowLeft, Calendar, Tag, Loader2 } from "lucide-react";

const formatDate = (dateString) => {
  if (!dateString) return "";
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
};

export default function BlogArticle({ slug }) {
  const dispatch = useDispatch();
  const { currentBlog: blog, articleLoading: loading, articleError: error } = useSelector(
    (state) => state.blogs
  );
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (slug) {
      dispatch(fetchPublicBlogBySlug(slug));
    }
    return () => {
      dispatch(clearCurrentBlog());
    };
  }, [dispatch, slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-6 animate-pulse">
        <div className="h-4 bg-muted rounded w-24" />
        <div className="h-10 bg-muted rounded w-3/4" />
        <div className="h-4 bg-muted rounded w-40" />
        <div className="w-full h-80 bg-muted rounded-2xl" />
        <div className="space-y-3 pt-6">
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-5/6" />
          <div className="h-4 bg-muted rounded w-4/6" />
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-28 text-center">
        <span className="text-5xl">📄</span>
        <h2 className="text-2xl font-bold text-foreground mt-4">Article Not Found</h2>
        <p className="text-muted-foreground mt-2 max-w-md mx-auto">
          The blog article you are looking for might have been moved, unpublished, or does not exist.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:opacity-90 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all blogs
        </Link>
      </div>
    );
  }

  const displayDate = formatDate(blog.publishedAt || blog.createdAt || blog.date);
  const imageUrl = blog.image && !imgError ? blog.image : null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Clinic Blogs
      </Link>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <Tag className="w-3 h-3" />
            {blog.category || "Health & Wellness"}
          </span>
          {displayDate && (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              {displayDate}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
          {blog.title}
        </h1>

        {blog.excerpt && (
          <p className="text-lg text-muted-foreground mt-4 leading-relaxed border-l-2 border-primary/40 pl-4">
            {blog.excerpt}
          </p>
        )}
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden mt-8 shadow-md bg-muted flex items-center justify-center border border-border"
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={blog.title || "Blog cover"}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 p-6 text-center">
            <span className="text-5xl mb-2">🌿</span>
            <p className="text-sm font-medium text-emerald-400">
              Modern Clinic • {blog.category || "Health & Wellness"}
            </p>
          </div>
        )}
      </motion.div>

      {/* CONTENT */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="
          prose max-w-none mt-10
          prose-headings:text-foreground prose-headings:font-bold
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:my-4
          prose-ul:list-disc prose-ul:pl-6 prose-li:text-muted-foreground prose-li:my-1
          prose-ol:list-decimal prose-ol:pl-6 prose-li:text-muted-foreground
          prose-strong:text-foreground
          prose-a:text-primary prose-a:underline hover:prose-a:opacity-80
          dark:prose-invert
        "
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* TAGS */}
      {blog.tags && blog.tags.length > 0 && (
        <div className="mt-12 pt-6 border-t border-border flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-muted-foreground mr-2">Tags:</span>
          {blog.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-muted text-foreground text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
