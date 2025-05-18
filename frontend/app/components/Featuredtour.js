import { motion } from "framer-motion";
import React from 'react'

const tours = [
    {
        title: "Featuring Luxury Tours",
        image: "/2.svg",
    },
    {
        title: "Featuring Luxury Tours",
        image: "/3.svg",
    },
    {
        title: "Featuring Luxury Tours",
        image: "/4.svg",
    },
];
function Featuredtour() {
    return (
        <div className="bg-[#f4ead7] px-10 py-8 text-gray-800">
      <h2 className="text-sm tracking-widest uppercase text-gray-600 mb-4">Featured Tours</h2>
      {tours.map((tour, index) => (
        <div key={index}>
          <div className="flex justify-between items-center py-6 border-t border-gray-400">
            <div className="text-red-500 tracking-wide text-sm">
              {tour.title}
            </div>
            <motion.img
              src={tour.image}
              alt="Tour"
              className="w-40 h-auto object-cover rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          </div>
        </div>
      ))}
      <div className="border-t border-gray-400 mt-6" />
    </div>
    )
}

export default Featuredtour
