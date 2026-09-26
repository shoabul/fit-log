'use client';
import { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [myPlan, setMyPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  const addToPlan = (workout) => {
    setMyPlan((prev) => {
      if (prev.some((item) => item.id === workout.id)) return prev;
      return [...prev, workout];
    });
  };

  const saveForLater = (workout) => {
    setSavedWorkouts((prev) => {
      if (prev.some((item) => item.id === workout.id)) return prev;
      return [...prev, workout];
    });
  };

  return (
    <WorkoutContext.Provider value={{ myPlan, savedWorkouts, addToPlan, saveForLater }}>
      {children}
    </WorkoutContext.Provider>
  );
};