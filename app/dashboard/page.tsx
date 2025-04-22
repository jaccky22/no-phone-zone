"use client";

import { useState, useEffect } from 'react';
import { useSupabase } from '@/context/supabase-provider';
import { supabase } from '@/lib/supabase';
import { getUserBadges, Badge } from '@/lib/supabase';
import { Header } from '@/components/header';

// Types
interface Challenge {
  id: string;
  challenge_type: string;
  status: string;
  start_date: string;
  end_date?: string;
  streak: number;
}
interface ChatMsg { role: 'user' | 'assistant'; content: string; created_at?: string; }
interface Conversation { id: string; created_at?: string; messages: ChatMsg[]; }

export default function DashboardPage() {
  const { session } = useSupabase();
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [badges, setBadges] = useState<Badge[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (!session) return;
    setLoading(true);

    // Fetch challenges
    const { data: chData, error: chErr } = await supabase
      .from<Challenge>('challenges')
      .select('*')
      .eq('user_id', session.user.id)
      .order('start_date', { ascending: false });
    if (chErr) console.error('fetchChallenges error:', chErr.message, chErr.details, chErr.hint);
    else setChallenges(chData || []);

    // Fetch chat history
    const { data: convData, error: convErr } = await supabase
      .from<Conversation>('chat_conversations')
      .select('id, created_at, messages')
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false });
    if (convErr) console.error('fetchConversations error:', convErr.message, convErr.details, convErr.hint);
    else setConversations(convData || []);

    // Fetch user badges
    const userBadges = await getUserBadges(session.user.id);
    setBadges(userBadges);

    setLoading(false);
  };

  useEffect(() => { fetchData(); }, [session]);

  const markCompleted = async (id: string) => {
    const { error } = await supabase
      .from('challenges')
      .update({ status: 'completed', end_date: new Date().toISOString() })
      .eq('id', id);
    if (error) console.error('markCompleted error:', error.message, error.details, error.hint);
    else fetchData();
  };

  if (!session) return <p className="p-6">Please sign in to view your dashboard.</p>;
  if (loading)  return <p className="p-6">Loading...</p>;

  return (
    <>
      <Header />
      <div className="container mx-auto py-12 prose">
        <h1>Your Dashboard</h1>

        <section>
          <h2>My Challenges</h2>
          {challenges.length === 0 ? (
            <p>You haven’t joined any challenges yet.</p>
          ) : (
            challenges.map(c => (
              <div key={c.id} className="border p-4 mb-4 rounded">
                <p><strong>Type:</strong> {c.challenge_type}</p>
                <p><strong>Status:</strong> {c.status}</p>
                <p><strong>Started:</strong> {new Date(c.start_date).toLocaleDateString()}</p>
                <p><strong>Streak:</strong> {c.streak}</p>
                {c.status === 'active' && (
                  <button
                    onClick={() => markCompleted(c.id)}
                    className="mt-2 px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >Mark Completed</button>
                )}
              </div>
            ))
          )}
        </section>

        <section>
          <h2>Chat History</h2>
          {conversations.length === 0 ? (
            <p>No chats yet. Visit the AI Advisor to start one.</p>
          ) : (
            conversations.map(conv => (
              <div key={conv.id} className="border p-4 mb-4 rounded">
                <p className="text-xs text-gray-500 mb-2">
                  {new Date(conv.created_at || '').toLocaleString()}
                </p>
                {conv.messages.map((m, i) => (
                  <p key={i}><strong>{m.role === 'user' ? 'You' : 'Advisor'}:</strong> {m.content}</p>
                ))}
              </div>
            ))
          )}
        </section>

        <section>
          <h2>My Badges</h2>
          {badges.length === 0 ? (
            <p>You haven’t earned any badges yet.</p>
          ) : (
            <div className="flex flex-wrap gap-4">
              {badges.map(b => (
                <div key={b.id} className="flex flex-col items-center p-2">
                  {b.icon_url && <img src={b.icon_url} alt={b.name} className="h-12 w-12 mb-1" />}
                  <span className="text-sm font-medium">{b.name}</span>
                  <p className="text-xs text-muted-foreground">{b.description}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}