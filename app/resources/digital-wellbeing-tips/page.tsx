"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function DigitalWellbeingTips() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8 text-sm breadcrumbs">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link></li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/resources" className="text-blue-500 hover:text-blue-700">Resources</Link>
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>Digital Wellbeing Tips</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold mb-6 gradient-text-1">Digital Wellbeing Tips</h1>
          
          <div className="prose max-w-none">
            <p className="lead text-xl mb-8">
              Discover practical strategies to improve your relationship with technology and reclaim your time and attention.
            </p>

            <div className="grid gap-8 md:grid-cols-2 my-10">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800">
                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3">Create Phone-Free Zones</h3>
                <p>Designate specific areas in your home as phone-free zones, such as the dining room, bedroom, or bathroom. This helps create boundaries and reduces the temptation to constantly check your device.</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl shadow-sm border border-purple-100 dark:border-purple-800">
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-3">Use Grayscale Mode</h3>
                <p>Turn on grayscale mode on your phone to make it less visually appealing. Colorful app icons and notifications are designed to grab your attention, but removing the colors can reduce their psychological pull.</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl shadow-sm border border-amber-100 dark:border-amber-800">
                <h3 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-3">Schedule Tech Breaks</h3>
                <p>Set specific times during the day for checking emails, social media, and messages. This prevents the constant interruption of notifications and allows you to be more present in your daily activities.</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl shadow-sm border border-green-100 dark:border-green-800">
                <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-3">Practice Mindful Usage</h3>
                <p>Before picking up your phone, ask yourself why you're reaching for it. Is it out of boredom, habit, or do you have a specific purpose? This simple pause can help reduce mindless scrolling.</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 p-6 rounded-xl shadow-sm border border-red-100 dark:border-red-800">
                <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-3">Use App Timers</h3>
                <p>Set daily time limits for social media and other apps that tend to consume your attention. Many phones now have built-in features that help you track and limit your usage.</p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-6 rounded-xl shadow-sm border border-cyan-100 dark:border-cyan-800">
                <h3 className="text-xl font-bold text-cyan-700 dark:text-cyan-400 mb-3">Charge Devices Outside the Bedroom</h3>
                <p>Keep your phone charging station away from your bedroom to avoid the temptation of checking it before bed or first thing in the morning. This can improve your sleep quality and morning routine.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Weekly Digital Detox Challenge</h2>
            
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-6 rounded-xl shadow-md border border-violet-100 dark:border-violet-800 mb-8">
              <p className="mb-4">Try our 7-day digital detox challenge to reset your relationship with technology:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li><strong>Monday:</strong> No social media all day</li>
                <li><strong>Tuesday:</strong> Turn off all non-essential notifications</li>
                <li><strong>Wednesday:</strong> No phone during meals</li>
                <li><strong>Thursday:</strong> No screens after 8 PM</li>
                <li><strong>Friday:</strong> Delete your most distracting app for the weekend</li>
                <li><strong>Saturday:</strong> Limit phone checks to once per hour</li>
                <li><strong>Sunday:</strong> Complete phone-free day (or at least morning)</li>
              </ol>
              <div className="mt-6">
                <Link 
                  href="/challenge" 
                  className="inline-flex h-10 items-center justify-center rounded-md gradient-bg-2 px-6 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Join the Challenge
                </Link>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-6">Recommended Apps for Digital Wellbeing</h2>
            
            <div className="space-y-4 mb-12">
              <div className="flex items-start p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Forest</h3>
                  <p className="text-sm text-muted-foreground">Plant virtual trees that grow while you stay focused. If you leave the app, your tree dies.</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Freedom</h3>
                  <p className="text-sm text-muted-foreground">Block distracting websites and apps across all your devices simultaneously.</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Calm</h3>
                  <p className="text-sm text-muted-foreground">Meditation app that helps you develop mindfulness and reduce stress from digital overload.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
