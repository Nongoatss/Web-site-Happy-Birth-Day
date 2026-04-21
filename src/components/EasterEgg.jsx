import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * EasterEgg - Hidden Easter Egg triggered by clicking the heart in the footer 3 times
 * Reveals a secret modal with a Spotify/YouTube embed and a personal love letter.
 *
 *  CUSTOMIZE:
 *   - Change `songEmbedUrl` to your favorite song's embed URL
 *   - Change `loveLetter` to your own personal message
 */

//  CHANGE THIS to your song embed URL
// For Spotify: https://open.spotify.com/embed/track/YOUR_TRACK_ID
// For YouTube: https://www.youtube.com/embed/YOUR_VIDEO_ID
const songEmbedUrl = 'https://www.youtube.com/embed/pk4q4-U891E?si=LSDCTLWqMsWseIHO';

// CHANGE THIS to your personal love letter
const loveLetter = `My Dearest Love,

If you're reading this, it means you've discovered my little secret — just like how you discovered the secret to making my heart beat faster every single day.

From the very first moment I saw you, I knew my life was about to change forever. You brought colors to my world I didn't even know existed. Every laugh we share, every quiet moment together, every silly argument — they're all precious to me.

You are not just my partner; you are my best friend, my confidant, my home. No matter where life takes us, as long as I'm with you, I know I'm exactly where I belong.

Thank you for being you. Thank you for choosing me. Thank you for making every ordinary day feel extraordinary.

I love you more than words could ever express — but I'll spend a lifetime trying anyway.

Forever & Always Yours ♾️💕`;

const EasterEgg = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Handle heart clicks — open modal on 3rd click
  const handleHeartClick = useCallback(() => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 3) {
      setShowModal(true);
      setClickCount(0); // reset for re-trigger
    }
  }, [clickCount]);

  return (
    <>
      {/* ===== FOOTER ===== */}
      <footer
        className="text-center py-8 relative"
        style={{ zIndex: 5 }}
        id="footer"
      >
        <div className="section-divider mb-6">
          <span>∞</span>
        </div>
        <p className="font-body text-sm" style={{ color: '#c4abfd' }}>
          Made with{' '}
          <motion.button
            className="inline-block cursor-pointer border-none bg-transparent text-base p-0 align-middle"
            onClick={handleHeartClick}
            whileTap={{ scale: 1.5 }}
            aria-label="Easter egg heart"
            title="Made with love"
          >
            <motion.span
              className="inline-block"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ❤️
            </motion.span>
          </motion.button>
        </p>
        <p
          className="font-script text-xs mt-2"
          style={{ color: 'rgba(196, 171, 253, 0.5)' }}
        >
          For the one who holds my heart
        </p>
      </footer>

      {/* ===== SECRET MODAL ===== */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{
              zIndex: 60,
              background: 'rgba(78, 42, 72, 0.65)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="relative rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
              style={{
                background: 'linear-gradient(160deg, #fff 0%, #fef1f5 40%, #f5f0ff 80%, #fefcf7 100%)',
                border: '2px solid rgba(249, 160, 191, 0.25)',
                boxShadow: '0 30px 100px rgba(232, 73, 133, 0.15), 0 10px 40px rgba(196, 171, 253, 0.1)',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Hide webkit scrollbar */}
              <style>{`.easter-modal::-webkit-scrollbar { display: none; }`}</style>

              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer border-none text-lg"
                style={{
                  background: 'rgba(249, 160, 191, 0.15)',
                  color: '#e84985',
                  zIndex: 2,
                }}
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                ×
              </button>

              <div className="p-8 pb-10">
                {/* Header */}
                <div className="text-center mb-6">
                  <span className="text-4xl block mb-3">
                    🤫
                  </span>
                  <h3
                    className="font-display text-2xl font-bold mb-1"
                    style={{
                      background: 'linear-gradient(135deg, #e84985, #a87bfa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    You Found My Secret!
                  </h3>
                  <p className="font-script text-lg" style={{ color: '#c4abfd' }}>
                    Our Special Song 🎵
                  </p>
                </div>

                {/* Song Embed */}
                {songEmbedUrl && (
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <iframe
                      src={songEmbedUrl}
                      title="Our Song"
                      className="w-full rounded-xl border-none block"
                      style={{ aspectRatio: '16/9' }}
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Love Letter */}
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    border: '1px solid rgba(249, 160, 191, 0.15)',
                  }}
                >
                  <div className="text-center mb-4">
                    <span className="text-2xl">💌</span>
                  </div>
                  <p
                    className="font-body text-sm leading-relaxed whitespace-pre-line"
                    style={{ color: '#6b4c6e' }}
                  >
                    {loveLetter}
                  </p>
                </div>

                {/* Bottom decoration */}
                <div className="text-center mt-6">
                  <p
                    className="font-script text-lg"
                    style={{ color: '#e84985' }}
                  >
                    I love you ♥
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EasterEgg;
