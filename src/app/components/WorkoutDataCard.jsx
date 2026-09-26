import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WorkoutDataCard = ({ workoutData }) => {
    const {
        id,
        name,
        image,
        muscleGroups = [],
        equipment,
        duration,
        caloriesBurned,
        rating,
    } = workoutData || {};

    return (
        <div  className=" w-full">
            <Link href={`/workouts/${id}`} className="group block w-full">
                <div className="bg-[#121418] text-white rounded-2xl overflow-hidden border border-zinc-800/80 shadow-lg w-full transition-all duration-300 group-hover:border-zinc-700 group-hover:-translate-y-1">
                    
                    {/* Image Container */}
                    <div className="relative w-full aspect-[4/3] bg-zinc-900 overflow-hidden">
                        <Image
                            src={image}
                            alt={name || "Workout Image"}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5 flex flex-col gap-3">
                        {/* Muscle Groups */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {muscleGroups.map((group, index) => (
                                <span
                                    key={index}
                                    className="bg-[#adff2f] text-black font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-0.5 sm:py-1 rounded-full"
                                >
                                    {group}
                                </span>
                            ))}
                        </div>

                        {/* Title & Subtitle */}
                        <div>
                            <h3 className="text-base sm:text-lg font-black uppercase tracking-wide text-white group-hover:text-[#adff2f] transition-colors line-clamp-1">
                                {name}
                            </h3>
                            <p className="text-xs text-zinc-400 mt-1 font-medium line-clamp-1">
                                {equipment}
                            </p>
                        </div>

                        {/* Metadata Row */}
                        <div className="flex items-center justify-between text-xs text-zinc-400 mt-1 pt-3 border-t border-zinc-800/60 font-medium">
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                                    <path strokeWidth="2" strokeLinecap="round" d="M12 7v5l3 2" />
                                </svg>
                                <span>{duration} min</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-zinc-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 23c-4.97 0-9-3.58-9-8 0-3.08 1.83-6.14 4.58-8.85 1.05-1.04 2.21-2.02 3.42-2.93a.998.998 0 0 1 1.5.83c0 2.21 1.79 4 4 4 .55 0 1-.45 1-1 0-.38-.22-.72-.56-.88A12.02 12.02 0 0 0 12 1c6 4 9 8.5 9 14 0 4.42-4.03 8-9 8z" />
                                </svg>
                                <span>{caloriesBurned} kcal</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <span>{rating}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default WorkoutDataCard;