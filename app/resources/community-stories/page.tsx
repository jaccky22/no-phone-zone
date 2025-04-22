"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { useState } from "react";

export default function CommunityStories() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const stories = [
    {
      id: 1,
      name: "Sarah J.",
      age: 28,
      location: "Portland, OR",
      challenge: "beginner",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      title: "How I Reclaimed My Evenings",
      excerpt: "After realizing I was spending 3+ hours every night scrolling through social media, I decided to make a change...",
      content: "After realizing I was spending 3+ hours every night scrolling through social media, I decided to make a change. I started with the beginner challenge of reducing my phone usage by 30 minutes each day. The first week was surprisingly difficult - I found myself reaching for my phone out of habit constantly. I replaced the habit by keeping a physical book nearby and going for short walks after dinner.\n\nBy the second week, I noticed I was sleeping better and feeling less anxious before bed. Now, three months later, my evening routine is completely transformed. I read actual books, have meaningful conversations with my partner, and even started learning to knit. The best part? I don't miss my phone at all during these times.",
      date: "April 2, 2025",
      tags: ["beginner", "evening-routine", "success-story"]
    },
    {
      id: 2,
      name: "Marcus T.",
      age: 34,
      location: "Chicago, IL",
      challenge: "advanced",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      title: "My Phone-Free Sundays Changed Everything",
      excerpt: "Taking on the advanced challenge seemed impossible at first, but now my phone-free day is the highlight of my week...",
      content: "Taking on the advanced challenge seemed impossible at first, but now my phone-free day is the highlight of my week. I chose Sundays as my phone-free day, and the first couple of weekends were honestly tough. I felt phantom vibrations and kept reaching for my pocket.\n\nBut something amazing happened by the third week - I rediscovered my neighborhood. Without Google Maps or Yelp, I just walked and explored, finding a small bookstore I'd never noticed before despite living here for years. I've had conversations with neighbors, spent hours in the park, and even joined a local basketball game.\n\nThe most surprising benefit has been how it's affected the rest of my week. Knowing I have a phone-free day coming up makes me more intentional about how I use technology during the other days. My screen time has dropped by over 40% overall, not just on Sundays.",
      date: "March 15, 2025",
      tags: ["advanced", "phone-free-day", "success-story"]
    },
    {
      id: 3,
      name: "Priya K.",
      age: 22,
      location: "Boston, MA",
      challenge: "intermediate",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      title: "Struggling and Succeeding with Meal-Time Boundaries",
      excerpt: "As a college student, putting my phone away during meals was harder than I expected...",
      content: "As a college student, putting my phone away during meals was harder than I expected. The intermediate challenge of no phone during meals and one hour before bed seemed simple enough, but in a dining hall environment where everyone is on their phones, I felt like the odd one out.\n\nThe first few days, I cheated a bit - I'd check notifications quickly or take \"just one photo\" of my food. But I noticed something: I wasn't really tasting my food or noticing when I was full. By forcing myself to focus only on eating and the people around me, meals became more satisfying.\n\nThe real breakthrough came when I convinced two friends to join me. Now we have phone-free lunches three times a week, and our conversations have become so much deeper. We've started a mini-movement in our dorm, with about 15 people now participating in phone-free dinners on Wednesdays.\n\nThe hour before bed is still a work in progress, but I'm getting better at it each week.",
      date: "March 28, 2025",
      tags: ["intermediate", "social-pressure", "partial-success"]
    },
    {
      id: 4,
      name: "James L.",
      age: 41,
      location: "Austin, TX",
      challenge: "beginner",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      title: "Teaching My Kids by Example",
      excerpt: "As a parent, I realized I couldn't ask my teenagers to reduce their screen time while constantly checking my own phone...",
      content: "As a parent, I realized I couldn't ask my teenagers to reduce their screen time while constantly checking my own phone. The hypocrisy was obvious even to me. Starting with the beginner challenge was my way of walking the talk.\n\nI made a show of putting my phone in a drawer when I got home from work, only checking it once after dinner. The first few days, my kids actually mocked me - they thought it was some kind of phase or trick to get them to use their phones less.\n\nBut after two weeks, something shifted. My 15-year-old daughter actually put her phone down during dinner without being asked. My 17-year-old son started leaving his phone in his room when we watched family movies.\n\nThe unexpected benefit has been how much more I notice about my kids' lives now that I'm truly present. I've learned about friend dynamics, school projects, and even helped with homework in a way I hadn't before. My relationship with both teens has improved dramatically.\n\nWe're now doing a family challenge where we all put our phones in a basket from 7-9pm every evening. It's not always perfect, but it's progress.",
      date: "April 5, 2025",
      tags: ["beginner", "parenting", "success-story"]
    },
    {
      id: 5,
      name: "Elena M.",
      age: 29,
      location: "Miami, FL",
      challenge: "intermediate",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      title: "Relapsing and Trying Again",
      excerpt: "I've started and failed the intermediate challenge three times now, but I'm not giving up...",
      content: "I've started and failed the intermediate challenge three times now, but I'm not giving up. As someone who works in social media marketing, staying off my phone during personal time is particularly difficult. Work notifications blend with personal ones, and the line between professional research and mindless scrolling gets blurry.\n\nMy first attempt at the intermediate challenge lasted only four days before a work emergency had me back on my phone during dinner. The second attempt was derailed by family drama that played out in a group chat. The third time, I simply gave in to temptation during a particularly boring evening.\n\nBut each attempt has taught me something. I've now created separate work and personal profiles on my devices. I've communicated boundaries to my family about response times. And I've stocked my home with alternatives to scrolling - puzzles, books, and art supplies.\n\nI'm on day five of my fourth attempt, and while I'm not confident I'll make it forever, I know that each day of success is rewarding in itself. The challenge has made me more aware of my habits, even when I fail to change them completely.",
      date: "March 10, 2025",
      tags: ["intermediate", "work-life-balance", "struggles"]
    },
    {
      id: 6,
      name: "David W.",
      age: 45,
      location: "Seattle, WA",
      challenge: "advanced",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      title: "From Skeptic to Believer",
      excerpt: "I thought the whole 'digital detox' thing was overblown until my doctor suggested it for my insomnia and anxiety...",
      content: "I thought the whole 'digital detox' thing was overblown until my doctor suggested it for my insomnia and anxiety. As a software engineer, I spend all day staring at screens, so the idea of an entire day without my phone seemed not just difficult but pointless.\n\nI only tried the advanced challenge because my doctor was insistent. The first phone-free Saturday was miserable - I felt disconnected and irritable. The second week wasn't much better. But by the third week, something shifted. I slept through the night for the first time in years.\n\nSix months later, my phone-free Saturdays are sacred. My anxiety has decreased significantly, and I've reconnected with hobbies I abandoned years ago - hiking, woodworking, and playing chess with actual people at a local coffee shop.\n\nThe most surprising outcome has been how it's affected my work. I'm more focused during the week, knowing I have a complete break coming. My problem-solving has improved, likely because my brain gets a chance to truly rest and reset.\n\nTo anyone skeptical like I was: give it a real chance. Three weeks minimum. Your brain needs time to remember what life was like before constant connectivity.",
      date: "April 8, 2025",
      tags: ["advanced", "mental-health", "success-story"]
    }
  ];
  
  const filteredStories = activeFilter === "all" 
    ? stories 
    : stories.filter(story => story.tags.includes(activeFilter));
  
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
                <span>Community Stories</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold mb-6 gradient-text-3">Community Stories</h1>
          
          <div className="prose max-w-none">
            <p className="lead text-xl mb-8">
              Read real experiences from people who have taken on the No-Phone Challenge and reclaimed their time and attention.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <button 
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-full text-sm ${activeFilter === "all" 
                  ? "bg-purple-600 text-white" 
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
              >
                All Stories
              </button>
              <button 
                onClick={() => setActiveFilter("beginner")}
                className={`px-4 py-2 rounded-full text-sm ${activeFilter === "beginner" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
              >
                Beginner Challenge
              </button>
              <button 
                onClick={() => setActiveFilter("intermediate")}
                className={`px-4 py-2 rounded-full text-sm ${activeFilter === "intermediate" 
                  ? "bg-amber-600 text-white" 
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
              >
                Intermediate Challenge
              </button>
              <button 
                onClick={() => setActiveFilter("advanced")}
                className={`px-4 py-2 rounded-full text-sm ${activeFilter === "advanced" 
                  ? "bg-purple-600 text-white" 
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
              >
                Advanced Challenge
              </button>
              <button 
                onClick={() => setActiveFilter("success-story")}
                className={`px-4 py-2 rounded-full text-sm ${activeFilter === "success-story" 
                  ? "bg-green-600 text-white" 
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
              >
                Success Stories
              </button>
              <button 
                onClick={() => setActiveFilter("struggles")}
                className={`px-4 py-2 rounded-full text-sm ${activeFilter === "struggles" 
                  ? "bg-red-600 text-white" 
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
              >
                Challenges & Struggles
              </button>
            </div>

            <div className="space-y-12 mb-12">
              {filteredStories.map((story) => (
                <div key={story.id} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className={`p-6 ${
                    story.challenge === "beginner" 
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20" 
                      : story.challenge === "intermediate"
                        ? "bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20"
                        : "bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20"
                  }`}>
                    <div className="flex items-start">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h2 className="text-xl font-bold mb-1">{story.title}</h2>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <span>{story.name}, {story.age}</span>
                          <span className="mx-2">•</span>
                          <span>{story.location}</span>
                          <span className="mx-2">•</span>
                          <span>{story.date}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {story.tags.map(tag => (
                            <span 
                              key={tag} 
                              className={`text-xs px-2 py-1 rounded-full ${
                                tag === "beginner" 
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300" 
                                  : tag === "intermediate"
                                    ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
                                    : tag === "advanced"
                                      ? "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300"
                                      : tag === "success-story"
                                        ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                                        : tag === "struggles"
                                          ? "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300"
                                          : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                              }`}
                            >
                              {tag.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white dark:bg-gray-800">
                    <div className="prose dark:prose-invert">
                      {story.content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-6 rounded-xl shadow-md border border-purple-100 dark:border-purple-800 mb-8">
              <h2 className="text-xl font-bold mb-4">Share Your Story</h2>
              <p className="mb-4">Have you taken on the No-Phone Challenge? We'd love to hear about your experience, whether you succeeded, struggled, or are still on your journey.</p>
              <Link 
                href="/contact" 
                className="inline-flex h-10 items-center justify-center rounded-md gradient-bg-3 px-6 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105"
              >
                Submit Your Story
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
