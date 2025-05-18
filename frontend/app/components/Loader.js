"use client";
import React from 'react'
import { motion } from "framer-motion";

const text = "Made by Som".split("");
function Loader() {
    return (
        <div className="fixed inset-0 bg-[#ff5100] flex items-center justify-center z-[9999]">
            <div className="flex space-x-1">
                {text.map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.1,
                            duration: 0.4,
                            ease: "easeOut",
                        }}
                        className="text-3xl md:text-5xl font-bold text-[#F3E9D6]"
                    >
                        {char}
                    </motion.span>
                ))}
            </div>
        </div>
    )
}

export default Loader
