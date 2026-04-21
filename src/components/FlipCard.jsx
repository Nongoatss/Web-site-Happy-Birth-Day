import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * FlipCard - Interactive 3D flip birthday card
 * Front: Beautiful birthday greeting typography
 * Back: Heartfelt birthday message
 *
 * CUSTOMIZE: Change partnerName and the message on the back.
 */

//  CHANGE THIS to your partner's name
const partnerName = 'My Love';

//  CHANGE THIS to your personal birthday message
const birthdayMessage = `Every day with you feels like a beautiful dream I never want to wake up from.

On this special day, I want you to know how grateful I am that the universe brought us together.

You are my sunshine, my comfort, and my greatest adventure.

Happy Birthday, my love. Here's to many more years of us. 💕`;

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="section-container" id="birthday-card">
      {/* Section header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-script text-xl mb-2" style={{ color: '#e84985' }}>
          A Card For You
        </p>
        <div className="section-divider">
          <span>💌</span>
        </div>
      </motion.div>

      {/* Flip Card Container */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div
          className="relative cursor-pointer"
          style={{
            width: 380,
            maxWidth: '90vw',
            height: 500,
            perspective: 1200,
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              transformStyle: 'preserve-3d',
            }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            {/* ===== FRONT OF CARD ===== */}
            <div
              className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-8 overflow-hidden"
              style={{
                backfaceVisibility: 'hidden',
                background: 'linear-gradient(160deg, #fff 0%, #fef1f5 40%, #f5f0ff 100%)',
                border: '2px solid rgba(249, 160, 191, 0.3)',
                boxShadow: '0 20px 60px rgba(244, 114, 160, 0.12), 0 4px 20px rgba(196, 171, 253, 0.08)',
              }}
            >
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 text-2xl opacity-40">✿</div>
              <div className="absolute top-4 right-4 text-2xl opacity-40">✿</div>
              <div className="absolute bottom-4 left-4 text-2xl opacity-40">✿</div>
              <div className="absolute bottom-4 right-4 text-2xl opacity-40">✿</div>

              {/* Main content */}
              <motion.div
                className="text-center"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span className="text-5xl mb-4 block">🎂</span>
                <h2
                  className="font-display text-3xl font-bold mb-3 leading-tight"
                  style={{
                    background: 'linear-gradient(135deg, #e84985, #a87bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Happy Birthday
                </h2>
                <p
                  className="font-script text-4xl mt-2"
                  style={{ color: '#e84985' }}
                >
                  {partnerName}
                </p>
              </motion.div>

              {/* Tap to flip hint */}
              <motion.p
                className="absolute bottom-8 text-xs tracking-widest uppercase"
                style={{ color: '#c4abfd' }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Tap to flip →
              </motion.p>
            </div>

            {/* ===== BACK OF CARD ===== */}
            <div
              className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-8 overflow-hidden"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                background: 'linear-gradient(160deg, #f5f0ff 0%, #fef1f5 60%, #fefcf7 100%)',
                border: '2px solid rgba(196, 171, 253, 0.3)',
                boxShadow: '0 20px 60px rgba(196, 171, 253, 0.12), 0 4px 20px rgba(244, 114, 160, 0.08)',
              }}
            >
              {/* Decorative border */}
              <div
                className="absolute inset-3 rounded-xl pointer-events-none"
                style={{
                  border: '1px dashed rgba(196, 171, 253, 0.3)',
                }}
              />

              {/* Message content */}
              <div className="text-center max-w-xs relative z-10">
                <span className="text-3xl mb-4 block">💕</span>
                <p
                  className="font-body text-sm leading-relaxed whitespace-pre-line"
                  style={{ color: '#6b4c6e' }}
                >
                  {birthdayMessage}
                </p>
                <p
                  className="font-script text-xl mt-6"
                  style={{ color: '#e84985' }}
                >
                  With all my love ♥
                </p>
              </div>

              {/* Tap to flip back hint */}
              <motion.p
                className="absolute bottom-8 text-xs tracking-widest uppercase"
                style={{ color: '#f9a0bf' }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ← Tap to flip back
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FlipCard;
