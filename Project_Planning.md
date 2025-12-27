# SBA 10 Recipe Discovery App
## Author
Dewan Mahmud (Rocky)  
Software Engineer - Per Scholas (MERN Stack)  
Advanced React - SBA 10  

# Project Planning

# Project Purpose
The Recipe Discovery App is a client-side single-page application (SPA) built with React.
The goal of this project was to demonstrate my understanding of modern React concepts while building a realistic, user-focused application suitable for my professional portfolio.

## The project focuses on:
- Component-based architecture
- State management and data flow
- Client-side routing
- API-driven data fetching
- Global state management using Context API
- This project was completed as part of the Advanced React SBA.

# Initial Vision and Expectations
I began this project on December 21 with the intention of building a clean, professional React application using TypeScript.
My goal was to apply best practices while also reviewing and reinforcing concepts from the entire React course.
However, this decision unintentionally led me to overcomplicate the project early on.

# Early Technical Struggles
Between December 21 and December 23, I faced multiple layers of difficulty. Many of which were not immediately obvious.
Tooling and Configuration Issues

I struggled significantly with:
TypeScript configuration (tsconfig include and input errors)
Conflicts between .ts, .tsx, .js, and .jsx
Vite and TypeScript compatibility problems
Entry file mismatches (main.tsx vs main.jsx)
These issues prevented the app from compiling correctly and consumed a large portion of my development time.

# Struggles with Core React Patterns
In addition to configuration issues, I also struggled with foundational React patterns, especially when trying to apply them all at once.

Custom Hook: useFetch
I initially had difficulty:
Understanding how to make useFetch reusable
Managing loading, error, and data states correctly
Preventing unnecessary re-fetching
Handling cleanup and dependency arrays properly
At times, my fetch logic caused:
Infinite re-renders
Data not loading as expected
Inconsistent UI updates
Rebuilding this hook multiple times helped me finally understand how side effects actually work in React.

Custom Hook: useLocalStorage
I also struggled with useLocalStorage, especially:
Syncing React state with localStorage
Handling initial values correctly
Avoiding JSON parse/stringify errors
Ensuring data persisted across page refreshes
Several early implementations either:
Overwrote stored data
Failed to update correctly
Caused unexpected state resets
These problems forced me to slow down and truly understand how browser storage and React state interact.

API Structure (endpoints.js)
Another challenge was designing a clean and reusable API layer.
I initially:
Hardcoded URLs inside components
Repeated API strings across files
Struggled with dynamic endpoints (IDs, categories, search queries)
Eventually, I learned to centralize API logic inside an endpoints.js file, which:
Reduced duplication
Improved readability
Made future changes easier
Separated data concerns from UI components
This was a major architectural improvement.

# Overthinking and Time Loss
At the same time, I was attempting to review the entire React course again while building the project.
This caused me to:
Second-guess my implementations
Repeatedly refactor unfinished code
Try to apply every concept at once
Lose time without visible progress
Instead of moving forward step by step, I often restarted sections of the app prematurely.

# Critical Turning Point
On the night of December 23, after multiple failures, I realized that:
I was spending more time debugging than building
Tooling and overengineering were blocking progress
The SBA goal was to demonstrate React understanding, not TypeScript mastery
At this point, I made a deliberate decision:

Restart the project from scratch using JavaScript instead of TypeScript.

# Rebuilding
Restarting the project allowed me to:
Focus on one concept at a time
Rebuild useFetch and useLocalStorage correctly
Design a clean endpoints.js structure
Understand data flow and state management more deeply
Build confidence through working features
Each rebuild clarified concepts that previously felt confusing.

# Skills Strengthened Through Struggle
Through repeated rebuilding, I significantly improved my understanding of:
Functional components and JSX
Props and component communication
useState and useEffect
Custom hooks and reusability
API-driven data fetching
Loading and error state handling
Context API and prop drilling avoidance
localStorage persistence
Separation of concerns
Component reusability
UX feedback and accessibility
The struggle itself became the most effective learning process.

# Final Decisions
The final implementation emphasizes clarity and simplicity.
Key decisions included:
JavaScript over TypeScript to reduce friction
Centralized API endpoints
Reusable custom hooks
Context API for global favorites state
Minimal but structured global styling
Clean folder separation for maintainability
These choices resulted in a stable, readable, and resume-ready project.
