"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export function ReclaimTimeSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [timeReclaimed, setTimeReclaimed] = useState(0); // in minutes
  const [goalTime, setGoalTime] = useState(60); // default 60 minutes
  const [customGoal, setCustomGoal] = useState('');
  const [showCustomGoal, setShowCustomGoal] = useState(false);
  const [activities, setActivities] = useState<{id: number, name: string, minutes: number, completed: boolean}[]>([
    { id: 1, name: 'Read a book', minutes: 30, completed: false },
    { id: 2, name: 'Go for a walk', minutes: 45, completed: false },
    { id: 3, name: 'Meditate', minutes: 15, completed: false },
    { id: 4, name: 'Call a friend', minutes: 20, completed: false }
  ]);
  
  useEffect(() => {
    setIsLoaded(true);
    // Load saved data from localStorage if available
    const savedData = localStorage.getItem('reclaimTimeData');
    if (savedData) {
      const data = JSON.parse(savedData);
      setTimeReclaimed(data.timeReclaimed || 0);
      setGoalTime(data.goalTime || 60);
      if (data.activities) setActivities(data.activities);
    }
  }, []);
  
  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('reclaimTimeData', JSON.stringify({
        timeReclaimed,
        goalTime,
        activities
      }));
    }
  }, [timeReclaimed, goalTime, activities, isLoaded]);
  
  const handleActivityToggle = (id: number) => {
    const updatedActivities = activities.map(activity => {
      if (activity.id === id) {
        // If toggling from incomplete to complete, add minutes to reclaimed time
        if (!activity.completed) {
          setTimeReclaimed(prev => prev + activity.minutes);
        } else {
          // If toggling from complete to incomplete, subtract minutes
          setTimeReclaimed(prev => Math.max(0, prev - activity.minutes));
        }
        return { ...activity, completed: !activity.completed };
      }
      return activity;
    });
    setActivities(updatedActivities);
    
    // Save to Supabase (mock implementation)
    saveProgress(updatedActivities, timeReclaimed).catch(console.error);
  };
  
  const handleAddActivity = () => {
    if (customGoal.trim()) {
      const newActivity = {
        id: Date.now(),
        name: customGoal,
        minutes: 30, // Default 30 minutes
        completed: false
      };
      setActivities([...activities, newActivity]);
      setCustomGoal('');
      setShowCustomGoal(false);
    }
  };
  
  const handleGoalChange = (newGoal: number) => {
    setGoalTime(newGoal);
  };
  
  const saveProgress = async (currentActivities: any[], currentTime: number) => {
    try {
      // In a real app, we would save to Supabase here
      // For now, we'll just log to console
      console.log('Saving progress:', { activities: currentActivities, timeReclaimed: currentTime });
      
      // Mock Supabase call
      /*
      await supabase
        .from('time_reclaimed')
        .upsert({
          user_id: 'anonymous', // In a real app, use authenticated user ID
          time_reclaimed: currentTime,
          activities: currentActivities,
          last_updated: new Date().toISOString()
        });
      */
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };
  
  // Calculate progress percentage
  const progressPercentage = Math.min(100, Math.round((timeReclaimed / goalTime) * 100));
  
  return (
    <section id="reclaim-time" className="w-full py-12 md:py-24 relative overflow-hidden">
      {/* Colorful background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 opacity-80"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-1/4 w-64 h-64 rounded-full bg-green-300 opacity-10 blur-3xl float-delay-2"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-emerald-300 opacity-10 blur-3xl float"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="gradient-text">Reclaim Your Time</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Track your progress as you replace phone time with meaningful activities.
            </p>
          </div>
        </div>
        
        <div className={`mx-auto max-w-3xl mt-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-xl shadow-lg bg-white dark:bg-gray-800 overflow-hidden">
            {/* Time reclaimed progress tracker */}
            <div className="p-6 border-b">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <h3 className="text-xl font-bold mb-2 md:mb-0">Time Reclaimed: <span className="text-green-600 dark:text-green-400">{timeReclaimed} minutes</span></h3>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Goal:</span>
                  <select 
                    value={goalTime}
                    onChange={(e) => handleGoalChange(parseInt(e.target.value))}
                    className="h-9 rounded-md border border-green-200 dark:border-green-800 bg-white dark:bg-gray-800 px-3 py-1 text-sm shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:border-transparent"
                    aria-label="Select time goal"
                    title="Select time goal"
                  >
                    <option value={30}>30 minutes</option>
                    <option value={60}>1 hour</option>
                    <option value={120}>2 hours</option>
                    <option value={180}>3 hours</option>
                    <option value={240}>4 hours</option>
                  </select>
                </div>
              </div>
              
              <div className="w-full h-4 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000 ease-out progress-width-${Math.round(progressPercentage / 10) * 10}`}
                ></div>
              </div>
              
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>0 minutes</span>
                <span>{goalTime} minutes</span>
              </div>
            </div>
            
            {/* Activities list */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Activities</h3>
                <button 
                  onClick={() => setShowCustomGoal(true)}
                  className="text-sm text-green-600 dark:text-green-400 hover:underline focus:outline-none"
                >
                  + Add Custom Activity
                </button>
              </div>
              
              {showCustomGoal && (
                <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg animate-fadeIn">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={customGoal}
                      onChange={(e) => setCustomGoal(e.target.value)}
                      placeholder="Enter a new activity..."
                      className="flex-1 h-10 rounded-md border border-green-200 dark:border-green-800 bg-white dark:bg-gray-800 px-3 py-2 text-sm shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:border-transparent"
                    />
                    <button
                      onClick={handleAddActivity}
                      className="h-10 px-4 rounded-md bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => setShowCustomGoal(false)}
                      className="h-10 px-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
              
              <ul className="space-y-3">
                {activities.map((activity, index) => (
                  <li 
                    key={activity.id} 
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      activity.completed 
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleActivityToggle(activity.id)}
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            activity.completed 
                              ? 'border-green-500 bg-green-500' 
                              : 'border-gray-300 dark:border-gray-600'
                          }`}
                        >
                          {activity.completed && (
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>
                        <span className={`font-medium ${activity.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
                          {activity.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">{activity.minutes} min</span>
                    </div>
                  </li>
                ))}
              </ul>
              
              {activities.length === 0 && (
                <div className="text-center py-6 text-muted-foreground">
                  <p>No activities yet. Add some to start tracking your progress!</p>
                </div>
              )}
            </div>
            
            {/* Motivational message */}
            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-t border-green-100 dark:border-green-800">
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-full bg-green-100 dark:bg-green-800">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-green-700 dark:text-green-300">Keep Going!</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Every minute you spend away from your phone is a minute invested in your well-being and real-life experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
