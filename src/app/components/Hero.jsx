import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="w-full px-20 py-8">

            <div className="w-full bg-[#121418] text-white rounded-2xl p-8 md:p-12 lg:p-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8 border border-zinc-800 shadow-2xl">


                <div className="flex-1 space-y-6">
                    {/* Subtitle / Tag */}
                    <span className="inline-block text-xs md:text-sm font-semibold tracking-wider text-[#adff2f] uppercase">
                        WORKOUT LIBRARY
                    </span>


                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase font-sans">
                        TRAIN WITH INTENT. <br className="hidden sm:inline" />
                        LOG EVERY SET.
                    </h1>

                    <p className="text-zinc-400 text-sm md:text-base max-w-lg leading-relaxed font-normal">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.
                    </p>


                    <div className="pt-2">
                        <button className="bg-[#adff2f] hover:bg-[#9be327] text-black font-bold text-xs md:text-sm tracking-wider uppercase py-3.5 px-6 rounded-lg transition-colors duration-200 cursor-pointer shadow-md">
                            BROWSE WORKOUTS
                        </button>
                    </div>
                </div>


                <div className="flex-1 flex justify-center md:justify-end w-full">
                    <div className="relative w-full max-w-[450px] aspect-4/3 flex items-center justify-center">
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