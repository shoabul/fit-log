'use client';

import { useContext, useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { WorkoutContext } from '@/context/WorkoutContext';
import Image from 'next/image';
import { toast } from 'react-toastify';

function MyPlanContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentTabParam = searchParams.get('tab');
    const activeTab = currentTabParam === 'saved' ? 'Saved' : "Today's Plan";

    const {
        myPlan = [],
        savedWorkouts = [],
        removeFromPlan,
        markAsDone,
        isCompleted,
        removeSavedWorkout,
    } = useContext(WorkoutContext);

    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('Duration');

    const handleTabChange = (tabName) => {
        if (tabName === "Today's Plan") {
            router.push('/my-plan?tab=plan');
        } else {
            router.push('/my-plan?tab=saved');
        }
    };

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
        toast.success(`"${workout.name}" Done`);
    };

    const handleRemove = (workout) => {
        if (activeTab === "Today's Plan") {
            removeFromPlan(workout.id);
            toast.error(`Removed "${workout.name}" from Today's Plan`);
        } else {
            removeSavedWorkout(workout.id);
            toast.error(`Removed "${workout.name}" from Saved Workouts`);
        }
    };


    const sortedList = activeList
    .filter((item) => {
        if (!searchQuery.trim()) return true;
        const query = searchQuery.toLowerCase().trim();

        const nameMatch = (item.name || item.title || '').toLowerCase().includes(query);
        const equipMatch = (item.equipment || '').toLowerCase().includes(query);
        const muscleMatch = Array.isArray(item.muscleGroups)
            ? item.muscleGroups.some((m) => m.toLowerCase().includes(query))
            : false;

        return nameMatch || equipMatch || muscleMatch;
    })
    .slice()
    .sort((a, b) => {
        if (sortBy === 'Duration') {
            return (Number(b.duration) || 0) - (Number(a.duration) || 0);
        }
        if (sortBy === 'Calories') {
            return (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0);
        }
        if (sortBy === 'Rating') {
            return (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0);
        }
        return 0;
    });

    return (
        <div className="w-full min-h-screen bg-[#0b0c0f] text-white font-sans">
            <div className="w-full mx-auto max-w-[1600px] px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-10">
                <div className="mb-6 sm:mb-8 text-center sm:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-white mb-1">
                        MY PLAN
                    </h1>
                    <p className="text-zinc-400 text-xs sm:text-sm">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <div className="bg-[#121418] border border-zinc-800/80 rounded-2xl p-4 sm:p-6 mb-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/80 gap-4 sm:gap-0 shadow-lg">
                    <div className="pt-2 sm:pt-0 sm:px-6 first:pl-0 text-center sm:text-left">
                        <span className="text-xs text-zinc-400 font-medium block mb-1 sm:mb-2">
                            Exercises
                        </span>
                        <span className="text-3xl sm:text-4xl font-extrabold text-[#adff2f]">
                            {totalExercises}
                        </span>
                    </div>
                    <div className="pt-4 sm:pt-0 sm:px-6 text-center sm:text-left">
                        <span className="text-xs text-zinc-400 font-medium block mb-1 sm:mb-2">
                            Minutes
                        </span>
                        <span className="text-3xl sm:text-4xl font-extrabold text-white">
                            {totalMinutes}
                        </span>
                    </div>
                    <div className="pt-4 sm:pt-0 sm:px-6 text-center sm:text-left">
                        <span className="text-xs text-zinc-400 font-medium block mb-1 sm:mb-2">
                            Calories
                        </span>
                        <span className="text-3xl sm:text-4xl font-extrabold text-white">
                            {totalCalories}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
                    <div className="bg-[#121418] border border-zinc-800/80 p-1 rounded-xl flex items-center justify-center sm:justify-start gap-1 w-full sm:w-auto">
                        <button
                            onClick={() => handleTabChange("Today's Plan")}
                            className={`flex-1 sm:flex-initial px-5 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                                activeTab === "Today's Plan"
                                    ? 'bg-[#1e2330] text-white border border-zinc-700/50 shadow-sm'
                                    : 'text-zinc-400 hover:text-white'
                            }`}
                        >
                            Today's Plan
                        </button>
                        <button
                            onClick={() => handleTabChange('Saved')}
                            className={`flex-1 sm:flex-initial px-5 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                                activeTab === 'Saved'
                                    ? 'bg-[#1e2330] text-white border border-zinc-700/50 shadow-sm'
                                    : 'text-zinc-400 hover:text-white'
                            }`}
                        >
                            Saved
                        </button>
                    </div>


                    <div className="flex flex-col sm:flex-row items-center gap-2">

                        <input
                            type="text"
                            placeholder="Search name or muscle..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-[#121418] border border-zinc-800/80 text-white text-xs sm:text-sm rounded-xl px-3 sm:px-4 py-2 outline-none hover:border-zinc-700 transition w-full sm:w-auto"
                        />

                        <div className="flex items-center justify-end gap-2 w-full sm:w-auto">
                            <span className="text-xs sm:text-sm text-zinc-400 font-medium">Sort By</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-[#121418] border border-zinc-800/80 text-white text-xs sm:text-sm rounded-xl px-3 sm:px-4 py-2 outline-none cursor-pointer hover:border-zinc-700 transition"
                            >
                                <option value="Duration">Duration</option>
                                <option value="Calories">Calories</option>
                                <option value="Rating">Rating</option>
                            </select>
                        </div>
                    </div>
                </div>

                {sortedList.length === 0 ? (
                    <div className="border border-dashed border-zinc-800/80 rounded-3xl p-8 sm:p-16 flex flex-col items-center justify-center text-center bg-[#121418]/40">
                        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-white mb-2">
                            NOTHING HERE YET
                        </h2>
                        <p className="text-zinc-400 text-xs sm:text-sm mb-6 max-w-sm">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link
                            href="/#library"
                            className="bg-[#adff2f] hover:bg-[#9be327] text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-colors shadow-md uppercase tracking-wider"
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
                                isLoaded,
                            } = workout;

                            return (
                                <div
                                    key={id}
                                    className="bg-[#121418] border border-zinc-800/80 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 transition hover:border-zinc-700"
                                >
                                    {/* Left Side Info */}
                                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto text-center sm:text-left">
                                        <div className="w-full sm:w-28 h-36 sm:h-20 rounded-xl overflow-hidden bg-zinc-900 flex-shrink-0 relative">
                                            <Image
                                                src={image || '/placeholder.png'}
                                                alt={name || title || 'Workout image'}
                                                fill
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <h3 className="font-extrabold text-base sm:text-lg uppercase tracking-wide text-white">
                                                {name || title}
                                            </h3>
                                            <p className="text-xs text-zinc-400 mb-2 font-medium">
                                                {equipment || 'Equipment'}
                                            </p>

                                            <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-zinc-400 font-medium">
                                                <span className="flex items-center gap-1">
                                                    <span className="inline-block w-2 h-2 rounded-full bg-zinc-600"></span>
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

                                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 w-full md:w-auto justify-end pt-3 md:pt-0 border-t md:border-t-0 border-zinc-800/60">
                                        <Link href={`/workouts/${workout.id}`} className="flex-1 sm:flex-none">
                                            <button className="w-full border border-zinc-800 bg-[#161922] hover:bg-zinc-800 text-zinc-300 font-semibold text-xs px-4 py-2.5 rounded-full transition">
                                                View Details
                                            </button>
                                        </Link>

                                        {activeTab === "Today's Plan" && (
                                            <button
                                                onClick={() => handleMarkDone(workout)}
                                                disabled={isCompleted(workout.id)}
                                                className={`flex-1 sm:flex-none font-bold text-xs px-4 py-2.5 rounded-full transition shadow-sm flex items-center justify-center gap-1.5 ${
                                                    isCompleted(workout.id)
                                                        ? 'bg-zinc-800/80 text-zinc-500 opacity-70 cursor-not-allowed'
                                                        : 'bg-[#adff2f] hover:bg-[#9be327] text-black cursor-pointer'
                                                }`}
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
                                                {isCompleted(workout.id) ? 'Completed' : 'Mark as Done'}
                                            </button>
                                        )}

                                        <button
                                            onClick={() => handleRemove(workout)}
                                            className="border border-zinc-800 bg-[#161922] hover:bg-red-500/10 hover:border-red-500/40 text-zinc-400 hover:text-red-400 p-2.5 rounded-full transition"
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
        </div>
    );
}

export default function MyPlanPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#0b0c0f] text-white p-6 flex items-center justify-center">Loading...</div>}>
            <MyPlanContent />
        </Suspense>
    );
}