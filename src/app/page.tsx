import { Hero } from '@/components/sections/Hero';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { TechStackMarquee } from '@/components/sections/TechStackMarquee';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaBanner } from '@/components/sections/CtaBanner';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <Hero />
      <ValueProposition />
      <ServicesGrid />
      <ProcessTimeline />
      <TechStackMarquee />
      <FeaturedWork />
      <FaqSection />
      <CtaBanner />
    </div>
  );
}
