"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
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
                <span>Privacy Policy</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-muted-foreground">Last updated: April 20, 2025</p>
            
            <h2>Introduction</h2>
            <p>
              At No-Phone Zone, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2>The Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              <li><strong>Challenge Data</strong> includes information about the challenges you join, your progress, and any feedback you provide.</li>
            </ul>
            
            <h2>How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            <p>
              Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
            </p>
            
            <h2>Purposes for Which We Will Use Your Personal Data</h2>
            <p>
              We have set out below, in a table format, a description of all the ways we plan to use your personal data, and which of the legal bases we rely on to do so.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Purpose/Activity</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type of data</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Lawful basis for processing</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">To register you as a new user</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Identity, Contact</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Performance of a contract with you</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">To manage our relationship with you</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Identity, Contact, Challenge</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Performance of a contract with you; Necessary for our legitimate interests</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">To administer and protect our business and this website</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Identity, Contact, Technical</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Necessary for our legitimate interests; Necessary to comply with a legal obligation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">To use data analytics to improve our website</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Technical, Usage</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Necessary for our legitimate interests</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2>Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
            <p>
              We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
            </p>
            
            <h2>Data Retention</h2>
            <p>
              We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
            </p>
            
            <h2>Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:
            </p>
            <ul>
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            <p>
              If you wish to exercise any of the rights set out above, please contact us.
            </p>
            
            <h2>Changes to the Privacy Policy</h2>
            <p>
              We keep our privacy policy under regular review. This version was last updated on April 20, 2025. Historic versions can be obtained by contacting us.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p>
              Email: privacy@nophonezone.app<br />
              Address: 123 Digital Wellbeing Street, Mindful City, MC 12345
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
