import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-blue-500 opacity-5 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-purple-500 opacity-5 blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        {/* Logo and description with gradient border */}
        <div className="flex flex-col md:flex-row justify-between mb-12 pb-10 border-b border-gray-200/30">
          <div className="md:max-w-sm mb-8 md:mb-0">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-2xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">No-Phone Zone</span>
              </h2>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Helping you break free from phone addiction and reclaim your time and attention in a world of constant digital distractions.
            </p>
          </div>
          
          {/* Newsletter signup */}
          <div className="md:max-w-sm">
            <h3 className="text-sm font-medium mb-4">Join our community</h3>
            <p className="text-sm text-muted-foreground mb-4">Get tips and updates on digital wellbeing delivered to your inbox.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 text-sm rounded-l-md border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="px-4 py-2 text-sm font-medium text-white rounded-r-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Links section with cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/20 shadow-sm hover:shadow-md transition-all duration-200">
            <h3 className="text-sm font-medium mb-4 pb-2 border-b border-gray-200/30">Quick Links</h3>
            <nav className="grid grid-cols-1 gap-2 text-sm">
              <Link href="/#quiz-section" className="hover:text-primary transition-colors flex items-center">
                <span className="mr-2 text-primary">→</span> Phone Addiction Quiz
              </Link>
              <Link href="/#chatbot-section" className="hover:text-primary transition-colors flex items-center">
                <span className="mr-2 text-primary">→</span> AI Advisor
              </Link>
              <Link href="/#challenge-section" className="hover:text-primary transition-colors flex items-center">
                <span className="mr-2 text-primary">→</span> No-Phone Challenge
              </Link>
              <Link href="/#reclaim-time-section" className="hover:text-primary transition-colors flex items-center">
                <span className="mr-2 text-primary">→</span> Reclaim Your Time
              </Link>
            </nav>
          </div>
          
          {/* Resources */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/20 shadow-sm hover:shadow-md transition-all duration-200">
            <h3 className="text-sm font-medium mb-4 pb-2 border-b border-gray-200/30">Resources</h3>
            <nav className="grid grid-cols-1 gap-2 text-sm">
              <Link href="/resources/digital-wellbeing-tips" className="hover:text-primary transition-colors flex items-center">
                <span className="mr-2 text-primary">→</span> Digital Wellbeing Tips
              </Link>
              <Link href="/resources/research-and-studies" className="hover:text-primary transition-colors flex items-center">
                <span className="mr-2 text-primary">→</span> Research & Studies
              </Link>
              <Link href="/resources/community-stories" className="hover:text-primary transition-colors flex items-center">
                <span className="mr-2 text-primary">→</span> Community Stories
              </Link>
            </nav>
          </div>
          
          {/* Policies */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/20 shadow-sm hover:shadow-md transition-all duration-200">
            <h3 className="text-sm font-medium mb-4 pb-2 border-b border-gray-200/30">Policies</h3>
            <nav className="grid grid-cols-1 gap-2 text-sm">
              <Link href="/legal" className="hover:text-primary transition-colors flex items-center">
                <span className="mr-2 text-primary">→</span> Legal Hub
              </Link>
              <Link href="/legal/privacy-policy" className="hover:text-primary transition-colors flex items-center">
                <span className="mr-2 text-primary">→</span> Privacy Policy
              </Link>
              <Link href="/legal/terms-of-service" className="hover:text-primary transition-colors flex items-center">
                <span className="mr-2 text-primary">→</span> Terms of Service
              </Link>
              <Link href="/legal/cookie-policy" className="hover:text-primary transition-colors flex items-center">
                <span className="mr-2 text-primary">→</span> Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
        
        {/* Bottom section with copyright and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200/30">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} No-Phone Zone. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
