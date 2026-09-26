'use client';
import React, { useContext } from 'react';
import { WorkoutContext } from '@/context/WorkoutContext';

const TodaysPlanButton = ({ workoutData }) => {
  const { addToPlan } = useContext(WorkoutContext);

  const handleMyPlan = () => {
    if (workoutData) {
      addToPlan(workoutData);
    }
  };
    return (
        <div>
            <button 
                onClick={handleMyPlan}
                className="flex items-center gap-2.5 bg-[#bbf246] hover:bg-[#a3e635] text-black font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md active:scale-95"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
              </svg>
              Add to today's plan
            </button>
        </div>
    );
};

export default TodaysPlanButton;