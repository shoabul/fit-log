'use client';
import React, { useContext, useState } from 'react';
import { WorkoutContext } from '@/context/WorkoutContext';
import { toast } from 'react-toastify';

const TodaysPlanButton = ({ workoutData }) => {

  const { addToPlan, isInPlan } = useContext(WorkoutContext) || {};

  const isAlreadyInPlan = isInPlan ? isInPlan(workoutData?.id) : false;

  const [isAdded, setIsAdded] = useState(false);

  const isDisabled = isAlreadyInPlan || isAdded;

  const handleMyPlan = () => {
    if (!workoutData) {
      toast.error("Workout data is missing!");
      return;
    }

    if (isAlreadyInPlan) {
      toast.info("Already added to today's plan");
      return;
    }

    if (addToPlan) {
      addToPlan(workoutData);
      setIsAdded(true);
      toast.success("Added to today's plan");
    } else {
      toast.error("Plan feature is not available.");
    }
  };

  return (
    <div>
      <button 
        onClick={handleMyPlan}
        type="button"
        disabled={isDisabled}
        className={`flex items-center gap-2.5 font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md  ${
          isDisabled
            ? 'bg-[#d8fa90] text-gray-700 opacity-70'
            : 'bg-[#bbf246] hover:bg-[#a3e635] active:scale-95 text-black cursor-pointer'
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          {isDisabled ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          ) : (
            <rect x="3" y="3" width="18" height="18" rx="2" />
          )}
        </svg>
        {isDisabled ? "Added to today's plan" : "Add to today's plan"}
      </button>
    </div>
  );
};

export default TodaysPlanButton;