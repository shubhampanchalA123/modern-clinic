"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { videoList } from "./data";
import VideoCard from "./VideoCard";
import { ChevronDown, ChevronRight, Sparkles, Video, Play } from "lucide-react";
import { MdVerified } from "react-icons/md";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function VideosPage() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;

  const categories = ["All", ...new Set(videoList.map((v) => v.category))];

  const filteredVideos =
    filter === "All"
      ? videoList
      : videoList.filter((v) => v.category === filter);

  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  const startIndex = (currentPage - 1) * videosPerPage;
  const currentVideos = filteredVideos.slice(startIndex, startIndex + videosPerPage);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary py-8 sm:py-14 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Media</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Doctor Video Library</span>
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
              <Video className="w-3.5 h-3.5 text-teal-500" />
              <span>Doctor-Led Clinical Insights</span>
              <Sparkles className="w-3.5 h-3.5 text-teal-500 ml-1" />
            </div>

            <h1 className="text-3.5xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Doctor Insights &{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                Video Library
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              Expert clinical guidance, condition explanations, myths vs facts, and real patient recovery stories with Dr. Devendra Rathore.
            </p>
          </div>
        </motion.div>

        {/* ================= CATEGORY FILTER TABS ================= */}
        <div className="mb-12">
          {/* Desktop Filter Tabs */}
          <div className="hidden md:flex overflow-x-auto no-scrollbar gap-3 py-2 justify-center px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setCurrentPage(1); }}
                className={`
                  px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap
                  transition-all duration-200 cursor-pointer
                  ${filter === cat
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white shadow-md shadow-blue-500/25 scale-102"
                    : "bg-card border border-border text-foreground hover:bg-muted hover:border-primary/30"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile Filter Dropdown */}
          <div className="relative md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="w-full bg-card border border-border text-foreground px-5 py-3 rounded-2xl flex justify-between items-center text-sm font-semibold shadow-sm"
            >
              <span>{filter}</span>
              <ChevronDown size={18} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
              <div className="absolute left-0 right-0 mt-2 bg-card border border-border shadow-xl rounded-2xl overflow-hidden z-30 p-2 space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setFilter(cat);
                      setCurrentPage(1);
                      setOpen(false);
                    }}
                    className={`
                      w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold transition
                      ${filter === cat ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"}
                    `}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ================= VIDEO GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {currentVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* ================= PAGINATION ================= */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-20">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`
                    w-10 h-10 rounded-full font-bold text-xs transition cursor-pointer
                    ${currentPage === pageNumber
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white shadow-md shadow-blue-500/25"
                      : "bg-card border border-border text-foreground hover:bg-muted"
                    }
                  `}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        )}

      </div>

      <Testimonials />
      <FAQ limit={4} />

    </div>
  );
}
