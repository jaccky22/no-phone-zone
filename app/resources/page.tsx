"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Resources() {
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
                <span>Resources</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold mb-6 gradient-text-1">Resources</h1>
          
          <div className="prose max-w-none">
            <p className="lead text-xl mb-8">
              Explore our collection of resources to help you reduce phone usage and improve your digital wellbeing.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 my-10">
              <Link 
                href="/resources/digital-wellbeing-tips"
                className="group block bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2 group-hover:underline">Digital Wellbeing Tips</h3>
                <p className="text-muted-foreground">Practical strategies to improve your relationship with technology and reclaim your time.</p>
              </Link>
              
              <Link 
                href="/resources/research-and-studies"
                className="group block bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl shadow-sm border border-amber-100 dark:border-amber-800 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2 group-hover:underline">Research & Studies</h3>
                <p className="text-muted-foreground">Explore the latest scientific research on smartphone usage and digital wellbeing.</p>
              </Link>
              
              <Link 
                href="/resources/community-stories"
                className="group block bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl shadow-sm border border-purple-100 dark:border-purple-800 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-2 group-hover:underline">Community Stories</h3>
                <p className="text-muted-foreground">Read real experiences from people who have taken on the No-Phone Challenge.</p>
              </Link>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Legal Information</h2>
            
            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <Link 
                href="/legal/privacy-policy"
                className="group block p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <h3 className="font-bold mb-2 group-hover:underline">Privacy Policy</h3>
                <p className="text-sm text-muted-foreground">How we collect, use, and protect your personal information.</p>
              </Link>
              
              <Link 
                href="/legal/terms-of-service"
                className="group block p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <h3 className="font-bold mb-2 group-hover:underline">Terms of Service</h3>
                <p className="text-sm text-muted-foreground">The rules and guidelines for using our services.</p>
              </Link>
              
              <Link 
                href="/legal/cookie-policy"
                className="group block p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <h3 className="font-bold mb-2 group-hover:underline">Cookie Policy</h3>
                <p className="text-sm text-muted-foreground">Information about how we use cookies and similar technologies.</p>
              </Link>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 mb-8">
              <h2 className="text-xl font-bold mb-4">Need More Information?</h2>
              <p className="mb-4">If you have questions or need additional resources about reducing phone usage and improving digital wellbeing, our team is here to help.</p>
              <Link 
                href="/contact" 
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
