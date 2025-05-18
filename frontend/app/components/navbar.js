"use client";

import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import Som from "./som";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Visit"); 
  const router = useRouter();

  const menuItems = ["Visit", "Your Trips", "Features", "Ownership", "Support"];
  const exploreLocations = [
    "Roslyn, NY", "El Segundo, CA", "San Diego, CA", "Joshua Tree Charging Outpost",
    "Yosemite Charging Outpost", "New York, NY Meatpacking District", "Seattle, WA", "Atlanta, GA",
    "Aventura Mall", "Brooklyn, NY", "San Francisco, CA", "Denver, CO", "Austin, TX",
    "Vancouver, BC", "South Coast Theater", "Nashville, TN", "Scottsdale, AZ", "Chicago, IL",
    "Boston, MA", "Miami, FL", "Los Angeles, CA", "Philadelphia, PA", "Houston, TX", "Phoenix, AZ",
    "Portland, OR", "Charlotte, NC", "Dallas, TX", "Orlando, FL", "Minneapolis, MN",
    "Washington, DC", "Santa Monica, CA", "Salt Lake City, UT", "Sacramento, CA", "Tampa, FL",
    "Palo Alto, CA", "Toronto, ON", "Honolulu, HI",
  ];

  return (
    <>
      
      <div className="header h-16 flex items-center justify-between px-8 relative z-20">
        <button className="menu shadow-2xs" onClick={() => setIsMenuOpen(true)}>
          <FiMenu size={24} color="black" style={{ cursor: "pointer" }} />
        </button>

        <button className="text-xl ml-24 font-semibold transition">
          CODECIRCUIT
        </button>

        <div className="relative group">
          <button className="bg-black text-white h-8 w-34 flex items-center justify-center rounded shadow-2xs cursor-pointer px-4">
            ❤️ from som
          </button>

          <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
            <Som />
          </div>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="fixed top-4 left-4 right-4 bottom-4 bg-[#f4eadc] rounded-2xl z-30 shadow-2xl p-8 flex flex-col">
          
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-semibold transition"
            >
              CODECIRCUIT
            </button>

            <button onClick={() => setIsMenuOpen(false)}>
              <IoClose size={28} color="red" />
            </button>
          </div>

          
          <div className="flex flex-row h-full">
            
            <div className="w-2/12 flex flex-col gap-6 text-left text-black text-sm font-medium">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className={`py-2 rounded text-left px-2 ${
                    activeSection === item ? "bg-black text-white" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            
            <div className="w-7/12 flex flex-col items-start justify-start gap-4 pl-8 pr-4">
              <div className="text-sm text-gray-500">View</div>

              {activeSection === "Visit" ? (
                <div className="flex flex-col gap-4 w-full">
                  <img
                    src="/6.svg"
                    alt="Example 1"
                    className="rounded-lg h-[280px] bg-cover bg-center w-full transition-transform duration-300 hover:scale-95"
                  />
                  <img
                    src="/7.svg"
                    alt="Example 2"
                    className="rounded-lg h-[280px] bg-cover bg-center w-full transition-transform duration-300 hover:scale-95"
                  />
                </div>
              ) : (
                <div className="text-2xl font-semibold text-gray-700 mt-4">
                  🚧 {activeSection} — Coming Soon!
                </div>
              )}
            </div>

            
            <div className="w-3/12 flex flex-col gap-2 pl-4 border-l border-gray-300">
              <div className="text-sm text-gray-500 mb-2">Explore</div>
              <div className="flex flex-col overflow-y-auto gap-2 pr-2 h-full">
                {exploreLocations.map((place) => (
                  <div
                    key={place}
                    className="whitespace-nowrap px-4 py-2 rounded-lg text-sm text-black hover:bg-gray-200 cursor-pointer"
                  >
                    {place}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
