"use client";

import { useState } from 'react';

type EmailPreviewProps = {
  name: string;
  email: string;
  challengeType: string;
  onClose: () => void;
};

export function EmailPreview({ name, email, challengeType, onClose }: EmailPreviewProps) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  const getChallengeDetails = (type: string) => {
    switch (type) {
      case 'beginner':
        return {
          title: 'Beginner Challenge',
          goal: 'Reduce phone usage by 30 minutes each day',
          tips: [
            'Set specific phone-free times during meals',
            'Use screen time tracking apps to monitor your usage',
            'Turn off non-essential notifications'
          ]
        };
      case 'intermediate':
        return {
          title: 'Intermediate Challenge',
          goal: 'No phone during meals and 1 hour before bed',
          tips: [
            'Create phone-free zones in your home',
            'Use grayscale mode to make your phone less appealing',
            'Replace evening scrolling with reading a physical book'
          ]
        };
      case 'advanced':
        return {
          title: 'Advanced Challenge',
          goal: 'One full phone-free day per week',
          tips: [
            'Plan alternative activities for your phone-free day',
            'Let friends and family know about your challenge',
            'Keep a journal to track your experience and insights'
          ]
        };
      default:
        return {
          title: 'No-Phone Challenge',
          goal: 'Reduce your phone usage',
          tips: [
            'Be mindful of your phone habits',
            'Find alternative activities',
            'Track your progress'
          ]
        };
    }
  };
  
  const challengeDetails = getChallengeDetails(challengeType);
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-t-xl flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-bold">Email Preview</span>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-4 flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">To: {email}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">From: noreply@nophonezone.app</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Date: {currentDate}</div>
            </div>
            <button
              onClick={handleCopy}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {copied ? 'Copied!' : 'Copy Email'}
            </button>
          </div>
          
          <div className="border-t border-b py-4 my-4">
            <h2 className="text-xl font-bold mb-2">Welcome to the No-Phone Zone Challenge!</h2>
            
            <p className="mb-4">Hello {name},</p>
            
            <p className="mb-4">
              Thank you for joining the <strong>{challengeDetails.title}</strong>! We're excited to have you on board and to help you reclaim your time from excessive phone usage.
            </p>
            
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-4">
              <h3 className="font-bold mb-2">Your Challenge Goal:</h3>
              <p>{challengeDetails.goal}</p>
            </div>
            
            <h3 className="font-bold mb-2">Getting Started:</h3>
            <ol className="list-decimal pl-5 mb-4 space-y-2">
              <li>Set a specific start date (we recommend starting tomorrow)</li>
              <li>Track your progress using the "Reclaim Your Time" tool on our website</li>
              <li>Share your journey with friends to stay accountable</li>
            </ol>
            
            <h3 className="font-bold mb-2">Helpful Tips:</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              {challengeDetails.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
            
            <p className="mb-4">
              Remember, this challenge is about progress, not perfection. Every minute you spend away from your phone is a win!
            </p>
            
            <p>
              If you have any questions or need support, simply reply to this email or visit our website.
            </p>
          </div>
          
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>No-Phone Zone App</p>
            <p>This is a demo email preview. In a real application, this would be sent to your inbox.</p>
          </div>
        </div>
        
        <div className="p-4 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
