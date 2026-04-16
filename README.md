# 🎬 MOVIES - Modern Cinematic Discovery Platform

A high-performance, responsive movie discovery web application built with **React.js** and **Tailwind CSS**. This platform provides a premium user experience for exploring trending movies, searching the TMDB database, and viewing detailed cinematic information.

## 🚀 Live Demo
[Check out the Live App]((https://movieshub-self-xi.vercel.app/))

## ✨ Key Features
* **Dynamic Discovery**: Fetches real-time "Trending" and "Popular" movies directly from the TMDB API.
* **Real-time Search**: Instant search functionality that updates results dynamically as the user types.
* **Cinematic UI/UX**: 
    * Premium Dark Theme using Tailwind's `zinc` color palette.
    * Glassmorphism navigation bar with blur effects.
    * Interactive hover animations and scaling effects for movie posters.
* **Detailed Insights**: Dedicated movie pages featuring backdrops, ratings, release dates, and overviews.
* **Responsive Architecture**: Fully optimized for mobile, tablet, and desktop viewports using CSS Grid and Flexbox.
* **Smart Navigation**: Integrated breadcrumbs and intuitive routing for seamless user flow.

## 🛠️ Technical Stack
* **Framework**: [React.js](https://reactjs.org/) (Functional Components & Hooks)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first styling)
* **Routing**: [React Router v6](https://reactrouter.com/)
* **Data Source**: [TMDB API](https://www.themoviedb.org/documentation/api)
* **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
* **Tooling**: [Vite](https://vitejs.dev/)

## 📁 Project Overview
```text
src/
 ├── components/       # Reusable UI parts (Nav, Hero, Cards, Spinner)
 ├── pages/            # View logic (Home, MoviesPage, SearchPage, MovieDetails)
 ├── context/          # State management (Coming soon: PlaylistContext)
 └── main.jsx          # App routing and entry point
