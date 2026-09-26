'use client';
import { createContext, useState, useEffect } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [myPlan, setMyPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  const isSaved = (id) => {
    if (!id) return false;
    return savedWorkouts.some((item) => String(item.id) === String(id));
  };

  const isInPlan = (id) => {
    if (!id) return false;
    return myPlan.some((item) => String(item.id) === String(id));
  };

  const addToPlan = (workout) => {
    if (isInPlan(workout.id)) return;
    setMyPlan((prev) => [...prev, workout]);
  };

  const removeFromPlan = (id) => {
    setMyPlan((prev) => prev.filter((item) => String(item.id) !== String(id)));
  };

  const markAsDone = (workout) => {
    setCompletedWorkouts((prev) => {
      const exists = prev.some((item) => String(item.id) === String(workout.id));
      if (exists) return prev;
      return [...prev, workout];
    });
    // removeFromPlan(workout.id);
  };

  const isCompleted = (id) => {
  if (!id) return false;
  return completedWorkouts.some((item) => String(item.id) === String(id));
};

  const saveForLater = (workout) => {
    if (isSaved(workout.id)) return;
    setSavedWorkouts((prev) => [...prev, workout]);
  };

  const removeSavedWorkout = (id) => {
    setSavedWorkouts((prev) => prev.filter((item) => String(item.id) !== String(id)));
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
        isCompleted,
        saveForLater,
        removeSavedWorkout,
        isSaved,
        isInPlan,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};