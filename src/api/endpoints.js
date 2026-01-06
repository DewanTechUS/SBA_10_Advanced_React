const API_KEY = "65232507";
const BASE = `https://www.themealdb.com/api/json/v2/${API_KEY}`;

export const endpoints = {
  categories: () => `${BASE}/categories.php`,
  filterByCategory: (categoryName) =>
    `${BASE}/filter.php?c=${encodeURIComponent(categoryName)}`,
  lookupById: (id) => `${BASE}/lookup.php?i=${encodeURIComponent(id)}`,
  searchByName: (query) => `${BASE}/search.php?s=${encodeURIComponent(query)}`,

  areas: () => `${BASE}/list.php?a=list`,
  filterByArea: (areaName) =>
    `${BASE}/filter.php?a=${encodeURIComponent(areaName)}`,
};
