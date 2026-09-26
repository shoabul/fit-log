'use client';
import { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [myPlan, setMyPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  const addToPlan = (workout) => {
    setMyPlan((prev) => {
      if (prev.some((item) => item.id === workout.id)) return prev;
      return [...prev, workout];
    });
  };

  const removeFromPlan = (id) => {
    setMyPlan((prev) => prev.filter((item) => item.id !== id));
  };

  const markAsDone = (workout) => {
    setCompletedWorkouts((prev) => [...prev, workout]);
    removeFromPlan(workout.id);
  };

  const saveForLater = (workout) => {
    setSavedWorkouts((prev) => {
      if (prev.some((item) => item.id === workout.id)) return prev;
      return [...prev, workout];
    });
  };

  const removeSavedWorkout = (id) => {
    setSavedWorkouts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WorkoutContext.Provider
      value={{
        myPlan,
        savedWorkouts,
        completedWorkouts,
        addToPlan,
        removeFromPlan,
        markAsDone,
        saveForLater,
        removeSavedWorkout,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};