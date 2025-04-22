# No-Phone Zone Ideas 📱❌

A one-page, interactive website designed to help users reduce their phone usage through engaging tools and features. The site combines AI-powered advice, interactive quizzes, and real-time challenge tracking to create a compelling user experience.

## 🌟 Features

- **AI-Powered Chatbot**: Get personalized advice on reducing phone usage with our intelligent AI assistant.
- **Interactive Quiz**: Discover your phone addiction level with our 10-question assessment quiz.
- **Live Challenge Tracker**: Join thousands worldwide in the No-Phone Challenge and track global participation in real-time.
- **Challenge Tiers**: Choose from Beginner, Intermediate, or Advanced challenge levels based on your goals.
- **Responsive Design**: Fully responsive, mobile-first design for a seamless experience on all devices.

## 🛠️ Tech Stack

- **Frontend**: React + Next.js 15
- **UI**: Tailwind CSS + ShadCN UI components
- **Backend**: Supabase (BaaS)
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm, yarn, or pnpm
- Supabase account

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/no-phone-zone.git
cd no-phone-zone
```

2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Set up Supabase

Follow the instructions in `docs/supabase-setup.md` to set up your Supabase project with the required tables and security policies.

5. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📊 Project Structure

```
no-phone-zone/
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with providers
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── challenge-form.tsx    # Challenge signup form
│   ├── challenge-section.tsx # Challenge section with tiers
│   ├── challenge-tracker.tsx # Real-time participant counter
│   ├── chatbot-section.tsx   # AI chatbot interface
│   ├── features-section.tsx  # Features showcase
│   ├── footer.tsx            # Site footer
│   ├── header.tsx            # Site header/navigation
│   ├── hero-section.tsx      # Hero banner
│   └── quiz-section.tsx      # Interactive quiz
├── context/              # React context providers
│   └── supabase-provider.tsx # Supabase auth context
├── docs/                 # Documentation
│   └── supabase-setup.md     # Supabase setup guide
├── lib/                  # Utility functions
│   └── supabase.ts           # Supabase client and helpers
└── public/               # Static assets
```

## 🔄 Supabase Integration

This project uses Supabase for:

1. **Real-time Database**: Tracking challenge participants and quiz results
2. **Authentication**: Optional user authentication for saving progress
3. **Edge Functions**: For AI chatbot integration with OpenAI

See `docs/supabase-setup.md` for detailed setup instructions.

## 📱 Features Implementation

### Challenge Tracker

The challenge tracker uses Supabase's real-time subscriptions to update the participant count whenever someone joins the challenge.

### Interactive Quiz

The quiz component calculates a phone addiction score based on user responses and provides personalized feedback.

### AI Chatbot

The chatbot interface connects to OpenAI's API via Supabase Edge Functions to provide personalized advice on reducing phone usage.

## 🚢 Deployment

The application is designed to be deployed on Vercel:

```bash
vercel
```

Make sure to add your environment variables in the Vercel dashboard.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [ShadCN UI](https://ui.shadcn.com)
- [Supabase](https://supabase.com)
- [Vercel](https://vercel.com)

## 💰 Monetization

This project is monetized via Google AdSense. To configure:

1. In `app/layout.tsx`, replace `YOUR_AD_SLOT` with your actual ad slot ID.
2. Ensure `data-ad-client` matches your publisher ID `pub-5760370419762495`.
3. Ads will display in the left and right sidebars with responsive Tailwind styling.
