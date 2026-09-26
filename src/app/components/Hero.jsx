'use client'

import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="w-full mx-auto max-w-[1600px] px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8">
            <div className="w-full bg-[#121418] text-white rounded-2xl p-6 sm:p-10 lg:p-14 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 border border-zinc-800/80 shadow-2xl">

                {/* Left Side Info */}
                <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left">
                    <span className="inline-block text-xs sm:text-sm font-bold tracking-wider text-[#adff2f] uppercase">
                        WORKOUT LIBRARY
                    </span>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight sm:leading-none uppercase">
                        TRAIN WITH INTENT. <br className="hidden sm:inline" />
                        LOG EVERY SET.
                    </h1>

                    <p className="text-zinc-400 text-xs sm:text-sm md:text-base xl:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed font-normal">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.
                    </p>

                    <div className="pt-2">
                        <button
                            onClick={() => {
                                document.getElementById('library')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full sm:w-auto bg-[#adff2f] hover:bg-[#9be327] active:scale-[0.98] text-black font-bold text-xs sm:text-sm tracking-wider uppercase py-3.5 px-8 rounded-xl transition-all duration-200 cursor-pointer shadow-md"
                        >
                            BROWSE WORKOUTS
                        </button>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="flex-1 flex justify-center md:justify-end w-full">
                    <div className="relative w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[560px] aspect-4/3 flex items-center justify-center">
                        <Image
                            src="/banner.png"
                            alt="Hero Image"
                            width={600}
                            height={400}
                            className="object-contain w-full h-auto drop-shadow-xl"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;