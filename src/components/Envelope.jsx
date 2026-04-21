import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';

/**
 * Envelope - Interactive opening animation
 * Displays a centered digital envelope that opens on click,
 * triggers confetti, and reveals the main website content.
 */
const Envelope = ({ onOpen }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    setShowConfetti(true);
    // Stop confetti after a few seconds
    setTimeout(() => setShowConfetti(false), 6000);
    // Notify parent to show main content after envelope animation
    setTimeout(() => onOpen(), 2000);
  };

  return (
    <AnimatePresence>
      {!isOpened ? (
        /* ===== CLOSED ENVELOPE STATE ===== */
        <motion.div
          key="envelope-closed"
          className="fixed inset-0 flex items-center justify-center"
          style={{
            zIndex: 50,
            background: 'linear-gradient(135deg, #fef1f5 0%, #f5f0ff 50%, #fefcf7 100%)',
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          {/* Envelope container */}
          <motion.div
            className="relative cursor-pointer group"
            onClick={handleOpen}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Envelope SVG */}
            <div className="relative" style={{ width: 280, height: 200 }}>
              {/* Envelope body */}
              <svg
                viewBox="0 0 280 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-lg"
              >
                {/* Back of envelope */}
                <rect
                  x="4"
                  y="40"
                  width="272"
                  height="156"
                  rx="8"
                  fill="#fff"
                  stroke="#f9a0bf"
                  strokeWidth="2"
                />
                {/* Envelope flap (top triangle) */}
                <motion.path
                  d="M4 48 L140 130 L276 48"
                  fill="#fef1f5"
                  stroke="#f9a0bf"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  initial={{ d: 'M4 48 L140 130 L276 48' }}
                />
                {/* Top flap */}
                <motion.path
                  d="M4 48 L140 2 L276 48"
                  fill="#fde4ec"
                  stroke="#f9a0bf"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  className="origin-top"
                  animate={{
                    d: ['M4 48 L140 2 L276 48', 'M4 48 L140 8 L276 48', 'M4 48 L140 2 L276 48'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                {/* Heart seal */}
                <motion.text
                  x="140"
                  y="115"
                  textAnchor="middle"
                  fontSize="32"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  💌
                </motion.text>
              </svg>

              {/* Shimmer overlay on hover */}
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s infinite',
                }}
              />
            </div>

            {/* Call to action text */}
            <motion.p
              className="text-center mt-6 font-script text-xl"
              style={{ color: '#e84985' }}
              animate={{ opacity: [0.5, 1, 0.5], y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              ✨ Click to Open ✨
            </motion.p>
          </motion.div>
        </motion.div>
      ) : (
        /* ===== OPENING ENVELOPE ANIMATION ===== */
        <motion.div
          key="envelope-opening"
          className="fixed inset-0 flex items-center justify-center"
          style={{
            zIndex: 50,
            background: 'linear-gradient(135deg, #fef1f5 0%, #f5f0ff 50%, #fefcf7 100%)',
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
        >
          {/* Confetti effect */}
          {showConfetti && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={true}
              numberOfPieces={300}
              colors={['#f9a0bf', '#c4abfd', '#fde68a', '#fcc8da', '#ddd0fe', '#faf0d6', '#ff6b9d']}
              gravity={0.08}
              wind={0.01}
            />
          )}

          {/* Opening heart burst */}
          <motion.div
            className="text-6xl"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: [1, 3, 0], opacity: [1, 1, 0] }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            💕
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Envelope;
