import React from 'react';
import WorkoutDataCard from '../components/WorkoutDataCard';
import {getWorkoutsData} from "../lib/fetchApi";


const workoutsPage = async () => {
    const workoutData = await getWorkoutsData();
    return (
        <div className="w-full px-20 text-white min-h-screen py-12 font-sans mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {workoutData.map((workout) => (
                <WorkoutDataCard key={workout.id} workoutData={workout} />
            ))}
        </div>
    );
};

export default workoutsPage;