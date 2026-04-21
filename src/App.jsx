import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import FloatingBubbles from './components/FloatingBubbles';
import Envelope from './components/Envelope';
import HeroSection from './components/HeroSection';
import FlipCard from './components/FlipCard';
import MemoryTimeline from './components/MemoryTimeline';
import HeartsGame from './components/HeartsGame';
import EasterEgg from './components/EasterEgg';

/**
 * App - Main application component
 *
 * Flow:
 * 1. Envelope screen → user clicks to open
 * 2. Confetti burst + transition
 * 3. Main content fades in:
 *    - Hero greeting
 *    - Flip card
 *    - Memory timeline
 *    - Footer with Easter egg
 * 4. Hidden hearts game runs throughout
 * 5. Easter egg in footer (click heart 3x)
 */
function App() {
  // Controls whether the main content is visible (after envelope is opened)
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* ===== BACKGROUND ELEMENTS (always visible) ===== */}
      <FloatingBubbles />

      {/* ===== ENVELOPE OPENING SCREEN ===== */}
      {!isRevealed && (
        <Envelope onOpen={() => setIsRevealed(true)} />
      )}

      {/* ===== MAIN WEBSITE CONTENT ===== */}
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {/* Hearts mini-game (counter + hidden hearts) */}
            <HeartsGame />

            {/* Hero greeting section */}
            <HeroSection />

            {/* Decorative divider */}
            <div className="section-container py-0">
              <div className="section-divider">
                <span>✨</span>
              </div>
            </div>

            {/* 3D Flip Birthday Card */}
            <FlipCard />

            {/* Decorative divider */}
            <div className="section-container py-0">
              <div className="section-divider">
                <span>💫</span>
              </div>
            </div>

            {/* Memory Timeline */}
            <MemoryTimeline />

            {/* Footer with Easter Egg */}
            <EasterEgg />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
