# Be My Valentine 💖

A beautiful, interactive Valentine's Day proposal website for Riya, built with Next.js, featuring smooth animations, engaging interactions, and deeply heartfelt content.

## ✨ Features

### 🏠 Landing Page (/)

- Beautiful hero section with animated elements
- Preview cards showcasing what's inside
- Smooth scroll animations
- Call-to-action buttons

### 💖 Qualities Page (/qualities)

- 8 beautifully animated cards highlighting why Riya is so special
- Each card features unique icons and gradient backgrounds
- Hover animations and interactions
- Personal heartfelt message section
- Direct navigation to the proposal

### 💘 Proposal Page (/proposal)

- **The Big Question**: "Will you be my Valentine?"
- **Interactive Yes Button**: Navigates to celebration page
- **Escaping No Button**: Playfully moves away when hovered/clicked
- Dynamic button sizing (Yes button grows as user tries to click No)
- Funny changing text on No button
- Hints appear after multiple attempts
- Mobile-friendly touch interactions

### 🎉 Celebration Page (/celebration)

- Massive confetti explosion animation (15 seconds!)
- "You Said Yes!" celebration message
- Heartfelt promises and commitments
- Beautiful journey message
- Romantic closing sentiment
- Screenshot-worthy design

### 🎨 Design Features

- **Animated gradient background** that shifts colors
- **Floating hearts, sparkles, and stars** across all pages
- **Professional navbar** with active state indicators
- **Glassmorphism effects** (frosted glass cards)
- **Smooth page transitions**
- **Responsive design** (mobile and desktop)
- **Shadcn/ui components** for professional UI
- **Lucide React icons** throughout
- **Motion animations** powered by Framer Motion

### 🎯 Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (motion library)
- **Shadcn/ui** components
- **Lucide React** icons
- **Canvas Confetti**
- **Google Fonts**: Pacifico (headings) & Nunito (body)

## 🚀 Getting Started

### Development

```bash
bun dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
bun run build
```

### Start Production Server

```bash
bun start
```

## 📁 Project Structure

```
app/
├── page.tsx                  # Landing page
├── qualities/page.tsx        # Why I love Riya page
├── proposal/page.tsx         # The big question with Yes/No
├── celebration/page.tsx      # Success celebration
├── layout.tsx                # Root layout with navbar
├── globals.css               # Global styles & animations
└── components/
    ├── ProposalCard.tsx      # (legacy, now in proposal page)
    └── Celebration.tsx       # (legacy, now in celebration page)

components/
├── Navbar.tsx                # Site navigation
├── BackgroundEffects.tsx     # Animated background elements
└── ui/                       # Shadcn components
    ├── button.tsx
    ├── card.tsx
    └── navigation-menu.tsx

lib/
└── utils.ts                  # Utility functions

public/
└── beautiful girl .jpg       # Riya's photo
```

## 🎭 User Journey

1. **Landing** → User sees the hero section with Riya's photo and heartfelt opening
2. **Qualities** → Explores 8 beautiful cards about why she's so special and loved
3. **Proposal** → The big question with playful No button interaction
4. **Celebration** → Confetti, loving promises, and official Valentine status!

## 💝 Design Philosophy

- **Romantic yet Genuine**: Balances affection with sincere emotion
- **Interactive**: Engages users with beautiful animations
- **Professional**: Clean, modern design following industry standards
- **Responsive**: Works beautifully on all devices
- **Memorable**: Creates a truly unforgettable experience

## 🎨 Color Palette

- Primary: Rose/Pink gradients (#ff0a54, #ff477e, #ff85a1)
- Accents: Purple, Orange, Teal (for quality cards)
- Background: Animated gradient with soft pastels
- Text: Gray-700 for readability

## 📱 Responsive Design

- Desktop: Full animations and effects
- Tablet: Optimized layouts
- Mobile: Touch-friendly interactions, adapted No button behavior

---

Made with all my love ❤️ and endless dedication ✨
