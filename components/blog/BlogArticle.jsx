"use client";

import Image from "next/image";
import { motion } from "framer-motion";

//   BLOG DATABASE (DUMMY DATA)
const blogData = {
  "how-hair-fall-starts": {
    title: "How Hair Fall Really Starts",
    date: "March 10, 2025",
    category: "Hair Health",
    image: "/images/blog/hairfall.jpg",
    content: `
      <p>Hair fall rarely begins suddenly...</p>
      <h2>The hidden causes behind early-stage hair loss</h2>
      <ul>
        <li>Scalp inflammation</li>
        <li>Stress hormones</li>
        <li>Nutritional deficiencies</li>
        <li>Genetic tendency</li>
      </ul>
      <p>Early diagnosis is the key...</p>
    `,
  },

  "alopecia-areata-causes-homeopathy": {
    title: "Alopecia Areata: Why It Happens & How Homeopathy Helps",
    date: "February 28, 2025",
    category: "Hair Health",
    image: "/images/blog/alopecia.jpg",
    content: `
      <p>Alopecia Areata is an autoimmune condition...</p>
      <h2>Why does it happen?</h2>
      <ul><li>Stress</li><li>Immune imbalance</li><li>Genetics</li></ul>
      <h2>How Homeopathy helps</h2>
      <p>Homeopathy works by stabilizing...</p>
    `,
  },

  "dandruff-vs-dry-scalp": {
    title: "Dandruff vs. Dry Scalp: The Real Difference",
    date: "February 12, 2025",
    category: "Scalp Care",
    image: "/images/blog/dandruff.jpg",
    content: `
      <p>Dandruff and dry scalp look similar...</p>
      <h2>Dry scalp symptoms</h2>
      <ul><li>Small white flakes</li><li>Tightness</li></ul>
      <h2>Dandruff symptoms</h2>
      <ul><li>Oily flakes</li><li>Redness</li></ul>
    `,
  },

  "acne-hidden-triggers": {
    title: "Acne Triggers You Didn’t Know About",
    date: "January 29, 2025",
    category: "Skin Health",
    image: "/images/blog/acne.jpg",
    content: `
      <p>Acne is not caused only by oil...</p>
      <h2>Common triggers</h2>
      <ul><li>Stress hormones</li><li>Dairy</li><li>Inflammation</li></ul>
    `,
  },

  "thyroid-hairfall-connection": {
    title: "Thyroid Imbalance & Hair Fall: The Missing Link",
    date: "January 18, 2025",
    category: "Chronic Conditions",
    image: "/images/blog/thyroid.jpg",
    content: `
      <p>Thyroid hormones directly regulate...</p>
      <h2>Signs of thyroid hair fall</h2>
      <ul><li>Diffuse thinning</li><li>Dry hair</li></ul>
    `,
  },

  "stress-hairfall-cortisol": {
    title: "Stress Hair Fall Is Real — Here’s How It Works",
    date: "December 20, 2024",
    category: "Mental Wellness",
    image: "/images/blog/stress.jpg",
    content: `
      <p>Stress pushes follicles into premature shedding...</p>
      <h2>How to fix stress hair fall</h2>
      <ul><li>Breathing</li><li>Sleep</li><li>Inflammation control</li></ul>
    `,
  },

  "boost-immunity-naturally": {
    title: "Boosting Immunity Naturally in 2025",
    date: "December 12, 2024",
    category: "Immunity",
    image: "/images/blog/immunity.jpg",
    content: `
      <p>True immunity is built from the inside...</p>
      <h2>Key pillars</h2>
      <ul><li>Nutrition</li><li>Gut health</li><li>Stress balance</li></ul>
    `,
  },

  "migraine-causes-patterns": {
    title: "Why Migraine Pain Keeps Coming Back",
    date: "November 30, 2024",
    category: "Chronic Pain",
    image: "/images/blog/migraine.jpg",
    content: `
      <p>Migraines often follow identifiable patterns...</p>
      <h2>Common triggers</h2>
      <ul><li>Lights</li><li>Stress</li><li>Hormones</li></ul>
    `,
  },

  "sleep-disturbance-hormone-link": {
    title: "Sleep Disturbance & Hormones: The Deep Connection",
    date: "November 22, 2024",
    category: "Lifestyle",
    image: "/images/blog/sleep.jpg",
    content: `
      <p>Sleep regulates every major hormone...</p>
      <h2>What poor sleep causes</h2>
      <ul><li>Stress</li><li>Hair fall</li><li>Skin flare-ups</li></ul>
    `,
  },

  "healthy-scalp-science": {
    title: "Healthy Scalp = Healthy Hair: Here’s the Science",
    date: "October 15, 2024",
    category: "Hair Health",
    image: "/images/blog/science-scalp.jpg",
    content: `
      <p>The scalp microbiome controls hair strength...</p>
      <h2>How to strengthen scalp</h2>
      <ul><li>Gentle cleansing</li><li>Anti-inflammatory care</li></ul>
    `,
  },
};


export default function BlogArticle({ slug }) {
  const blog = blogData[slug];

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center text-muted-foreground">
        Blog not found.
      </div>
    );
  }

  console.log("Incoming slug:", slug);
  console.log("Blog keys:", Object.keys(blogData));


  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-primary text-sm font-medium">{blog.category}</span>
        <h1 className="text-4xl font-bold text-foreground mt-2 leading-snug">{blog.title}</h1>
        <p className="text-muted-foreground mt-2">{blog.date}</p>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative w-full h-80 rounded-2xl overflow-hidden mt-8 shadow-md bg-card"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* CONTENT */}
      <motion.article
        className="
    prose max-w-none mt-10
    prose-headings:text-foreground
    prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4
    prose-p:text-muted-foreground prose-p:leading-relaxed
    prose-ul:list-disc prose-ul:pl-6 prose-li:text-muted-foreground
    dark:prose-invert
  "
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
