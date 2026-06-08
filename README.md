# Shivam Jawaliya — Portfolio

Personal portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Deploy-ready for Vercel.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (dark mode, glassmorphism)
- **Animations:** Framer Motion
- **Icons:** Lucide React + React Icons
- **Forms:** React Hook Form
- **Email:** EmailJS (contact form)

## Getting Started

```bash
# Install dependencies
npm install

# Copy and fill in environment variables
cp .env.local.example .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact Form Setup (EmailJS)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a service and email template
3. Add your credentials to `.env.local`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

4. Uncomment the EmailJS send call in `components/Contact.tsx`

## Deploy to Vercel

```bash
npx vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). Add the three `NEXT_PUBLIC_EMAILJS_*` env vars in the Vercel dashboard.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── tailwind.config.ts
├── next.config.js
└── package.json
```
