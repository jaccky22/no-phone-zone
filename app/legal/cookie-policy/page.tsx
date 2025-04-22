"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function CookiePolicy() {
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
                <span>Cookie Policy</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-muted-foreground">Last updated: April 20, 2025</p>
            
            <h2>Introduction</h2>
            <p>
              This Cookie Policy explains how No-Phone Zone ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website at nophonezone.app ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, No-Phone Zone) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
            </p>
            
            <h2>Why Do We Use Cookies?</h2>
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for advertising, analytics and other purposes. This is described in more detail below.
            </p>
            
            <h2>The Types of Cookies We Use</h2>
            <p>
              The specific types of first and third-party cookies served through our Website and the purposes they perform are described below:
            </p>
            
            <h3>Essential Website Cookies</h3>
            <p>
              These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the Website, you cannot refuse them without impacting how our Website functions.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Purpose</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Provider</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Expiry</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">session</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Used to maintain user session</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">nophonezone.app</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Session</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">XSRF-TOKEN</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Used for security purposes</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">nophonezone.app</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3>Performance and Functionality Cookies</h3>
            <p>
              These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Purpose</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Provider</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Expiry</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">theme_preference</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Stores user's theme preference (light/dark)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">nophonezone.app</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">1 year</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">language</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Stores user's language preference</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">nophonezone.app</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3>Analytics and Customization Cookies</h3>
            <p>
              These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Purpose</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Provider</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Expiry</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">_ga</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Used to distinguish users</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Google Analytics</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">2 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">_gid</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Used to distinguish users</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Google Analytics</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2>How Can You Control Cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie table above.
            </p>
            <p>
              You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
            </p>
            
            <h2>Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            <p>
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please contact us at:
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
