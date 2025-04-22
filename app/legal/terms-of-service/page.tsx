"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function TermsOfService() {
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
                <span>Terms of Service</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-muted-foreground">Last updated: April 20, 2025</p>
            
            <h2>Introduction</h2>
            <p>
              Welcome to No-Phone Zone. These terms and conditions outline the rules and regulations for the use of our website and services.
            </p>
            <p>
              By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use No-Phone Zone if you do not accept all of the terms and conditions stated on this page.
            </p>
            
            <h2>License to Use</h2>
            <p>
              Unless otherwise stated, No-Phone Zone and/or its licensors own the intellectual property rights for all material on No-Phone Zone. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul>
              <li>Republish material from this website</li>
              <li>Sell, rent or sub-license material from this website</li>
              <li>Reproduce, duplicate or copy material from this website</li>
              <li>Redistribute content from No-Phone Zone (unless content is specifically made for redistribution)</li>
            </ul>
            
            <h2>User Content</h2>
            <p>
              In these terms and conditions, "User Content" shall mean any audio, video, text, images or other material you choose to display on this website. By displaying your User Content, you grant No-Phone Zone a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
            </p>
            <p>
              Your User Content must be your own and must not be infringing on any third party's rights. No-Phone Zone reserves the right to remove any of your content from this website at any time without notice.
            </p>
            
            <h2>No Warranties</h2>
            <p>
              This website is provided "as is," with all faults, and No-Phone Zone makes no express or implied representations or warranties, of any kind related to this website or the materials contained on this website.
            </p>
            <p>
              Additionally, nothing contained on this website shall be construed as providing advice to you. The information provided on this website is for general informational purposes only and should not be relied upon as medical, psychological, or professional advice.
            </p>
            
            <h2>Limitation of Liability</h2>
            <p>
              In no event shall No-Phone Zone, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort or otherwise, and No-Phone Zone, including its officers, directors and employees shall not be liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website.
            </p>
            
            <h2>Indemnification</h2>
            <p>
              You hereby indemnify to the fullest extent No-Phone Zone from and against any and all liabilities, costs, demands, causes of action, damages and expenses (including reasonable attorney's fees) arising out of or in any way related to your breach of any of the provisions of these terms.
            </p>
            
            <h2>Severability</h2>
            <p>
              If any provision of these terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein.
            </p>
            
            <h2>Variation of Terms</h2>
            <p>
              No-Phone Zone is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review such terms on a regular basis to ensure you understand all terms and conditions governing use of this website.
            </p>
            
            <h2>Assignment</h2>
            <p>
              No-Phone Zone shall be permitted to assign, transfer, and subcontract its rights and/or obligations under these terms without any notification or consent required. However, you shall not be permitted to assign, transfer, or subcontract any of your rights and/or obligations under these terms.
            </p>
            
            <h2>Entire Agreement</h2>
            <p>
              These terms, including any legal notices and disclaimers contained on this website, constitute the entire agreement between No-Phone Zone and you in relation to your use of this website, and supersede all prior agreements and understandings with respect to the same.
            </p>
            
            <h2>Governing Law & Jurisdiction</h2>
            <p>
              These terms will be governed by and construed in accordance with the laws of the jurisdiction in which No-Phone Zone operates, and you submit to the non-exclusive jurisdiction of the courts located in that jurisdiction for the resolution of any disputes.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p>
              Email: terms@nophonezone.app<br />
              Address: 123 Digital Wellbeing Street, Mindful City, MC 12345
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
