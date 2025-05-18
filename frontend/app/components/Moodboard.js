"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const images = [
  "/d1.svg",
  "/d2.svg",
  "/d3.svg",
  "/d4.svg",
  "/d5.svg",
  "/d6.svg",
  "/d7.svg",
  "/d8.svg",
  "/d9.svg",
  "/d10.svg",
];

// Predefined fixed positions (avoiding center area)
const fixedPositions = [
  { x: 30, y: 30 },
  { x: 250, y: 50 },
  { x: 550, y: 60 },
  { x: 700, y: 60 },
  { x: 1100, y: 55 },
  { x: 100, y: 250 },
  { x: 900, y: 350 },
  { x: 1100, y: 250 },
  { x: 300, y: 400 },
  { x: 650, y: 400 },
];

export default function Moodboard() {
  const containerRef = useRef(null);
  const followerRef = useRef(null);

  // Mouse follower effect
  useEffect(() => {
    const move = (e) => {
      const follower = followerRef.current;
      if (follower) {
        follower.style.transform = `translate(${e.clientX - 10}px, ${
          e.clientY - 10
        }px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="w-screen h-screen bg-[#f5ebd9] relative">
      {/* Mouse follower */}
      <div
        ref={followerRef}
        className="pointer-events-none fixed w-5 h-5 bg-black rounded-full z-[9999]"
        style={{ transition: "transform 0.1s ease-out" }}
      ></div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-[90vw] h-[80vh] bg-white rounded-lg shadow-lg border overflow-hidden flex flex-col">
          {/* Top Bar */}
          <div className="w-full flex items-center justify-between px-4 py-2 border-b">
            <div className="flex flex-col gap-[3px]">
              <div className="w-5 h-[2px] bg-black" />
              <div className="w-5 h-[2px] bg-black" />
            </div>
            <h1 className="text-lg font-semibold select-none">MOODBOARD</h1>
          </div>

          {/* Quote Overlay */}
          <div className="absolute top-2/5 left-1/2 transform -translate-x-1/2 z-10 text-center px-4 pointer-events-none">
            <h2 className="text-4xl font-bold leading-tight">
              Wander the world, capture the feeling
            </h2>
            <p className="text-2xl mt-1">plan your next journey.</p>
            <button className="bg-[#ff5100] h-10 w-32 mt-2 rounded border pointer-events-auto">
              <a href="mailto:som.meher.2024@gmail.com">Explore Now</a>
            </button>
          </div>

          {/* Moodboard Content */}
          <div
            ref={containerRef}
            className="flex-1 relative backdrop-blur-sm bg-[radial-gradient(#ddd_1px,transparent_1px)] bg-[size:20px_20px]"
          >
            {images.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`Element ${i}`}
                className="absolute w-24 h-24 cursor-grab"
                drag
                dragConstraints={containerRef}
                initial={{ x: fixedPositions[i].x, y: fixedPositions[i].y }}
                style={{ top: 0, left: 0 }}
                whileDrag={{ scale: 1.1, zIndex: 50 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
