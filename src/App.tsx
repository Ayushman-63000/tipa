import { useEffect } from 'react';
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
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
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
  }, []);

  return (
    <div className="min-h-screen font-sans bg-cream text-forest selection:bg-fresh-accent/30">
      <CustomCursor />
      <Navbar />
      <main>
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
  )
}

export default App;
