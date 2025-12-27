# SBA 10 - Recipe Discovery App
## Author
**Dewan Mahmud (Rocky)**  
Software Engineer - Per Scholas (MERN Stack)  
Advanced React - SBA 10  
GitHub: https://github.com/DewanTechUS  
LinkedIn: https://www.linkedin.com/in/dewan-mahmud-a579a0265/

A client-side single-page application (SPA) built with React that allows users to discover recipes, browse by category, search by name, view detailed recipe information, and manage a list of favorite recipes.

This project was completed as part of the **Advanced React SBA** and is designed to demonstrate practical understanding of modern React concepts in a clean, maintainable, and resume-ready application.

## Features

- Browse recipes by category
- Search recipes by name
- View detailed recipe information (ingredients & instructions)
- Add and remove recipes from favorites
- Persist favorites using `localStorage`
- Smooth client-side navigation with React Router
- Loading and error feedback for better UX

## Technologies Used

- React (Functional Components)
- React Router (Client-side routing)
- Context API (Global state management)
- Custom Hooks (`useFetch`, `useLocalStorage`)
- JavaScript (ES6+)
- CSS (Global styles in `index.css`)
- TheMealDB API


## State Management & Data Flow

- Local component state is managed with `useState`
- Side effects and API calls are handled with `useEffect`
- Global favorites state is managed using **Context API**
- Favorites are persisted using a custom `useLocalStorage` hook
- API logic is centralized in `endpoints.js` to avoid duplication


## Custom Hooks

### `useFetch`
- Handles API requests
- Manages `loading`, `error`, and `data` states
- Reused across multiple pages

### `useLocalStorage`
- Syncs React state with browser `localStorage`
- Ensures favorites persist across page refreshes


## Routing

The application uses **React Router** with both static and dynamic routes:

- `/` - Home (categories)
- `/category/:categoryName` - Recipes by category
- `/recipe/:recipeId` - Recipe details
- `/favorites` - Favorite recipes
- `/search?query=` - Search results

## Reflection

This project was one of the most challenging and educational experiences in my React learning journey.

I originally started this project on **December 21** with the intention of using **TypeScript**. My goal was to apply best practices and review the entire React course at the same time. However, this led to significant challenges:

- TypeScript configuration issues (`tsconfig` include/input errors)
- Conflicts between `.ts`, `.tsx`, `.js`, and `.jsx`
- Vite and TypeScript compatibility problems
- Entry file mismatches (`main.tsx` vs `main.jsx`)
- Build failures that prevented the app from running

At the same time, I was trying to re-learn the full React curriculum, which caused me to overthink and overcomplicate the project. As a result, I lost a significant amount of time debugging configuration issues instead of building features.

I also struggled with several core React patterns early on:
- Making `useFetch` reusable without causing infinite re-renders
- Managing loading and error states correctly
- Syncing React state with `localStorage` using `useLocalStorage`
- Designing a clean and reusable API layer in `endpoints.js`

After multiple failed attempts-especially on the night of **December 23**-I made a critical decision to **restart the project from scratch using JavaScript instead of TypeScript**. This was a turning point.

By simplifying the stack, I was able to:
- Focus on one concept at a time
- Properly rebuild `useFetch` and `useLocalStorage`
- Centralize API logic cleanly
- Understand data flow and side effects more deeply
- Avoid prop drilling by using Context API
- Build confidence through working, incremental features

This experience taught me that:
- Tooling should support learning, not block it
- Simplicity is often better than overengineering
- Rebuilding is a valid and valuable part of development
- Persistence and problem-solving are critical developer skills

Most importantly, this project reflects real growth in both technical skills and decision-making as a developer.

## Special Thanks

I would like to express my sincere gratitude to my instructors and mentors at **Per Scholas** for their guidance, support, and patience throughout this learning journey.

**Special thanks to:**
- **Tishana Trainor** - for clear explanations, structured lessons, and consistent encouragement  
- **Bryan Santos** - for practical insights, real-world examples, and technical guidance  

Their teaching and feedback played a significant role in helping me understand React concepts, debug complex issues, and continue moving forward even when the project became challenging.

## Future Improvements
Although this project was completed using JavaScript to meet time constraints, I plan to continue working with TypeScript. I believe the issues I encountered were minor configuration and compatibility problems, and I intend to debug and resolve them as I further strengthen my TypeScript skills.