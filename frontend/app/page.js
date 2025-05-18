"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Testimonials from "./components/Testimonials";
import Moodboard from "./components/Moodboard";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Featuredtour from "./components/Featuredtour";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <Hero />
            <Testimonials />
            <Moodboard />
            <Featuredtour/>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
