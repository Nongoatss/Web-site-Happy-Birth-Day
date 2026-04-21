import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * HeartsGame - Find the Hidden Hearts mini-game
 * 5 hidden glowing hearts scattered across the page.
 * Counter shown at the top. Finding all 5 unlocks a secret reward section.
 *
 *  CUSTOMIZE: Change the coupon text, reward message, or video URL.
 */

//  CHANGE THIS to your own reward/coupon text
const rewardTitle = '🎉 You Found All The Hearts! 🎉';
const couponText = '🤗 Free 1 Hug Coupon 🤗';
const couponSubtext = 'Redeemable anytime, anywhere. No expiration date. ♾️';
// Add a YouTube or video embed URL here (leave empty to show coupon only)
const videoUrl = '';

/**
 * HeartCounter - Fixed counter display at the top of the screen
 */
const HeartCounter = ({ found, total }) => (
  <motion.div
    className="fixed top-4 right-4 glass rounded-full px-5 py-2.5 flex items-center gap-2"
    style={{ zIndex: 40 }}
    initial={{ opacity: 0, y: -30, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.5 }}
  >
    <motion.span
      className="text-lg"
      animate={{ scale: found > 0 ? [1, 1.4, 1] : 1 }}
      transition={{ duration: 0.3 }}
      key={found}
    >
      💖
    </motion.span>
    <span
      className="font-display text-sm font-semibold"
      style={{ color: '#e84985' }}
    >
      {found}/{total}
    </span>
  </motion.div>
);

/**
 * HiddenHeart - Individual clickable heart
 */
const HiddenHeart = ({ heart, onFound }) => {
  const [collected, setCollected] = useState(false);

  const handleClick = useCallback(() => {
    if (!collected) {
      setCollected(true);
      onFound(heart.id);
    }
  }, [collected, heart.id, onFound]);

  return (
    <AnimatePresence>
      {!collected && (
        <motion.button
          className="hidden-heart"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
          }}
          onClick={handleClick}
          aria-label="Hidden heart"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 2,
            transition: { duration: 0.5 },
          }}
          whileHover={{
            opacity: 0.7,
            scale: 1.4,
          }}
          transition={{ duration: 0.5, delay: heart.delay }}
        >
          💗
        </motion.button>
      )}
    </AnimatePresence>
  );
};

/**
 * RewardModal - Unlocked when all hearts are found
 */
const RewardModal = ({ onClose }) => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center p-4"
    style={{ zIndex: 55, background: 'rgba(78, 42, 72, 0.4)', backdropFilter: 'blur(8px)' }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className="relative rounded-3xl p-10 max-w-lg w-full text-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #fff 0%, #fef1f5 50%, #f5f0ff 100%)',
        border: '2px solid rgba(249, 160, 191, 0.3)',
        boxShadow: '0 25px 80px rgba(244, 114, 160, 0.2)',
      }}
      initial={{ scale: 0.6, y: 60, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.6, y: 60, opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Sparkle decorations */}
      <motion.span
        className="absolute top-3 left-6 text-xl"
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ✨
      </motion.span>
      <motion.span
        className="absolute top-8 right-8 text-lg"
        animate={{ rotate: [0, -360], scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        💫
      </motion.span>

      <h3
        className="font-display text-2xl font-bold mb-4"
        style={{
          background: 'linear-gradient(135deg, #e84985, #a87bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {rewardTitle}
      </h3>

      {/* Video embed (if URL provided) */}
      {videoUrl && (
        <div className="mb-6 rounded-xl overflow-hidden">
          <iframe
            src={videoUrl}
            title="Secret Video Message"
            className="w-full aspect-video rounded-xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* Coupon card */}
      <motion.div
        className="rounded-2xl p-6 mb-6"
        style={{
          background: 'linear-gradient(135deg, rgba(249,160,191,0.15), rgba(196,171,253,0.15))',
          border: '2px dashed rgba(232, 73, 133, 0.3)',
        }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(249,160,191,0.1)',
            '0 0 40px rgba(249,160,191,0.2)',
            '0 0 20px rgba(249,160,191,0.1)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="font-script text-3xl mb-2" style={{ color: '#e84985' }}>
          {couponText}
        </p>
        <p className="font-body text-xs" style={{ color: '#a87bfa' }}>
          {couponSubtext}
        </p>
      </motion.div>

      {/* Close button */}
      <motion.button
        className="rounded-full px-8 sm:px-14 py-4 sm:py-5 font-body text-lg sm:text-xl font-semibold text-white cursor-pointer border-none max-w-full"
        style={{
          background: 'linear-gradient(135deg, #f472a0, #a87bfa)',
          boxShadow: '0 4px 20px rgba(244, 114, 160, 0.3)',
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClose}
      >
        I Love It! 💕
      </motion.button>
    </motion.div>
  </motion.div>
);

/**
 * HeartsGame - Main component managing game state
 */
const HeartsGame = () => {
  const [foundHearts, setFoundHearts] = useState(new Set());
  const [showReward, setShowReward] = useState(false);
  // gameKey is used to force remount of HiddenHeart components on reset
  const [gameKey, setGameKey] = useState(0);
  const totalHearts = 5;

  // Generate random heart positions — re-randomizes on each game reset
  const hearts = useMemo(() => {
    // Define zones so hearts don't cluster together
    const zones = [
      { xMin: 3, xMax: 25, yMin: 10, yMax: 35 },   // Top-left
      { xMin: 70, xMax: 95, yMin: 10, yMax: 35 },   // Top-right
      { xMin: 3, xMax: 25, yMin: 40, yMax: 70 },    // Middle-left
      { xMin: 70, xMax: 95, yMin: 40, yMax: 70 },   // Middle-right
      { xMin: 30, xMax: 65, yMin: 70, yMax: 90 },   // Bottom-center
    ];
    return zones.map((zone, i) => ({
      id: i,
      x: Math.floor(Math.random() * (zone.xMax - zone.xMin) + zone.xMin),
      y: Math.floor(Math.random() * (zone.yMax - zone.yMin) + zone.yMin),
      delay: 0.2 + i * 0.3,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameKey]);

  const handleFoundHeart = useCallback(
    (id) => {
      setFoundHearts((prev) => {
        const next = new Set(prev);
        next.add(id);
        // Check if all hearts found
        if (next.size === totalHearts) {
          setTimeout(() => setShowReward(true), 800);
        }
        return next;
      });
    },
    [totalHearts]
  );

  // Reset the game — clear found hearts and remount heart components
  const handleCloseReward = useCallback(() => {
    setShowReward(false);
    setFoundHearts(new Set());
    setGameKey((prev) => prev + 1);
  }, []);

  return (
    <>
      {/* Heart counter display */}
      <HeartCounter found={foundHearts.size} total={totalHearts} />

      {/* Hidden hearts scattered across the page */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 10 }}>
        <div className="pointer-events-auto">
          {hearts.map((heart) => (
            <HiddenHeart
              key={`${gameKey}-${heart.id}`}
              heart={heart}
              onFound={handleFoundHeart}
            />
          ))}
        </div>
      </div>

      {/* Reward modal */}
      <AnimatePresence>
        {showReward && (
          <RewardModal onClose={handleCloseReward} />
        )}
      </AnimatePresence>
    </>
  );
};

export default HeartsGame;
