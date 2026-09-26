# 🏋️‍♂️ FIT-LOG — Workout & Fitness Tracker

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A modern, responsive web application built with **Next.js** and **React Context API** designed to help users discover workouts, plan daily fitness routines, and track completed activities.

---

## 🔗 Links

* **Live Demo:** [https://fit-log-mu-sepia.vercel.app/](https://fit-log-mu-sepia.vercel.app/) *(Replace with your deployed URL)*
* **GitHub Repository:** [https://github.com/shoabul/fit-log](https://github.com/shoabul/fit-log)[cite: 1]

---

## ✨ Features

* **🏋️ Workout Discovery & Filtering:** Browse workout routines with multi-criteria filtering (`WorkoutFilters.jsx`)[cite: 1].
* **📅 Today's Plan Management:** Add routines directly to your daily plan and manage active workouts[cite: 1].
* **📌 Save for Later:** Bookmark workout routines for future sessions with custom local persistence (`SaveForLatterButton.jsx`)[cite: 1].
* **📊 Progress & Completion Tracking:** Mark workouts as completed and keep track of completed metrics[cite: 1].
* **🔄 Persistent State:** Utilizes React Context combined with `localStorage` (`fit_log_myPlan`, `fit_log_savedWorkouts`, `fit_log_completedWorkouts`) so data persists across browser sessions[cite: 1].
* **📱 Responsive Design:** Fully optimized for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)[cite: 1]
* **Library:** [React](https://reactjs.org/)[cite: 1]
* **State Management:** React Context API + LocalStorage[cite: 1]
* **Styling:** Tailwind CSS[cite: 1]
* **Icons & UI Components:** Lucide / Custom Components

---

## 📁 Project Structure

```text
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
│   │   ├── workouts/[id]/
│   │   │   └── page.jsx
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   ├── loading.jsx
│   │   ├── not-found.jsx
│   │   └── page.jsx
│   └── lib/
│       └── fetchApi.js
├── package.json
└── README.md
```[cite: 1]

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18 or higher) and npm/yarn installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/shoabul/fit-log.git](https://github.com/shoabul/fit-log.git)
   cd fit-log
   ```[cite: 1]

2. **Install dependencies:**
   ```bash
   npm install