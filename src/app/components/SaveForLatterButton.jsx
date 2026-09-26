'use client';
import React, { useContext } from 'react';
import { WorkoutContext } from '@/context/WorkoutContext';

const SaveForLatterButton = ({ workoutData }) => {
    const { saveForLater } = useContext(WorkoutContext) || {};

    const handleSave = () => {
        if (!workoutData) {
            console.error("Workout data is missing in SaveForLatterButton!");
            return;
        }
        if (saveForLater) {
            saveForLater(workoutData);
            console.log("Workout saved successfully:", workoutData);
        } else {
            console.error("saveForLater function is not available in Context.");
        }
    };

    return (
        <div>
            <button 
                onClick={handleSave}
                type="button"
                className="flex items-center gap-2.5 bg-[#121316] hover:bg-zinc-800 text-zinc-200 border border-zinc-800 text-sm font-semibold px-6 py-3 rounded-xl transition-all active:scale-95"
            >
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                </svg>
                Save for later
            </button>
        </div>
    );
};

export default SaveForLatterButton;