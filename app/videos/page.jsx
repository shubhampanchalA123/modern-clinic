"use client";

import { useState } from "react";
import { videoList } from "./data";
import VideoCard from "./VideoCard";

export default function VideosPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(videoList.map(v => v.category))];

  const filteredVideos =
    filter === "All"
      ? videoList
      : videoList.filter(v => v.category === filter);

  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-background min-h-screen">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground">
          Our <span className="text-primary">Video Library</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Expert guidance, health awareness, recovery stories, and treatment insights — all in one place.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`
              px-5 py-2 rounded-full border transition
              ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground border-border hover:bg-secondary"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredVideos.map((video, idx) => (
          <VideoCard key={idx} id={video.id} title={video.title} />
        ))}
      </div>
    </section>
  );
}
