"use client";
import React from 'react'

function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4">
                {/* Top Branding */}
                <h2 className="text-xl font-semibold tracking-widest text-[#ffffff]">
                    CODECIRCUIT
                </h2>

                {/* Contact Info */}
                <div className="text-sm sm:text-base">
                    <p>
                        <span className="font-medium">Contact:</span>{" "}
                        <a
                            href="mailto:som.meher.2024@gmail.com"
                            className="text-[#ff5100] underline hover:opacity-80 transition"
                        >
                            som.meher.2024@gmail.com
                        </a>
                    </p>
                </div>

                {/* Designer Credit */}
                <p className="text-sm sm:text-base">
                    <span className="font-medium">Designer & Developer:</span>{" "}
                    SOM MEHER
                </p>

                {/* Disclaimer */}
                <p className="text-xs sm:text-sm text-gray-400 max-w-md">
                    Disclaimer: Cannot use anything without the permission of the owner.
                </p>

                {/* Copyright */}
                <p className="text-xs text-gray-500 mt-4">© 2025 Som</p>
            </div>
        </footer>
    )
}

export default Footer
