import { HeroSection } from "@/components/HeroSection";
import { MarqueeBar } from "@/components/MarqueeBar";
import { PackagesSection } from "@/components/PackagesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { SpecialOffersSection } from "@/components/SpecialOffersSection";
import { BlogSection } from "@/components/BlogSection";
import { CTASection } from "@/components/CTASection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--color-cream)] overflow-x-hidden selection:bg-[var(--color-gold)]/30 selection:text-[var(--color-green-dark)]">
      <HeroSection />
      <MarqueeBar />
      <PackagesSection />
      <WhyUsSection />
      <HowItWorks />
      <SpecialOffersSection />
      <BlogSection />
      <CTASection />
      <TestimonialsSection />
    </main>
  );
}
