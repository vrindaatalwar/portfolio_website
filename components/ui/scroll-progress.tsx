"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpIcon } from "lucide-react";

export const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollPx = document.documentElement.scrollTop;
            const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (scrollPx / winHeightPx) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener("scroll", updateScrollProgress);
        updateScrollProgress(); // Initial call

        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const circumference = 2 * Math.PI * 40; // radius = 40
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <motion.div
            className="fixed bottom-8 right-8 z-[60] flex items-center justify-center cursor-pointer group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
        >
            {/* Background Circle (Track) */}
            <svg width="50" height="50" viewBox="0 0 100 100" className="transform -rotate-90">
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-border/40 fill-transparent"
                    strokeWidth="6"
                />
                {/* Progress Circle (Indicator) */}
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-text-primary fill-transparent transition-all duration-150 ease-out"
                    strokeWidth="6"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
            </svg>

            {/* Arrow icon inside */}
            <div className="absolute inset-0 flex items-center justify-center text-text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpIcon className="w-5 h-5" />
            </div>
        </motion.div>
    );
};
