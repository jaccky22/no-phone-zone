import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export type ChallengeInput = {
  user_id: string;
  challenge_type: 'beginner' | 'intermediate' | 'advanced';
  status: 'active' | 'completed' | 'failed';
};

export type Challenge = ChallengeInput & {
  id: string;
  created_at: string;
  start_date: string;
  end_date?: string;
  streak: number;
};

// Example for challenges
export async function getChallengeCount(): Promise<number> {
  const { count } = await supabase
    .from('challenges')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'active');
  return count || 0;
}

export async function startChallenge(challenge: ChallengeInput): Promise<Challenge | null> {
  const { data, error } = await supabase
    .from('challenges')
    .insert({
      ...challenge,
      streak: 0,
      start_date: new Date().toISOString(),
    })
    .select()
    .single();
  if (error) {
    console.error('startChallenge error:', error);
    throw error;
  }
  return data!;
}

// Chat conversation functions
export type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
  created_at?: string;
};

export type ChatConversation = {
  id?: string;
  created_at?: string;
  user_id?: string;
  messages: ChatMessage[];
};

export async function saveChatConversation(
  conversation: Omit<ChatConversation, 'id' | 'created_at'>
): Promise<ChatConversation | null> 
{
  const { data } = await supabase
    .from('chat_conversations')
    .insert(conversation)
    .select()
    .single();
  return data;
}

// Badge types and functions
export type Badge = {
  id: string;
  name: string;
  description: string;
  icon_url?: string;
};

export type UserBadge = {
  user_id: string;
  badge_id: string;
  awarded_at: string;
};

/** Fetch badges awarded to a user */
export async function getUserBadges(user_id: string): Promise<Badge[]> {
  const { data, error } = await supabase
    .from('user_badges')
    .select<{ badges: Badge[] }>('badges(id, name, description, icon_url)')
    .eq('user_id', user_id);
  if (error) {
    console.error('getUserBadges error:', error);
    return [];
  }
  return (data || []).flatMap(item => item.badges);
}

/** Award a badge to a user (ignores duplicates) */
export async function awardBadge(user_id: string, badge_id: string): Promise<void> {
  const { error } = await supabase
    .from('user_badges')
    .insert({ user_id, badge_id });
  if (error) console.error('awardBadge error:', error);
}