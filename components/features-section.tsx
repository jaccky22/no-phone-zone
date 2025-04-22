"use client";

import { useEffect, useState } from 'react';

export function FeaturesSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="features" className="w-full py-12 md:py-24 relative overflow-hidden">
      {/* Colorful background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950 opacity-80"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-1/4 w-48 h-48 rounded-full bg-pink-300 opacity-10 blur-3xl float-delay-1"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 rounded-full bg-cyan-300 opacity-10 blur-3xl float-delay-2"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="gradient-text">Features to Help You Disconnect</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Our tools are designed to help you build healthier digital habits and reduce phone dependency.
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Interactive Quiz",
              description: "Discover your phone addiction level with our 10-question assessment.",
              icon: (
                <svg
                  className="h-10 w-10 text-white"
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
                  <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
              ),
              gradient: "gradient-bg-1",
              delay: "100ms"
            },
            {
              title: "AI Digital Wellbeing Advisor",
              description: "Get personalized advice on reducing phone usage and building healthier habits.",
              icon: (
                <svg
                  className="h-10 w-10 text-white"
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
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              ),
              gradient: "gradient-bg-2",
              delay: "300ms"
            },
            {
              title: "No-Phone Challenge",
              description: "Join thousands worldwide in taking concrete steps to reduce phone dependency.",
              icon: (
                <svg
                  className="h-10 w-10 text-white"
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
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
              ),
              gradient: "gradient-bg-3",
              delay: "500ms"
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center space-y-4 rounded-xl shadow-lg p-6 ${feature.gradient} text-white transform transition-all duration-500 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} feature-delay-${feature.delay.replace('ms', '')}`}
            >
              <div className="p-3 rounded-full bg-white/20">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
