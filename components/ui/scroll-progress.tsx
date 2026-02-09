"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpIcon } from "lucide-react";

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Removed isVisible state and useEffect for visibility logic.
    // The component will now always be visible and interactive.

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.div
            className="fixed bottom-8 right-8 z-[60] hidden md:flex items-center justify-center cursor-pointer group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
                pointerEvents: "auto"
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            onClick={scrollToTop}
        >
            {/* Background Circle (Track) */}
            <svg width="50" height="50" viewBox="0 0 100 100" className="transform -rotate-90">
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    pathLength="1"
                    className="stroke-border/40 fill-transparent"
                    strokeWidth="6"
                />
                {/* Progress Circle (Indicator) */}
                <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    pathLength="1"
                    className="stroke-text-primary fill-transparent"
                    strokeWidth="6"
                    style={{ pathLength: scrollYProgress }}
                />
            </svg>

            {/* Optional: Arrow or Percentage inside */}
            <div className="absolute inset-0 flex items-center justify-center text-text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpIcon className="w-5 h-5" />
            </div>
        </motion.div>
    );
};
