# 🏋️ FIT-LOG — Workout & Fitness Tracker

A modern, responsive workout and fitness tracker built with **Next.js** and **React Context API**. Discover workouts, create daily plans, save workouts for later, and track completed activities.

## 🔗 Links

- **Live Demo:** https://fit-log-mu-sepia.vercel.app/
- **GitHub Repository:** https://github.com/shoabul/fit-log

## ✨ Features

- 🏋️ **Workout Discovery** — Browse and filter available workouts.
- 📅 **Today's Plan** — Add workouts to your daily workout plan.
- 📌 **Save for Later** — Bookmark workouts for future sessions.
- 📊 **Progress Tracking** — Mark workouts as completed and track your progress.
- 💾 **Persistent Data** — Workout data is stored using React Context API and `localStorage`.
- 📱 **Responsive Design** — Works across mobile, tablet, and desktop devices.

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Library:** React 19
- **State Management:** React Context API
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Storage:** LocalStorage

## 📁 Project Structure

    fit-log/
    ├── public/
    │   ├── banner.png
    │   └── logo.png
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   ├── Footer.jsx
    │   │   │   ├── Hero.jsx
    │   │   │   ├── Nav.jsx
    │   │   │   ├── SaveForLatterButton.jsx
    │   │   │   ├── TodaysPlanButton.jsx
    │   │   │   ├── WorkoutDataCard.jsx
    │   │   │   └── WorkoutFilters.jsx
    │   │   ├── context/
    │   │   │   └── WorkoutContext.jsx
    │   │   ├── my-plan/
    │   │   │   └── page.jsx
    │   │   ├── workouts/
    │   │   │   └── [id]/
    │   │   │       └── page.jsx
    │   │   ├── globals.css
    │   │   ├── layout.jsx
    │   │   ├── loading.jsx
    │   │   ├── not-found.jsx
    │   │   └── page.jsx
    │   └── lib/
    │       └── fetchApi.js
    ├── package.json
    └── README.md

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js 18+** and **npm** installed.

### Installation

    git clone https://github.com/shoabul/fit-log.git
    cd fit-log
    npm install
    npm run dev

Open `http://localhost:3000` in your browser.

### Build for Production

    npm run build

### Start Production Server

    npm start
