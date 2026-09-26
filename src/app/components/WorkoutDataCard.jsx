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
        difficulty,
        duration,
        caloriesBurned,
        sets,
        reps,
        rating,
        description,
        instructions = []
    } = workoutData;

    return (
        <div id="library" className="scroll-mt-33">

            <Link href={`/workouts/${id}`} className="w-full">

                <div className="bg-[#121418] text-white rounded-2xl overflow-hidden border border-gray-800 shadow-lg w-full hover:border-gray-700 transition-all duration-300">
                    <div className="relative w-full aspect-[4/3] bg-gray-900 overflow-hidden">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover object-top hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <div className="p-5 flex flex-col gap-3">
                        <div className="flex flex-wrap gap-2">
                            {muscleGroups.map((group, index) => (
                                <span
                                    key={index}
                                    className="bg-[#adff2f] text-black font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full"
                                >
                                    {group}
                                </span>
                            ))}
                        </div>

                        <div>
                            <h3 className="text-lg font-black uppercase tracking-wide text-white">
                                {name}
                            </h3>
                            <p className="text-xs text-gray-400 mt-1 font-medium">
                                {equipment}
                            </p>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-gray-400 mt-2 font-medium">
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                                    <path strokeWidth="2" strokeLinecap="round" d="M12 7v5l3 2" />
                                </svg>
                                <span>{duration} min</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 23c-4.97 0-9-3.58-9-8 0-3.08 1.83-6.14 4.58-8.85 1.05-1.04 2.21-2.02 3.42-2.93a.998.998 0 0 1 1.5.83c0 2.21 1.79 4 4 4 .55 0 1-.45 1-1 0-.38-.22-.72-.56-.88A12.02 12.02 0 0 0 12 1c6 4 9 8.5 9 14 0 4.42-4.03 8-9 8z" />
                                </svg>
                                <span>{caloriesBurned} kcal</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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