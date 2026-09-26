import React from 'react';
import Image from 'next/image';
import { getWorkoutsData } from "../../lib/fetchApi";
import TodaysPlanButton from '@/app/components/TodaysPlanButton';
import SaveForLatterButton from '@/app/components/SaveForLatterButton';

const WorkoutDetailPage = async ({ params }) => {
  const resolvedParams = await params;
  const targetId = resolvedParams?.id;

  const response = await getWorkoutsData();


  let allWorkouts = [];
  if (Array.isArray(response)) {
    allWorkouts = response;
  } else if (response && Array.isArray(response.data)) {
    allWorkouts = response.data;
  }


  const workoutData = allWorkouts.find(
    (item) => String(item.id) === String(targetId)
  );

  if (!workoutData) {
    return (
      <div className="min-h-screen bg-[#0b0c0f] text-white flex flex-col items-center justify-center p-4">
        <div className="border border-red-500/20 bg-red-950/10 rounded-2xl p-8 text-center max-w-md">
          <p className="text-red-400 font-semibold text-base mb-1">Workout details not found!</p>
          <p className="text-zinc-500 text-xs">
            Unable to fetch data for this workout or the ID is invalid.
          </p>
        </div>
      </div>
    );
  }

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
    <div className="w-full min-h-screen bg-[#0b0c0f] text-white py-8 sm:py-12">
      <div className="w-full mx-auto max-w-[1600px] px-4 sm:px-8 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

          <div className="relative w-full aspect-4/3 sm:aspect-square rounded-3xl overflow-hidden bg-[#121418] border border-zinc-800/80 shadow-2xl">
            {image && (
              <Image
                src={image}
                alt={name || "Workout image"}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wide text-white leading-tight">
                {name}
              </h1>
              {description && (
                <p className="mt-3 text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
                  {description}
                </p>
              )}
            </div>

            {muscleGroups.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {muscleGroups.map((group, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#adff2f] text-black text-[10px] sm:text-xs font-extrabold rounded-full uppercase tracking-wider"
                  >
                    {group}
                  </span>
                ))}
              </div>
            )}

            <div className="bg-[#121418] rounded-2xl border border-zinc-800/80 divide-y divide-zinc-800/60 overflow-hidden text-xs sm:text-sm shadow-md">
              {equipment && (
                <div className="flex justify-between items-center px-5 py-3 sm:px-6 sm:py-3.5">
                  <span className="text-zinc-400 uppercase text-[10px] sm:text-xs tracking-wider font-bold">
                    Equipment
                  </span>
                  <span className="text-zinc-200 font-semibold">{equipment}</span>
                </div>
              )}
              {difficulty && (
                <div className="flex justify-between items-center px-5 py-3 sm:px-6 sm:py-3.5">
                  <span className="text-zinc-400 uppercase text-[10px] sm:text-xs tracking-wider font-bold">
                    Difficulty
                  </span>
                  <span className="text-zinc-200 font-semibold">{difficulty}</span>
                </div>
              )}
              {sets && (
                <div className="flex justify-between items-center px-5 py-3 sm:px-6 sm:py-3.5">
                  <span className="text-zinc-400 uppercase text-[10px] sm:text-xs tracking-wider font-bold">
                    Sets
                  </span>
                  <span className="text-zinc-200 font-semibold">{sets}</span>
                </div>
              )}
              {reps && (
                <div className="flex justify-between items-center px-5 py-3 sm:px-6 sm:py-3.5">
                  <span className="text-zinc-400 uppercase text-[10px] sm:text-xs tracking-wider font-bold">
                    Reps
                  </span>
                  <span className="text-zinc-200 font-semibold">{reps}</span>
                </div>
              )}
              {duration && (
                <div className="flex justify-between items-center px-5 py-3 sm:px-6 sm:py-3.5">
                  <span className="text-zinc-400 uppercase text-[10px] sm:text-xs tracking-wider font-bold">
                    Duration
                  </span>
                  <span className="text-zinc-200 font-semibold">{duration} min</span>
                </div>
              )}
              {caloriesBurned && (
                <div className="flex justify-between items-center px-5 py-3 sm:px-6 sm:py-3.5">
                  <span className="text-zinc-400 uppercase text-[10px] sm:text-xs tracking-wider font-bold">
                    Calories
                  </span>
                  <span className="text-zinc-200 font-semibold">{caloriesBurned} kcal</span>
                </div>
              )}
              {rating && (
                <div className="flex justify-between items-center px-5 py-3 sm:px-6 sm:py-3.5">
                  <span className="text-zinc-400 uppercase text-[10px] sm:text-xs tracking-wider font-bold">
                    Rating
                  </span>
                  <span className="text-zinc-200 font-semibold">⭐ {rating}</span>
                </div>
              )}
            </div>

            {instructions.length > 0 && (
              <div className="space-y-3 pt-1">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Instructions
                </h2>
                <ol className="space-y-2 text-xs sm:text-sm text-zinc-400">
                  {instructions.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="font-semibold text-zinc-500 shrink-0">
                        {idx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 pt-3">
              <TodaysPlanButton workoutData={workoutData} />
              <SaveForLatterButton workoutData={workoutData} />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkoutDetailPage;