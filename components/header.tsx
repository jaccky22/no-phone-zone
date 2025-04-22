import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-8 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-extrabold text-xl md:text-2xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300">No-Phone Zone</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/#quiz-section" className="text-sm font-medium hover:text-primary transition-colors">
            Phone Addiction Quiz
          </Link>
          <Link href="/#chatbot-section" className="text-sm font-medium hover:text-primary transition-colors">
            AI Advisor
          </Link>
          <Link href="/#challenge-section" className="text-sm font-medium hover:text-primary transition-colors">
            Join Challenge
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            My Dashboard
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link 
            href="/#challenge-section" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Take the Challenge
          </Link>
        </div>
      </div>
    </header>
  );
}
