"use client";

import React, { useState, useEffect, useRef } from "react";

function Hero() {
  const slides = [
    {
      title: "Visit Moroccan Islands",
      desc: "Escape to the Moroccan Islands — where golden beaches, vibrant culture, and unforgettable adventures await. Discover paradise with every sunrise, and memories in every sunset.",
      img: "/2.svg",
    },
    {
      title: "Visit the state of Moldives",
      desc: "Discover the Maldives — turquoise waters, pristine white beaches, vibrant coral reefs, luxury resorts, and tranquil sunsets. Your ultimate island paradise for unforgettable moments and endless relaxation.",
      img: "/3.svg",
    },
    {
      title: "Discover the Blue City of Goa",
      desc: "Experience Goa — vibrant beaches, lively nightlife, rich culture, delicious cuisine, historic forts, and colorful festivals. A perfect blend of relaxation, adventure, and unforgettable memories awaits you.",
      img: "/4.svg",
    },
    {
      title: "Visit Himalayas",
      desc: "Explore the Himalayas — majestic peaks, serene valleys, ancient monasteries, thrilling treks, vibrant cultures, crisp mountain air, peaceful retreats, and breathtaking landscapes for soul-stirring adventures.",
      img: "/5.svg",
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="mt-12 flex flex-col justify-center items-center">
        <h3 className="text-4xl text-[#06ADB2] font-medium">
          Plan Your Next Trip with Us
        </h3>
        <div className="relative w-full max-w-[70rem]">
          <div className="textpart mt-4">
            <h1 className="text-2xl font-medium text-[#4e4e4e]">{slides[index].title}</h1>
            <p className="text-[#6c6a6a]">{slides[index].desc}</p>
            <div
              key={index}
              className={`h-[32rem] w-[70rem] mt-2 bg-cover bg-center rounded transition-opacity duration-700 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${slides[index].img})` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
