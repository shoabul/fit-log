'use client';

import { useContext, useState } from 'react';
import Link from 'next/link';
import { WorkoutContext } from '@/context/WorkoutContext';
import Image from 'next/image';
import { toast } from 'react-toastify';

export default function MyPlanPage() {
    const {
        myPlan = [],
        savedWorkouts = [],
        removeFromPlan,
        markAsDone,
        removeSavedWorkout,
    } = useContext(WorkoutContext);

    const [activeTab, setActiveTab] = useState("Today's Plan");
    const [sortBy, setSortBy] = useState('Duration');

    const activeList = activeTab === "Today's Plan" ? myPlan : savedWorkouts;

    const totalExercises = myPlan.length;
    const totalMinutes = myPlan.reduce(
        (acc, item) => acc + (parseInt(item.duration) || 0),
        0
    );
    const totalCalories = myPlan.reduce(
        (acc, item) => acc + (parseInt(item.caloriesBurned) || 0),
        0
    );

    const handleMarkDone = (workout) => {
        markAsDone(workout);
        toast.success(`"${workout.name || workout.title}" marked as done!`);
    };

    const handleRemove = (workout) => {
        if (activeTab === "Today's Plan") {
            removeFromPlan(workout.id);
            toast.error(`Removed "${workout.name || workout.title}" from Today's Plan`);
        } else {
            removeSavedWorkout(workout.id);
            toast.error(`Removed "${workout.name || workout.title}" from Saved Workouts`);
        }
    };

    const sortedList = [...activeList].sort((a, b) => {
        if (sortBy === 'Duration') {
            return (parseInt(b.duration) || 0) - (parseInt(a.duration) || 0);
        }
        if (sortBy === 'Calories') {
            return (parseInt(b.caloriesBurned) || 0) - (parseInt(a.caloriesBurned) || 0);
        }
        if (sortBy === 'Name') {
            return (a.name || a.title || '').localeCompare(b.name || b.title || '');
        }
        return 0;
    });

    return (
        <div className="w-full px-20 min-h-screen bg-[#0b0c0f] text-white p-6 font-sans">
            <div className="mb-6">
                <h1 className="text-3xl font-extrabold uppercase tracking-wide text-white mb-1">
                    MY PLAN
                </h1>
                <p className="text-gray-400 text-sm">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className="bg-[#111319] border border-[#1b1f2b] rounded-2xl p-6 mb-8 grid grid-cols-3 divide-x divide-[#1b1f2b]">
                <div className="px-4 first:pl-0">
                    <span className="text-xs text-gray-400 font-medium block mb-2">
                        Exercises
                    </span>
                    <span className="text-4xl font-extrabold text-[#b5ff38]">
                        {totalExercises}
                    </span>
                </div>
                <div className="px-6">
                    <span className="text-xs text-gray-400 font-medium block mb-2">
                        Minutes
                    </span>
                    <span className="text-4xl font-extrabold text-white">
                        {totalMinutes}
                    </span>
                </div>
                <div className="px-6">
                    <span className="text-xs text-gray-400 font-medium block mb-2">
                        Calories
                    </span>
                    <span className="text-4xl font-extrabold text-white">
                        {totalCalories}
                    </span>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                {/* Tab Buttons */}
                <div className="bg-[#111319] border border-[#1b1f2b] p-1 rounded-xl flex items-center gap-1">
                    <button
                        onClick={() => setActiveTab("Today's Plan")}
                        className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === "Today's Plan"
                                ? 'bg-[#1e2330] text-white'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        Today's Plan
                    </button>
                    <button
                        onClick={() => setActiveTab('Saved')}
                        className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'Saved'
                                ? 'bg-[#1e2330] text-white'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        Saved
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Sort By</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-[#111319] border border-[#1b1f2b] text-white text-sm rounded-xl px-4 py-2 outline-none cursor-pointer hover:border-gray-600 transition"
                    >
                        <option value="Duration">Duration</option>
                        <option value="Calories">Calories</option>
                        <option value="Name">Name</option>
                    </select>
                </div>
            </div>

            {sortedList.length === 0 ? (
                <div className="border border-dashed border-[#1b1f2b] rounded-3xl p-16 flex flex-col items-center justify-center text-center bg-[#0a0b0f]">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-white mb-2">
                        NOTHING HERE YET
                    </h2>
                    <p className="text-gray-400 text-sm mb-6 max-w-sm">
                        Browse the library and add a lift to get today moving.
                    </p>
                    <Link
                        href="/#library"
                        className="bg-[#b5ff38] hover:bg-[#a1e62c] text-black font-bold text-sm px-6 py-3 rounded-full transition-colors shadow-md"
                    >
                        Go to workouts
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {sortedList.map((workout) => {
                        const {
                            id,
                            name,
                            title,
                            image,
                            equipment,
                            duration,
                            caloriesBurned,
                            rating,
                        } = workout;

                        return (
                            <div
                                key={id}
                                className="bg-[#111319] border border-[#1b1f2b] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 transition hover:border-[#2a3042]"
                            >
                                <div className="flex items-center gap-4 w-full sm:w-auto">
                                    <div className="w-28 h-20 rounded-xl overflow-hidden bg-gray-800 flex-shrink-0">
                                        <Image
                                            src={image || '/placeholder.png'}
                                            alt={name || title || 'Workout image'}
                                            width={500}
                                            height={500}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <h3 className="font-extrabold text-lg uppercase tracking-wide text-white">
                                            {name || title}
                                        </h3>
                                        <p className="text-xs text-gray-400 mb-2">
                                            {equipment || 'Equipment'}
                                        </p>

                                        <div className="flex items-center gap-4 text-xs text-gray-300">
                                            <span className="flex items-center gap-1">
                                                <span className="inline-block w-2 h-2 rounded-full border border-gray-400"></span>
                                                {duration || 0} min
                                            </span>
                                            <span className="flex items-center gap-1">
                                                🔥 {caloriesBurned || 0} kcal
                                            </span>
                                            {rating && (
                                                <span className="flex items-center gap-1">
                                                    ⭐ {rating}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                                    <Link href={`/workouts/${workout.id}`}>
                                        <button className="border border-[#1b1f2b] bg-[#161922] hover:bg-[#1f2430] text-gray-300 font-semibold text-xs px-5 py-2.5 rounded-full transition">
                                            View Details
                                        </button>
                                    </Link>

                                    {activeTab === "Today's Plan" && (
                                        <button
                                            onClick={() => handleMarkDone(workout)}
                                            className="bg-[#b5ff38] hover:bg-[#a1e62c] text-black font-bold text-xs px-5 py-2.5 rounded-full transition shadow-sm flex items-center gap-1.5"
                                        >
                                            <svg
                                                className="w-3.5 h-3.5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            Mark as Done
                                        </button>
                                    )}

                                    <button
                                        onClick={() => handleRemove(workout)}
                                        className="border border-[#1b1f2b] bg-[#161922] hover:bg-red-500/10 hover:border-red-500/40 text-gray-400 hover:text-red-400 p-2.5 rounded-full transition"
                                        title="Remove"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}