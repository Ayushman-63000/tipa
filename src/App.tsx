import { useEffect } from 'react';
import { MotionConfig, useReducedMotion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import ProblemSection from './components/ProblemSection';
import ProductPortfolio from './components/ProductPortfolio';
import SegmentSelector from './components/SegmentSelector';
import TechnologySection from './components/TechnologySection';
import CinematicBreak from './components/CinematicBreak';
import SuccessStories from './components/SuccessStories';
import WhyChooseTipa from './components/WhyChooseTipa';
import CTASection from './components/CTASection';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [shouldReduceMotion]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen font-sans bg-cream text-forest selection:bg-fresh-accent/30">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <StatsBar />
          <ProblemSection />
          <ProductPortfolio />
          <SegmentSelector />
          <TechnologySection />
          <CinematicBreak />
          <SuccessStories />
          <WhyChooseTipa />
          <CTASection />
          <Resources />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App;
