"use client";

import { useState, useEffect } from 'react';
import { ChallengeTracker } from './challenge-tracker';
import { ChallengeForm } from './challenge-form';
import { useSupabase } from '@/context/supabase-provider';

export function ChallengeSection() {
  const [showForm, setShowForm] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pendingTier, setPendingTier] = useState<string | null>(null);
  const { session } = useSupabase();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const storedTier = window.localStorage.getItem('pending_tier');
    if (session && storedTier) {
      setSelectedTier(storedTier);
      setShowForm(true);
      window.localStorage.removeItem('pending_tier');
      setTimeout(() => {
        const formElement = document.getElementById('challenge-form');
        if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [session]);

  const handleStartChallenge = (tier: string) => {
    if (!session) {
      window.localStorage.setItem('pending_tier', tier.toLowerCase());
      alert('Please log in to start the challenge.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setSelectedTier(tier.toLowerCase());
    setShowForm(true);
    
    // Scroll to the form
    setTimeout(() => {
      const formElement = document.getElementById('challenge-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section id="challenge" className="w-full py-12 md:py-24 relative overflow-hidden">
      {/* Colorful background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 opacity-80"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-orange-300 opacity-10 blur-3xl float-delay-3"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-amber-300 opacity-10 blur-3xl float-delay-2"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-1.5 text-sm font-medium text-white shadow-md transform transition-all duration-300 hover:scale-105">
              Join Today
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="gradient-text-orange">Take the No-Phone</span><br/>
              <span>Challenge</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Commit to reducing your phone usage and join a global community of people reclaiming their time and attention.
            </p>
          </div>
        </div>
        
        {/* Live challenge tracker */}
        <div className="mt-6 text-center">
          <ChallengeTracker />
        </div>
        
        <div className={`mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            {
              id: "beginner",
              title: "Beginner",
              description: "Reduce phone usage by 30 minutes each day",
              features: ["Daily reminders", "Progress tracking", "Basic tips"],
              cta: "Start Beginner Challenge",
              color: "blue"
            },
            {
              id: "intermediate",
              title: "Intermediate",
              description: "No phone during meals and 1 hour before bed",
              features: ["Meal-time reminders", "Sleep improvement tracking", "Personalized advice"],
              cta: "Start Intermediate Challenge",
              highlighted: true,
              color: "orange"
            },
            {
              id: "advanced",
              title: "Advanced",
              description: "One full phone-free day per week",
              features: ["Weekly planning tools", "Alternative activity suggestions", "Community support"],
              cta: "Start Advanced Challenge",
              color: "purple"
            }
          ].map((tier, index) => (
            <div 
              key={tier.id} 
              className={`flex flex-col justify-between space-y-4 rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${
                tier.highlighted 
                  ? "bg-gradient-to-br from-amber-500 to-orange-500 text-white" 
                  : tier.color === "blue" 
                    ? "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-800" 
                    : "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-800"
              } transition-delay-${index * 150}`}
            >
              <div>
                <h3 className={`text-2xl font-bold ${tier.highlighted ? "text-white" : tier.color === "blue" ? "text-blue-600 dark:text-blue-400" : "text-purple-600 dark:text-purple-400"}`}>{tier.title}</h3>
                <p className={`mt-2 ${tier.highlighted ? "text-white/90" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 ${tier.highlighted ? "bg-white/20" : tier.color === "blue" ? "bg-blue-100 dark:bg-blue-900/30" : "bg-purple-100 dark:bg-purple-900/30"}`}>
                        <svg
                          className={`h-4 w-4 ${tier.highlighted ? "text-white" : tier.color === "blue" ? "text-blue-500" : "text-purple-500"}`}
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className={`${tier.highlighted ? "text-white/90" : ""}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleStartChallenge(tier.id)}
                className={`inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium shadow-lg transition-all duration-300 hover:scale-105 ${
                  tier.highlighted
                    ? "bg-white text-orange-500 hover:bg-white/90"
                    : tier.color === "blue"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:shadow-blue-200 dark:hover:shadow-blue-900/30"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-purple-200 dark:hover:shadow-purple-900/30"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
        
        {/* Challenge signup form */}
        {showForm && (
          <div id="challenge-form" className="mt-16 max-w-2xl mx-auto">
            <ChallengeForm />
          </div>
        )}
      </div>
    </section>
  );
}
