'use client';
import { createContext, useState, useEffect } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [myPlan, setMyPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [completedWorkouts, setCompletedWorkouts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem('fit_log_myPlan');
      const storedSaved = localStorage.getItem('fit_log_savedWorkouts');
      const storedCompleted = localStorage.getItem('fit_log_completedWorkouts');

      if (storedPlan) setMyPlan(JSON.parse(storedPlan));
      if (storedSaved) setSavedWorkouts(JSON.parse(storedSaved));
      if (storedCompleted) setCompletedWorkouts(JSON.parse(storedCompleted));
    } catch (error) {
      console.error('Failed to load workouts from localStorage:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem('fit_log_myPlan', JSON.stringify(myPlan));
  }, [myPlan, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem('fit_log_savedWorkouts', JSON.stringify(savedWorkouts));
  }, [savedWorkouts, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem('fit_log_completedWorkouts', JSON.stringify(completedWorkouts));
  }, [completedWorkouts, isLoaded]);

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
        isLoaded,
      }}
    >
      
      {!isLoaded ? (
        <div className="w-full min-h-screen bg-[#0b0c0f] text-white flex items-center justify-center">
          <div className="animate-pulse text-zinc-400 text-sm">Loading...</div>
        </div>
      ) : (
        children
      )}
    </WorkoutContext.Provider>
  );
};