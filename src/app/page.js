import Hero from "./components/Hero";
import WorkoutDataCard from "./components/WorkoutDataCard";
import WorkoutFilters from "./components/WorkoutFilters";
import { getWorkoutsData } from "./lib/fetchApi";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const search = params?.search || '';
  const sortBy = params?.sortBy || 'default';

  const rawWorkoutData = await getWorkoutsData();

  let filteredData = (rawWorkoutData || []).filter((item) => {
    if (!search.trim()) return true;
    const query = search.toLowerCase().trim();

    const nameMatch = (item.name || '').toLowerCase().includes(query);
    const equipMatch = (item.equipment || '').toLowerCase().includes(query);
    const muscleMatch = Array.isArray(item.muscleGroups)
      ? item.muscleGroups.some((m) => m.toLowerCase().includes(query))
      : false;

    return nameMatch || equipMatch || muscleMatch;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === 'duration') {
      return (Number(b.duration) || 0) - (Number(a.duration) || 0);
    }
    if (sortBy === 'calories') {
      return (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0);
    }
    if (sortBy === 'rating') {
      return (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#0b0c0f]">
      <Hero />

      <section id="library" className="w-full mx-auto max-w-[1600px] px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 text-white font-sans scroll-mt-20">
        <div className="mb-6 sm:mb-8 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-white">
            THE LIBRARY
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base mt-1">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <WorkoutFilters />

        {sortedData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {sortedData.map((workout) => (
              <WorkoutDataCard key={workout.id} workoutData={workout} />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-zinc-800 rounded-2xl p-12 text-center bg-[#121418]/40">
            <p className="text-zinc-400 text-sm">
              No workouts found matching `${search}`
            </p>
          </div>
        )}
      </section>
    </div>
  );
}