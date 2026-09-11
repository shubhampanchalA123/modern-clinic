"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublicBlogs } from "@/redux/slices/blogSlice";
import BlogCard from "@/components/blog/BlogCard";
import { Search, Loader2 } from "lucide-react";

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
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-foreground mb-3">
          Clinic <span className="text-primary">Blogs</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base">
          Expert insights, science-backed guidance, and holistic treatments for hair, skin, immunity, and chronic wellness.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="mb-12 space-y-6">
        <form
          onSubmit={handleSearchSubmit}
          className="max-w-md mx-auto relative"
        >
          <input
            type="text"
            placeholder="Search articles by topic, symptom or remedy..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-24 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm shadow-sm transition"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full hover:opacity-90 transition"
          >
            Search
          </button>
        </form>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 scale-105"
                  : "bg-muted/70 text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      {loading ? (
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card/50 p-4 space-y-4 animate-pulse"
            >
              <div className="w-full h-48 bg-muted rounded-xl" />
              <div className="h-4 bg-muted rounded w-1/3" />
              <div className="h-6 bg-muted rounded w-3/4" />
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded w-full" />
                <div className="h-3 bg-muted rounded w-5/6" />
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center max-w-xl mx-auto">
          <p className="text-red-400 font-medium mb-3">Unable to load blogs at the moment.</p>
          <button
            onClick={() =>
              dispatch(
                fetchPublicBlogs({
                  category: selectedCategory === "All" ? "" : selectedCategory,
                  search: searchQuery.trim(),
                })
              )
            }
            className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg text-xs font-semibold hover:bg-red-500/30 transition"
          >
            Try Again
          </button>
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-16 px-4 bg-card/40 rounded-3xl border border-dashed border-border max-w-2xl mx-auto">
          <span className="text-4xl">📚</span>
          <h3 className="mt-4 text-lg font-semibold text-foreground">No articles found</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {selectedCategory !== "All" || searchQuery
              ? "No blogs match your filter. Try adjusting your search query or category."
              : "New blog articles will be published here soon."}
          </p>
          {(selectedCategory !== "All" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                dispatch(fetchPublicBlogs({}));
              }}
              className="mt-5 px-4 py-2 bg-primary/10 text-primary rounded-xl text-xs font-semibold hover:bg-primary/20 transition"
            >
              Reset Filters
            </button>
          )}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((post, i) => (
            <BlogCard key={post.id || post._id || post.slug || i} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
