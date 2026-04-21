# 🎂 Romantic Happy Birthday Website Template

A beautiful, highly interactive, and romantic "Happy Birthday" single-page application built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Perfect for making your partner feel special on their big day! ✨

---

## ✨ Features

- **💌 Interactive Envelope**: A digital envelope that opens on click with a smooth animation and a full-screen confetti burst.
- **🃏 3D Flip Card**: A digital birthday card that flips when tapped, featuring beautiful typography on the front and a heartfelt message on the back.
- **📸 Memory Timeline**: A vertical timeline that reveals polaroid-style photos and captions as you scroll down.
- **💖 Find the Hearts Mini-game**: 5 hidden glowing hearts are scattered across the site. Finding all 5 unlocks a special reward coupon/video.
- **🤫 Secret Easter Egg**: A hidden feature in the footer. Clicking the heart 3 times reveals a secret modal with a private love letter and a Spotify/YouTube embed of your favorite song.
- **🫧 Ambient Background**: Smooth, slow-moving floating bubbles and sparkles that make the site feel alive and premium.
- **📱 Fully Responsive**: Optimized for all devices, from desktop to mobile (Samsung S23 Ultra, iPhone, etc.).

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Extras**: [react-confetti](https://github.com/vorth/react-confetti) for celebration effects.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to see the magic.

---

## ✏️ How to Customize (Personalization Guide)

I've designed this to be very easy to edit. Look for the `✏️ CUSTOMIZE` comments in the code!

### 1. Change the Partner's Name
Open `src/components/HeroSection.jsx` and `src/components/FlipCard.jsx`. Change the `partnerName` variable:
```javascript
const partnerName = 'Your Partner's Name';
```

### 2. Add Your Own Photos 📸
1. Save your images in the `src/assets/` folder.
2. Open `src/components/MemoryTimeline.jsx`.
3. Import your image and add it to the `memories` array:
```javascript
import photo1 from '../assets/my-photo.jpg';

const memories = [
  {
    date: 'January 2024',
    caption: 'Our first trip together!',
    imageUrl: photo1,
    side: 'left',
  },
  // ... add more
];
```

### 3. Edit the Birthday Message ✍️
Open `src/components/FlipCard.jsx` and edit the `birthdayMessage` variable.

### 4. Setup the Secret Song 🎵
Open `src/components/EasterEgg.jsx` and change the `songEmbedUrl` to your favorite Spotify or YouTube embed link.

### 5. Change the Heart Game Reward 🎁
Open `src/components/HeartsGame.jsx` to change the coupon text or add a video message URL.

---

## 📦 Deployment

The easiest way to deploy is using **Vercel** or **Netlify**:
1. Push your code to GitHub.
2. Connect your repo to Vercel/Netlify.
3. They will automatically build and host it for you for free!

---

## 💖 Made with Love
This template was created to help people express their love in a unique, digital way. If you find it useful, feel free to give it a ⭐ on GitHub!

**Happy Birthday!** 🎉💕
