import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full bg-[#0b0c0f] border-t border-zinc-800/80 py-8 text-zinc-400 text-sm">
            <div className="mx-auto max-w-[1600px] px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">

                {/* Logo & Brand */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition">
                    <Image 
                        src="/logo.png" 
                        alt="FitLog Logo" 
                        width={24} 
                        height={24} 
                        className="object-contain" 
                    />
                    <span className="font-bold tracking-wider text-white uppercase text-base">
                        FITLOG
                    </span>
                </Link>

                {/* Copyright Text */}
                <div className="text-zinc-500 text-xs sm:text-sm text-center sm:text-right font-medium">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </div>

            </div>
        </footer>
    );
};

export default Footer;