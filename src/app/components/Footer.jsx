import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-full px-20 bg-[#0b0c0f] border-t border-zinc-800/60 py-6 text-zinc-400 text-sm ">

            <div className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

                <div className="flex items-center gap-2 ">

                    <Image href="/" src="/logo.png" alt="FitLog Logo" width={24} height={24} className="" />

                    <span className="font-bold tracking-wider text-white uppercase text-base">
                        FITLOG
                    </span>
                </div>

                <div className="text-zinc-500 text-xs sm:text-sm text-center sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </div>

            </div>
        </footer>
    );
};

export default Footer;