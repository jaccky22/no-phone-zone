"use client";

import { useState } from 'react';
import { useSupabase } from '@/context/supabase-provider';

export function AuthBar() {
  const { session, signIn, signOut, isLoading } = useSupabase();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    const { error } = await signIn(email);
    if (error) {
      console.error('Magic link error:', error);
      setMessage(error.message || error.details || 'Error sending magic link.');
    } else {
      setMessage('Check your email for the magic link.');
    }
  };

  if (session) {
    return (
      <div className="flex justify-end p-4 bg-gray-100 dark:bg-gray-800">
        <span className="mr-4 text-sm">Signed in as {session.user.email}</span>
        <button
          onClick={() => signOut()}
          className="px-3 py-1 bg-red-500 text-white rounded-md"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSignIn} className="flex justify-end p-4 bg-gray-100 dark:bg-gray-800 space-x-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="border p-1 rounded-md text-sm"
        required
      />
      <button
        type="submit"
        className="px-3 py-1 bg-blue-500 text-white rounded-md disabled:opacity-50"
        disabled={isLoading}
      >
        Sign in
      </button>
      {message && <span className="ml-4 text-sm">{message}</span>}
    </form>
  );
}
