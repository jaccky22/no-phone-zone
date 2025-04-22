import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { QuizSection } from "@/components/quiz-section";
import { ChatbotSection } from "@/components/chatbot-section";
import { ChallengeSection } from "@/components/challenge-section";
import { ReclaimTimeSection } from "@/components/reclaim-time-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <section id="quiz-section">
          <QuizSection />
        </section>
        <section id="chatbot-section">
          <ChatbotSection />
        </section>
        <section id="challenge-section">
          <ChallengeSection />
        </section>
        <section id="reclaim-time-section">
          <ReclaimTimeSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
