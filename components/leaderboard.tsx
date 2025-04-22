"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type LeaderboardEntry = {
  id: string;
  name: string;
  streak: number;
  challenge_type: string;
};

export function Leaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from('profiles')
        .select('id, name, streak, challenge_type')
        .order('streak', { ascending: false })
        .limit(10);
      
      setEntries(data || []);
    };

    fetchData();
    const subscription = supabase.channel('leaderboard')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'profiles' }, fetchData)
      .subscribe();

    return () => { subscription.unsubscribe(); };
  }, []);

  return (
    <div className="space-y-4">
      {entries.map((entry, i) => (
        <div key={entry.id} className="flex items-center p-4 bg-white rounded-lg shadow">
          <span className="font-bold w-8">#{i+1}</span>
          <span className="flex-1">{entry.name}</span>
          <span className="font-mono">{entry.streak} days</span>
        </div>
      ))}
    </div>
  );
}