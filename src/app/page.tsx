import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeBar } from "@/components/MarqueeBar";
import { PackagesSection } from "@/components/PackagesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { SpecialOffersSection } from "@/components/SpecialOffersSection";
import { BlogSection } from "@/components/BlogSection";
import { CTASection } from "@/components/CTASection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--color-cream)] overflow-x-hidden selection:bg-[var(--color-gold)]/30 selection:text-[var(--color-green-dark)]">
      {/* 1 */}
      <Navbar />
      {/* 2 */}
      <HeroSection />
      {/* 3 */}
      <MarqueeBar />
      {/* 4 */}
      <PackagesSection />
      {/* 5 */}
      <WhyUsSection />
      {/* 6 */}
      <HowItWorks />
      {/* 7 */}
      <SpecialOffersSection />
      {/* 8 */}
      <BlogSection />
      {/* 9 */}
      <CTASection />
      {/* 10 */}
      <TestimonialsSection />
      {/* 11 */}
      <Footer />
      {/* 12 */}
      <WhatsAppButton />
    </main>
  );
}
