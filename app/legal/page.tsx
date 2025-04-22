"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function LegalHub() {
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
                <span>Legal</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold mb-6 gradient-text-1">Legal Information</h1>
          
          <div className="prose max-w-none">
            <p className="lead text-xl mb-8">
              Review our legal documents to understand how we handle your data and the terms of using our services.
            </p>

            <div className="grid gap-8 md:grid-cols-3 my-10">
              <Link 
                href="/legal/privacy-policy"
                className="group block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2 group-hover:underline">Privacy Policy</h3>
                <p className="text-muted-foreground">Learn how we collect, use, and protect your personal information when you use our services.</p>
                <div className="mt-4 text-blue-600 dark:text-blue-400 flex items-center">
                  <span>Read Policy</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              
              <Link 
                href="/legal/terms-of-service"
                className="group block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2 group-hover:underline">Terms of Service</h3>
                <p className="text-muted-foreground">Understand the rules and regulations for using our website and services.</p>
                <div className="mt-4 text-amber-600 dark:text-amber-400 flex items-center">
                  <span>Read Terms</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              
              <Link 
                href="/legal/cookie-policy"
                className="group block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-2 group-hover:underline">Cookie Policy</h3>
                <p className="text-muted-foreground">Information about how we use cookies and similar technologies on our website.</p>
                <div className="mt-4 text-purple-600 dark:text-purple-400 flex items-center">
                  <span>Read Policy</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 mb-8">
              <h2 className="text-xl font-bold mb-4">Have Questions About Our Policies?</h2>
              <p className="mb-4">If you have any questions or concerns about our legal policies, please don't hesitate to contact us.</p>
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
