"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaUserMd } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/40 px-6">

      {/* Floating Animation Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          bg-card/70 backdrop-blur-xl
          border border-border
          shadow-xl rounded-3xl
          p-10 max-w-lg text-center relative overflow-hidden
        "
      >

        {/* Floating Bubbles Animation */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          className="absolute top-6 right-6 w-20 h-20 bg-primary/10 rounded-full blur-2xl"
        />

        <motion.div
          animate={{
            y: [10, -10, 10],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
          className="absolute bottom-6 left-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl"
        />

        {/* Icon + Pulse Animation */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          }}
          className="flex justify-center mb-6"
        >
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-primary/15 text-primary shadow-inner">
            <FaUserMd size={48} />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-foreground mb-3"
        >
          404 – Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-muted-foreground leading-relaxed mb-8"
        >
          Looks like this page took the wrong treatment path. <br />
          Let’s help you get back to where you need to be.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            className="
              inline-block px-8 py-3 rounded-xl 
              bg-primary text-primary-foreground 
              font-medium shadow-md 
              hover:bg-primary/90 transition
            "
          >
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
