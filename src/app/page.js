import Hero from "./components/Hero";
import WorkoutDataCard from "./components/WorkoutDataCard";

export const getWorkoutsData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workouts data");
  }

  const data = await res.json();
  return data;
};

export default async function Home() {
  const workoutData = await getWorkoutsData();
  // console.log(workoutData);
  return (
    <div>
      <Hero />
      <section className="w-full px-20  text-white min-h-screen py-12  font-sans">
        <div className=" mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
            THE LIBRARY
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-1">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className=" mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workoutData.map((workout) => (
            <WorkoutDataCard key={workout.id} workoutData={workout} />
          ))}
        </div>
      </section>
    </div>
  );
}