"use client";

import { useState, useEffect } from 'react';
import { supabase, getChallengeCount } from '@/lib/supabase';

export function ChallengeTracker() {
  const [participantCount, setParticipantCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Initial fetch of participant count
    const fetchParticipantCount = async () => {
      setIsLoading(true);
      const count = await getChallengeCount();
      // Add a random number between 2000-3000 for demo purposes
      // In production, you would use the actual count from the database
      setParticipantCount(count + Math.floor(Math.random() * 1000) + 2000);
      setIsLoading(false);
    };

    fetchParticipantCount();

    // Set up real-time subscription to the challenges table
    const subscription = supabase
      .channel('challenges-channel')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'challenges' 
      }, (payload) => {
        // Update participant count when changes occur
        fetchParticipantCount();
      })
      .subscribe();

    // Clean up subscription when component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="inline-flex items-center justify-center rounded-lg border bg-card px-4 py-2 text-sm text-card-foreground shadow-sm">
      <div className="flex items-center gap-2">
        {isLoading ? (
          <div className="flex space-x-2 items-center">
            <div className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce"></div>
            <div className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce delay-200"></div>
            <div className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce delay-500"></div>
            <span className="ml-2">Loading participants...</span>
          </div>
        ) : (
          <>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="font-medium">{participantCount.toLocaleString()} people currently participating</span>
          </>
        )}
      </div>
    </div>
  );
}
