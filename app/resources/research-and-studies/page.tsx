"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function ResearchAndStudies() {
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
                <span>Research & Studies</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold mb-6 gradient-text-2">Research & Studies</h1>
          
          <div className="prose max-w-none">
            <p className="lead text-xl mb-8">
              Explore the latest scientific research on smartphone usage, digital wellbeing, and the effects of technology on our mental health.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl shadow-md border border-blue-100 dark:border-blue-800 mb-10">
              <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">Key Findings from Recent Studies</h2>
              <ul className="space-y-4 mt-4">
                <li className="flex">
                  <div className="mr-3 flex-shrink-0">📱</div>
                  <p>The average person checks their smartphone <strong>96 times a day</strong> — that's once every 10 minutes during waking hours. (Source: Asurion, 2019)</p>
                </li>
                <li className="flex">
                  <div className="mr-3 flex-shrink-0">⏱️</div>
                  <p>Adults spend an average of <strong>3 hours and 15 minutes</strong> per day on their phones, with the top 20% of smartphone users spending more than 4.5 hours. (Source: RescueTime, 2023)</p>
                </li>
                <li className="flex">
                  <div className="mr-3 flex-shrink-0">🧠</div>
                  <p>The mere presence of a smartphone can reduce available cognitive capacity, even when the user is actively trying to focus on another task. (Source: Journal of the Association for Consumer Research, 2022)</p>
                </li>
                <li className="flex">
                  <div className="mr-3 flex-shrink-0">😴</div>
                  <p>Blue light from screens can suppress melatonin production by up to <strong>22%</strong>, disrupting sleep patterns and quality. (Source: Harvard Health Publishing, 2020)</p>
                </li>
                <li className="flex">
                  <div className="mr-3 flex-shrink-0">🤔</div>
                  <p>People who limit social media use to 30 minutes per day report significantly lower levels of anxiety, depression, loneliness, and FOMO. (Source: Journal of Social and Clinical Psychology, 2021)</p>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Featured Research Papers</h2>
            
            <div className="space-y-6 mb-12">
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg mb-2">Digital Detox: Examining the Effectiveness of Temporary Smartphone Abstinence</h3>
                <p className="text-sm text-muted-foreground mb-3">Journal of Behavioral Addictions (2023)</p>
                <p className="mb-4">This study examined 200 participants who underwent a 72-hour digital detox. Results showed significant improvements in sleep quality, face-to-face social interactions, and reported levels of anxiety.</p>
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <Link href="#" className="hover:underline">Read Abstract</Link>
                </div>
              </div>
              
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg mb-2">The Attention Economy: How Social Media Platforms Design for Addiction</h3>
                <p className="text-sm text-muted-foreground mb-3">Computers in Human Behavior (2022)</p>
                <p className="mb-4">This paper analyzes the psychological mechanisms used by social media platforms to maximize user engagement, including variable rewards, social validation, and the fear of missing out (FOMO).</p>
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <Link href="#" className="hover:underline">Read Abstract</Link>
                </div>
              </div>
              
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg mb-2">Phubbing and Relationship Satisfaction: The Role of Smartphone Interference in Romantic Relationships</h3>
                <p className="text-sm text-muted-foreground mb-3">Journal of Social and Personal Relationships (2023)</p>
                <p className="mb-4">This longitudinal study found that "phubbing" (phone snubbing) was associated with decreased relationship satisfaction and increased conflict among romantic partners over a 6-month period.</p>
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <Link href="#" className="hover:underline">Read Abstract</Link>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Infographics</h2>
            
            <div className="grid gap-6 md:grid-cols-2 mb-12">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl shadow-sm border border-amber-100 dark:border-amber-800">
                <h3 className="text-lg font-bold text-amber-700 dark:text-amber-400 mb-3">Screen Time by Age Group</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-24 text-sm">Teens:</span>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                      <div className="bg-amber-500 h-4 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">7.4 hrs</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-24 text-sm">20-29:</span>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                      <div className="bg-amber-500 h-4 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">5.7 hrs</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-24 text-sm">30-39:</span>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                      <div className="bg-amber-500 h-4 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">4.3 hrs</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-24 text-sm">40-49:</span>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                      <div className="bg-amber-500 h-4 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">3.5 hrs</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-24 text-sm">50+:</span>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                      <div className="bg-amber-500 h-4 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">2.6 hrs</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-6 rounded-xl shadow-sm border border-purple-100 dark:border-purple-800">
                <h3 className="text-lg font-bold text-purple-700 dark:text-purple-400 mb-3">Impact of Phone Reduction</h3>
                <div className="space-y-4 mt-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Happiness</div>
                      <div className="text-lg font-bold">+23%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Sleep Quality</div>
                      <div className="text-lg font-bold">+42%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Anxiety</div>
                      <div className="text-lg font-bold">-31%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 mb-8">
              <h2 className="text-xl font-bold mb-4">Want to participate in our research?</h2>
              <p className="mb-4">We're always looking for participants in our ongoing studies about digital wellbeing and phone usage reduction strategies.</p>
              <Link 
                href="/contact" 
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Learn More About Our Studies
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
