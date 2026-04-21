import { motion } from 'framer-motion';

/**
 * HeroSection - Main greeting section shown after the envelope opens
 * Beautiful typography with staggered reveal animations.
 *
 *  CUSTOMIZE: Change the greeting text below.
 */

//  CHANGE THIS to your partner's name
const partnerName = 'My Love';

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative"
      id="hero"
      style={{ zIndex: 1 }}
    >
      <div className="text-center px-6">
        {/* Decorative emoji */}
        <motion.div
          className="text-5xl mb-6"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          🎉
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight"
          style={{
            background: 'linear-gradient(135deg, #e84985 0%, #a87bfa 50%, #f472a0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% auto',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            backgroundPosition: ['0% center', '100% center', '0% center'],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.5 },
            y: { duration: 0.8, delay: 0.5 },
            backgroundPosition: { duration: 6, repeat: Infinity, ease: 'linear' },
          }}
        >
          Happy Birthday
        </motion.h1>

        {/* Partner name */}
        <motion.p
          className="font-script text-3xl sm:text-4xl md:text-6xl mb-6"
          style={{ color: '#e84985' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {partnerName}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="font-body text-base md:text-lg max-w-md mx-auto"
          style={{ color: '#a87bfa' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Today is all about celebrating the most amazing person in my world — you ✨
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="font-body text-xs mb-2 tracking-widest uppercase" style={{ color: '#c4abfd' }}>
              Scroll Down
            </p>
            <span className="text-xl" style={{ color: '#f9a0bf' }}>↓</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
