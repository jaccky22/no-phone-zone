"use client";

import { useState, useEffect } from 'react';
import { getPhoneUsageAdvice } from '@/lib/together-ai';
import { saveChatConversation, supabase } from '@/lib/supabase';
import { useSupabase } from '@/context/supabase-provider';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function ChatbotSection() {
  const { session } = useSupabase();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi there! I\'m your AI advisor for reducing phone usage. Ask me anything about digital wellbeing, screen time management, or how to build healthier tech habits.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUserMessage, setLastUserMessage] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Load saved chat history for authenticated users
  useEffect(() => {
    if (!session) return;
    (async () => {
      const { data, error } = await supabase
        .from('chat_conversations')
        .select('messages')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: true })
        .limit(1);
      if (error) {
        console.warn('Unable to load saved chat:', error.message || error);
        return;
      }
      if (data?.length) {
        setMessages(data[0].messages);
      }
    })();
  }, [session]);

  const sendMessage = async (messageText: string) => {
    setError(null);
    setSuggestions([]);
    const userMessage: Message = { role: 'user', content: messageText };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setLastUserMessage(messageText);
    setIsLoading(true);
    try {
      console.log('User query:', messageText);
      const aiResponse = await getPhoneUsageAdvice(messageText);
      console.log('AI response:', aiResponse.substring(0, 50) + '...');
      const assistantMessage: Message = { role: 'assistant', content: aiResponse };
      const updatedMessages = [...newMessages, assistantMessage];
      setMessages(updatedMessages);
      if (session?.user.id) {
        saveChatConversation({
          user_id: session.user.id,
          messages: updatedMessages
        }).catch(err => console.error('Error saving chat:', err));
      }
      setSuggestions(['More tips', 'Challenge ideas', 'Tracking progress']);
    } catch (err) {
      console.error('Error getting AI response:', err);
      setError('Sorry, there was an error connecting to the AI service. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (text: string) => {
    sendMessage(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const text = input;
    setInput('');
    sendMessage(text);
  };

  const handleRetry = async () => {
    if (!lastUserMessage) return;
    setError(null);
    setIsLoading(true);
    try {
      const aiResponse = await getPhoneUsageAdvice(lastUserMessage);
      const assistantMessage: Message = { role: 'assistant', content: aiResponse };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Retry error:', err);
      setError('Sorry, there was an error connecting to the AI service. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chatbot" className="w-full py-12 md:py-24 relative overflow-hidden">
      {/* Colorful background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 opacity-80"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-1/3 w-64 h-64 rounded-full bg-blue-300 opacity-10 blur-3xl float-delay-2"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-cyan-300 opacity-10 blur-3xl float"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="gradient-text">AI Digital Wellbeing</span> <br/>
              <span>Advisor</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Get personalized advice on reducing phone usage and building healthier digital habits.
            </p>
          </div>
        </div>
        
        <div className={`mx-auto max-w-2xl mt-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-xl shadow-lg bg-white dark:bg-gray-800 overflow-hidden gradient-border">
            <div className="p-4 border-b bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-green-300 animate-pulse"></div>
                <span className="font-medium">AI Advisor Online</span>
              </div>
            </div>
            
            <div
              className="h-[400px] overflow-y-auto p-4 space-y-4"
              role="log"
              aria-live="polite"
              tabIndex={0}
              aria-label="Chat messages"
            >
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn message-delay-${Math.min(5, index) * 100}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-4 shadow-md ${
                      message.role === 'user' 
                        ? 'gradient-bg-2 text-white' 
                        : 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {suggestions.length > 0 && (
                <div className="p-4 flex flex-wrap gap-2 bg-gray-50 dark:bg-gray-900">
                  {suggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickReply(s)}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 shadow-md">
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-blue-400 animate-bounce"></div>
                      <div className="h-3 w-3 rounded-full bg-indigo-400 animate-bounce delay-200"></div>
                      <div className="h-3 w-3 rounded-full bg-purple-400 animate-bounce delay-500"></div>
                    </div>
                  </div>
                </div>
              )}
              {error && (
                <div className="flex flex-col items-center">
                  <div className="max-w-[90%] rounded-lg p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 text-red-700 shadow-md">
                    <p className="text-sm">{error}</p>
                    <button
                      onClick={handleRetry}
                      aria-label="Retry sending message"
                      className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      Retry
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about reducing phone usage..."
                  aria-label="Ask about reducing phone usage"
                  className="flex-1 min-w-0 h-12 rounded-md border border-blue-200 bg-white px-4 py-2 text-sm shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:border-transparent"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  aria-label="Send message"
                  className="inline-flex h-12 items-center justify-center rounded-md gradient-bg-1 px-6 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:hover:scale-100"
                >
                  <span>Send</span>
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
