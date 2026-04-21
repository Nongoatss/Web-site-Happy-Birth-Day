import { motion } from 'framer-motion';

/**
 * MemoryTimeline - Scroll-triggered vertical timeline
 * Polaroid-style photo frames that fade in from the sides.
 *
 *  CUSTOMIZE: Replace the placeholder images, dates, and captions below.
 *    Just update the `memories` array with your own data.
 */

//  วิธีการใช้รูปภาพจากในโฟลเดอร์:
// 1. นำรูปภาพที่ต้องการมาใส่ไว้ในโฟลเดอร์ src/assets (เช่น src/assets/photo1.jpg)
// 2. Import รูปภาพมาเก็บไว้ในตัวแปรแบบด้านล่างนี้
import img1 from '../assets/hero.png'; // ตัวอย่างการดึงไฟล์ภาพมาใช้ (แก้ชื่อไฟล์ให้ตรงกับรูปของคุณ)
// import img2 from '../assets/photo2.jpg';
// import img3 from '../assets/photo3.jpg';
import img2 from '../pic/1.jpg';

//  CHANGE THESE to your own memories!
// Each item: { date, caption, imageUrl (or leave empty for placeholder), side: 'left' | 'right' }
const memories = [
  {
    date: 'January 2023',
    caption: 'The day we first met — my world changed forever ✨',
    imageUrl: 'https://img2.pic.in.th/IMG_1522.jpg', //  ใส่เป็น Link Web แบบนี้ก็ได้
    side: 'left',
  },
  {
    date: 'March 2023',
    caption: 'Our first date — I knew you were special 💫',
    imageUrl: img2, //  หรือใช้ตัวแปรรูปภาพที่ Import มาจากโฟลเดอร์แบบนี้ครับ
    side: 'right',
  },
  {
    date: 'June 2023',
    caption: 'That unforgettable summer trip together 🌊',
    imageUrl: '',
    side: 'left',
  },
  {
    date: 'December 2023',
    caption: 'Our first holiday season — magical moments 🎄',
    imageUrl: '',
    side: 'right',
  },
  {
    date: 'Today',
    caption: 'Happy Birthday to the love of my life! 🎂💕',
    imageUrl: '',
    side: 'left',
  },
];

const MemoryTimeline = () => {
  return (
    <section className="section-container relative" id="memory-timeline">
      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="font-display text-3xl font-bold mb-3"
          style={{
            background: 'linear-gradient(135deg, #e84985, #a87bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Our Journey
        </h2>
        <p className="font-script text-xl" style={{ color: '#c4abfd' }}>
          Every moment with you is a treasure
        </p>
        <div className="section-divider">
          <span>📸</span>
        </div>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto px-4">
        {/* Vertical line (Left on mobile, Center on desktop) */}
        <div
          className="absolute left-[36px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2"
          style={{
            background: 'linear-gradient(to bottom, rgba(249,160,191,0.1), rgba(249,160,191,0.4), rgba(196,171,253,0.4), rgba(196,171,253,0.1))',
          }}
        />

        {/* Timeline items */}
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 last:mb-0 ${
              memory.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Polaroid photo card */}
            <div
              className={`w-full md:w-[44%] pl-[60px] md:pl-0 ${
                memory.side === 'left' ? 'md:pr-8' : 'md:pl-8'
              }`}
            >
              <div className="polaroid mx-auto" style={{ maxWidth: 300 }}>
                {/* Photo placeholder - replace src with your image */}
                {memory.imageUrl ? (
                  <img
                    src={memory.imageUrl}
                    alt={memory.caption}
                    className="w-full h-48 object-cover rounded-sm"
                  />
                ) : (
                  <div
                    className="w-full h-48 rounded-sm flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #fef1f5, #f5f0ff, #fefcf7)',
                    }}
                  >
                    <div className="text-center">
                      <span className="text-4xl block mb-2">📷</span>
                      <p className="text-xs" style={{ color: '#c4abfd' }}>
                        Your photo here
                      </p>
                    </div>
                  </div>
                )}
                {/* Caption area */}
                <p
                  className="font-script text-center mt-3 text-sm px-2"
                  style={{ color: '#6b4c6e' }}
                >
                  {memory.caption}
                </p>
              </div>
            </div>

            {/* Dot on timeline (Left offset on mobile, Center on desktop) */}
            <div className="absolute left-[36px] top-6 md:top-auto md:static md:flex md:w-[12%] items-center justify-center -translate-x-1/2 md:translate-x-0" style={{ zIndex: 10 }}>
              <motion.div
                className="w-4 h-4 md:w-5 md:h-5 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #f9a0bf, #c4abfd)',
                  boxShadow: '0 0 12px rgba(249, 160, 191, 0.4)',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    '0 0 12px rgba(249, 160, 191, 0.4)',
                    '0 0 20px rgba(249, 160, 191, 0.6)',
                    '0 0 12px rgba(249, 160, 191, 0.4)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            {/* Date label */}
            <div
              className={`w-full md:w-[44%] mt-6 md:mt-0 pl-[60px] md:pl-0 ${
                memory.side === 'left' ? 'text-left md:pl-4' : 'text-left md:text-right md:pr-4'
              }`}
            >
              <motion.div
                className="inline-block glass rounded-full px-5 py-2"
                whileHover={{ scale: 1.05 }}
              >
                <p
                  className="font-display text-sm font-semibold"
                  style={{ color: '#e84985' }}
                >
                  {memory.date}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemoryTimeline;
