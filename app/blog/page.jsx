"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fetchPublicBlogs } from "@/redux/slices/blogSlice";
import BlogCard from "@/components/blog/BlogCard";
import { Search, Loader2, ChevronRight, Sparkles, BookOpen } from "lucide-react";
import { MdVerified } from "react-icons/md";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const CATEGORIES = [
  "All",
  "Hair Health",
  "Scalp Care",
  "Skin Health",
  "Chronic Conditions",
  "Mental Wellness",
  "Immunity",
  "Lifestyle",
];

export default function BlogPage() {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(
      fetchPublicBlogs({
        category: selectedCategory === "All" ? "" : selectedCategory,
        search: searchQuery.trim(),
      })
    );
  }, [dispatch, selectedCategory]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(
      fetchPublicBlogs({
        category: selectedCategory === "All" ? "" : selectedCategory,
        search: searchQuery.trim(),
      })
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary py-8 sm:py-14 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Knowledge Hub</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Medical Articles & Blogs</span>
        </nav>

        {/* ================= HERO SPOTLIGHT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3.5xl p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-card via-card/90 to-primary/5 border border-border/80 shadow-2xl overflow-hidden mb-14 text-center"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 shadow-xs mb-5">
              <BookOpen className="w-3.5 h-3.5 text-teal-500" />
              <span>Evidence-Backed Healthcare Knowledge</span>
              <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
            </div>

            <h1 className="text-3.5xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Doctor Insights &{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                Health Articles
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              Expert clinical insights, biological root-cause breakdowns, nutrition guides, and holistic treatment strategies written by medical specialists.
            </p>
          </div>
        </motion.div>

        {/* ================= SEARCH & CATEGORY FILTER ================= */}
        <div className="mb-14 space-y-6">
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-xl mx-auto flex items-center gap-2 bg-card border border-border rounded-full p-2 shadow-lg hover:border-primary/40 transition"
          >
            <div className="pl-4 text-muted-foreground">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search topics e.g. Hair Fall, PCOS, Acne, Immunity..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent px-2 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white text-xs font-bold shadow-md hover:opacity-95 transition cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Category Badges */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white shadow-md shadow-blue-500/25 scale-102"
                    : "bg-card border border-border text-foreground hover:bg-muted hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ================= BLOG POSTS GRID ================= */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <Loader2 className="w-10 h-10 animate-spin text-primary mb-3" />
            <p className="text-sm font-semibold">Loading medical articles...</p>
          </div>
        ) : error ? (
          <div className="p-8 rounded-3xl bg-red-500/10 border border-red-500/20 text-center max-w-md mx-auto my-12">
            <p className="text-sm text-red-600 dark:text-red-400 font-semibold">{error}</p>
          </div>
        ) : blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {blogs.map((post) => (
              <BlogCard key={post._id || post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 p-8 rounded-3.5xl bg-card border border-border shadow-md max-w-lg mx-auto mb-20">
            <p className="text-lg font-bold text-foreground">No articles found</p>
            <p className="text-xs text-muted-foreground mt-2">
              Try searching with different keywords or switch the category filter above.
            </p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="mt-5 px-6 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold hover:bg-primary/20 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      <Testimonials />
      <FAQ limit={4} />

    </div>
  );
}
