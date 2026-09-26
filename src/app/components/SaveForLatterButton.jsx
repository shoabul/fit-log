'use client';
import React, { useContext, useState } from 'react';
import { WorkoutContext } from '@/context/WorkoutContext';
import { toast } from 'react-toastify';

const SaveForLatterButton = ({ workoutData }) => {
    const { saveForLater } = useContext(WorkoutContext) || {};
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = () => {
        if (!workoutData) {
            console.error("Workout data is missing in SaveForLatterButton!");
            toast.error("Workout data is missing!");
            return;
        }
        if (saveForLater) {
            saveForLater(workoutData);
            setIsSaved(true);
            console.log("Workout saved successfully:", workoutData);
            toast.success("Workout saved for later!");
        } else {
            console.error("saveForLater function is not available in Context.");
            toast.error("Save feature is not available.");
        }
    };

    return (
        <div>
            <button 
                onClick={handleSave}
                type="button"
                disabled={isSaved}
                className={`flex items-center gap-2.5 text-sm font-semibold px-6 py-3 rounded-xl transition-all border ${
                    isSaved
                        ? 'bg-zinc-900 border-zinc-800 text-zinc-500 opacity-75 shadow-none'
                        : 'bg-[#121316] hover:bg-zinc-800 text-zinc-200 border-zinc-800 active:scale-95 cursor-pointer shadow-sm'
                }`}
            >
                <svg
                    className="w-4 h-4"
                    fill={isSaved ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    {isSaved ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                    )}
                </svg>
                {isSaved ? "Saved for later" : "Save for later"}
            </button>
        </div>
    );
};

export default SaveForLatterButton;