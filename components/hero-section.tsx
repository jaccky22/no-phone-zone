"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Colorful background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-3xl float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-500 opacity-20 blur-3xl float-delay-1"></div>
        <div className="absolute top-40 right-1/4 w-48 h-48 rounded-full bg-pink-500 opacity-20 blur-3xl float-delay-2"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="gradient-text">Reclaim Your Time</span> <span className="text-foreground">and Attention</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              Break free from phone addiction with our interactive tools, AI-powered advice, and supportive community.
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
            <Link
              href="#challenge"
              className={`inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 gradient-bg-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Take the Challenge
            </Link>
            <Link
              href="#quiz"
              className={`inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium shadow-lg transition-all duration-300 bg-white text-primary hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '400ms' }}
            >
              Try the Quiz
            </Link>
          </div>
          
          {/* Colorful feature highlights */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            {[
              { title: "AI Advisor", color: "gradient-bg-1", delay: "600ms" },
              { title: "Phone-Free Challenge", color: "gradient-bg-2", delay: "800ms" },
              { title: "Interactive Quiz", color: "gradient-bg-3", delay: "1000ms" }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl shadow-lg transition-all duration-500 ${feature.color} text-white`}
                style={{ transitionDelay: feature.delay }}
              >
                <h3 className="font-bold text-lg">{feature.title}</h3>
              </div>
            ))}
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">2,500+</span> people taking the challenge
            </p>
          </div>
        </div>
        {/* Removed phone mockup with vertical lines */}
      </div>
    </section>
  );
}
