"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { startChallenge } from '@/lib/supabase';
import { useSupabase } from '@/context/supabase-provider';

type ChallengeType = 'beginner' | 'intermediate' | 'advanced';

export function ChallengeForm() {
  const router = useRouter();
  const [selectedChallenge, setSelectedChallenge] = useState<ChallengeType | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { session } = useSupabase();
  useEffect(() => {
    const userEmail = session?.user.email ?? '';
    if (userEmail) setEmail(userEmail);
  }, [session]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedChallenge) {
      setError('Please select a challenge level');
      return;
    }

    if (!session && !email) {
      setError('Please enter your email');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await startChallenge({
        challenge_type: selectedChallenge,
        user_id: session?.user.id || email,
        status: 'active',
      });
      router.push('/#reclaim-time-section');
      return;
    } catch (err: any) {
      console.error('startChallenge error:', err);
      const message = err.message ?? err.details ?? err.hint ?? 'Failed to start challenge. Please try again.';
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className={`w-full max-w-md mx-auto p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} gradient-border`}>
        <h3 className="text-2xl font-bold mb-4 gradient-text-orange">Join the No-Phone Challenge</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}
          
          {!session && (
            <div className="animate-fadeIn message-delay-100">
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-12 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent dark:bg-gray-800"
                placeholder="Enter your name"
              />
            </div>
          )}
          
          {!session && (
            <div className="animate-fadeIn message-delay-200">
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent dark:bg-gray-800"
                placeholder="Enter your email"
                required
              />
            </div>
          )}
          
          <div className="animate-fadeIn message-delay-300">
            <label className="block text-sm font-medium mb-3">Select Your Challenge Level</label>
            <div className="space-y-3">
              {[
                { id: 'beginner', name: 'Beginner', description: 'Reduce phone usage by 30 minutes each day', color: 'blue' },
                { id: 'intermediate', name: 'Intermediate', description: 'No phone during meals and 1 hour before bed', color: 'orange' },
                { id: 'advanced', name: 'Advanced', description: 'One full phone-free day per week', color: 'purple' }
              ].map((challenge, index) => (
                <div 
                  key={challenge.id}
                  onClick={() => setSelectedChallenge(challenge.id as ChallengeType)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md animate-fadeIn message-delay-${(index + 6) * 100} ${
                    selectedChallenge === challenge.id 
                      ? challenge.color === 'blue' 
                        ? 'bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 border-l-4 border-blue-400 shadow-md' 
                        : challenge.color === 'orange' 
                          ? 'bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 border-l-4 border-amber-400 shadow-md' 
                          : 'bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 border-l-4 border-purple-400 shadow-md'
                      : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                      selectedChallenge === challenge.id 
                        ? challenge.color === 'blue' ? 'border-blue-500' 
                        : challenge.color === 'orange' ? 'border-amber-500' 
                        : 'border-purple-500'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}>
                      {selectedChallenge === challenge.id && (
                        <div className={`w-2.5 h-2.5 rounded-full ${challenge.color === 'blue' ? 'bg-blue-500' : challenge.color === 'orange' ? 'bg-amber-500' : 'bg-purple-500'}`}></div>
                      )}
                    </div>
                    <div>
                      <h4 className={`font-medium ${selectedChallenge === challenge.id ? (challenge.color === 'blue' ? 'text-blue-700 dark:text-blue-400' : challenge.color === 'orange' ? 'text-amber-700 dark:text-amber-400' : 'text-purple-700 dark:text-purple-400') : ''}`}>{challenge.name}</h4>
                      <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex h-12 items-center justify-center rounded-md gradient-bg-2 px-6 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 disabled:opacity-50 animate-fadeIn message-delay-500"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Joining Challenge...
              </>
            ) : 'Join Challenge'}
          </button>
        </form>
      </div>
    </>
  );
}
