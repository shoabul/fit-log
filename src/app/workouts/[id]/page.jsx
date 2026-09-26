import React from 'react';
import Image from 'next/image';
import { getWorkoutsData } from "../../lib/fetchApi";
import TodaysPlanButton from '@/app/components/TodaysPlanButton';
import SaveForLatterButton from '@/app/components/SaveForLatterButton';

const WorkoutDetailPage = async ({ params }) => {
  const resolvedParams = await params;

  const fetchedData = await getWorkoutsData(resolvedParams.id);

  const workoutData = Array.isArray(fetchedData)
    ? fetchedData.find((item) => String(item.id) === String(resolvedParams.id))
    : fetchedData;

  if (!workoutData) {
    return (
      <div className="min-h-screen bg-[#0e1117] text-white flex items-center justify-center">
        <p className="text-zinc-400">Workout details not found!</p>
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
    <div className="w-full  flex-1 flex items-center justify-center p-6 lg:p-10 text-white">
      <div className="w-full px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        <div className="relative w-auto aspect-square rounded-3xl overflow-hidden bg-[#16171a] border border-zinc-800/80 shadow-2xl">
          {image && (
            <Image
              src={image}
              alt={name || "Workout image"}
              fill
              priority
              className="object-cover"
            />
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wide text-white">
              {name}
            </h1>
            {description && (
              <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {muscleGroups.length > 0 && (
            <div className="flex flex-wrap gap-2.5">
              {muscleGroups.map((group, index) => (
                <span
                  key={index}
                  className="px-3.5 py-1 bg-[#bbf246] text-black text-xs font-extrabold rounded-full uppercase tracking-wider"
                >
                  {group}
                </span>
              ))}
            </div>
          )}

          <div className="bg-[#121316] rounded-2xl border border-zinc-800/80 divide-y divide-zinc-800/60 overflow-hidden text-sm">
            {equipment && (
              <div className="flex justify-between items-center px-6 py-3.5">
                <span className="text-zinc-400 uppercase text-xs tracking-wider font-bold">
                  Equipment
                </span>
                <span className="text-zinc-200 font-semibold">{equipment}</span>
              </div>
            )}
            {difficulty && (
              <div className="flex justify-between items-center px-6 py-3.5">
                <span className="text-zinc-400 uppercase text-xs tracking-wider font-bold">
                  Difficulty
                </span>
                <span className="text-zinc-200 font-semibold">{difficulty}</span>
              </div>
            )}
            {sets && (
              <div className="flex justify-between items-center px-6 py-3.5">
                <span className="text-zinc-400 uppercase text-xs tracking-wider font-bold">
                  Sets
                </span>
                <span className="text-zinc-200 font-semibold">{sets}</span>
              </div>
            )}
            {reps && (
              <div className="flex justify-between items-center px-6 py-3.5">
                <span className="text-zinc-400 uppercase text-xs tracking-wider font-bold">
                  Reps
                </span>
                <span className="text-zinc-200 font-semibold">{reps}</span>
              </div>
            )}
            {duration && (
              <div className="flex justify-between items-center px-6 py-3.5">
                <span className="text-zinc-400 uppercase text-xs tracking-wider font-bold">
                  Duration
                </span>
                <span className="text-zinc-200 font-semibold">{duration}</span>
              </div>
            )}
            {caloriesBurned && (
              <div className="flex justify-between items-center px-6 py-3.5">
                <span className="text-zinc-400 uppercase text-xs tracking-wider font-bold">
                  Calories
                </span>
                <span className="text-zinc-200 font-semibold">{caloriesBurned}</span>
              </div>
            )}
            {rating && (
              <div className="flex justify-between items-center px-6 py-3.5">
                <span className="text-zinc-400 uppercase text-xs tracking-wider font-bold">
                  Rating
                </span>
                <span className="text-zinc-200 font-semibold">{rating}</span>
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

          <div className="flex flex-wrap gap-4 pt-3">
            <TodaysPlanButton workoutData={workoutData} />
            <SaveForLatterButton workoutData={workoutData} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailPage;