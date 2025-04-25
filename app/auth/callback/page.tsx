"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    // Handle the magic link redirect and set session
    const handleAuth = async () => {
      const { data, error } = await supabase.auth.getSessionFromUrl({ storeSession: true });
      if (error) console.error('Auth callback error:', error.message);
      router.push('/');
    };
    handleAuth();
  }, [router]);

  return (
    <div className="p-6 text-center">
      Signing you in...
    </div>
  );
}
