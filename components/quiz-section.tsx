"use client";

import { useState, useEffect } from 'react';

export function QuizSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const questions = [
    { question: "How often do you check your phone without a specific purpose?", options: ["Rarely - only when I need to use it", "Occasionally - a few times a day", "Frequently - every hour or so", "Constantly - every few minutes"] },
    { question: "Do you feel anxious when your phone is not within reach?", options: ["Not at all", "Slightly anxious", "Moderately anxious", "Very anxious"] },
    { question: "How often do you use your phone during meals?", options: ["Never", "Rarely", "Sometimes", "Almost always"] },
    { question: "How much time do you spend on your phone daily?", options: ["Less than 1 hour", "1-3 hours", "3-5 hours", "More than 5 hours"] },
    { question: "Do you check your phone first thing in the morning?", options: ["Never", "Sometimes", "Often", "Always"] },
    { question: "Do you use your phone right before going to sleep?", options: ["Never", "Sometimes", "Often", "Always"] },
    { question: "How often do you disable notifications to avoid distractions?", options: ["Never", "Rarely", "Sometimes", "Always"] },
    { question: "Do you feel the need to constantly check social media?", options: ["Not at all", "A little", "Moderately", "Extremely"] },
    { question: "How often do you find yourself using your phone while walking or commuting?", options: ["Never", "Rarely", "Sometimes", "Almost always"] },
    { question: "Do you feel anxious when you haven't checked your phone for a few minutes?", options: ["Not at all", "Slightly anxious", "Moderately anxious", "Very anxious"] }
  ];

  const completionPercentage = Math.round((answers.length / questions.length) * 100);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = answerIndex;
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return answers.reduce((total, answer) => total + answer, 0);
  };

  const getResultMessage = () => {
    const score = calculateScore();
    const maxScore = questions.length * 3; // Maximum possible score
    const percentage = (score / maxScore) * 100;

    if (percentage < 25) {
      return "Healthy Relationship: You have a balanced relationship with your phone.";
    } else if (percentage < 50) {
      return "Mild Dependency: You show some signs of phone dependency, but it's manageable.";
    } else if (percentage < 75) {
      return "Moderate Addiction: Your phone usage is affecting your daily life.";
    } else {
      return "Severe Addiction: You may need to take serious steps to reduce your phone usage.";
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setShowResults(false);
    setAnswers([]);
  };

  return (
    <section id="quiz" className="w-full py-12 md:py-24 relative overflow-hidden">
      {/* Colorful background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-pink-50 dark:from-indigo-950 dark:to-purple-950 opacity-80"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-purple-300 opacity-10 blur-3xl float"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-cyan-300 opacity-10 blur-3xl float-delay-1"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="gradient-text">How Addicted Are You</span><br />
              <span>to Your Phone?</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Take our quick quiz to assess your phone usage habits and get personalized feedback.
            </p>
          </div>
        </div>
        
        <div className={`mx-auto max-w-2xl mt-12 p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} gradient-border`}>
          {!showResults ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Question {currentStep + 1} of {questions.length}</span>
                  <span>{completionPercentage}% Complete</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300 ease-in-out"
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-6">{questions[currentStep].question}</h3>
              
              <div className="space-y-3">
                {questions[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full p-4 text-left rounded-md transition-all duration-300 transform hover:shadow-md flex items-center space-x-3 ${index === 0 ? 'bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-l-4 border-blue-400' : ''} ${index === 1 ? 'bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border-l-4 border-purple-400' : ''} ${index === 2 ? 'bg-gradient-to-r from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 border-l-4 border-pink-400' : ''} ${index === 3 ? 'bg-gradient-to-r from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 border-l-4 border-amber-400' : ''}`}
                  >
                    <div className="flex-shrink-0 h-5 w-5 border rounded-full flex items-center justify-center">
                      {answers[currentStep] === index && (
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                      )}
                    </div>
                    <span>{option}</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center space-y-8 animate-fadeIn">
              <h3 className="text-3xl font-bold gradient-text">Your Results</h3>
              
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow blur-sm"></div>
                <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <span className="block text-5xl font-bold gradient-text">{completionPercentage}%</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Phone Dependency</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 shadow-md">
                <p className="text-xl font-medium">{getResultMessage()}</p>
              </div>
              
              <p className="text-muted-foreground">
                Based on your answers, we've assessed your phone usage habits. Remember, this is just a simple assessment.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={resetQuiz}
                  className="inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 gradient-bg-2 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Take Quiz Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
