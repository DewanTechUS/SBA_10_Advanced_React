const API_KEY = "65232507"; //Ma'am, someone bought an API key from me, because I built a landing page for them.
const BASE = `https://www.themealdb.com/api/json/v2/${API_KEY}`;

export const endpoints = {
  categories: () => `${BASE}/categories.php`,
  filterByCategory: (categoryName) => `${BASE}/filter.php?c=${encodeURIComponent(categoryName)}`,
  lookupById: (id) => `${BASE}/lookup.php?i=${encodeURIComponent(id)}`,
  searchByName: (query) => `${BASE}/search.php?s=${encodeURIComponent(query)}`,
};
