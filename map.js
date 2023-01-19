// INPUT: the array of countries from data.js
// OUTPUT: an array of the names
// REQS: use .map

export const getCountryNames = (countries) => {
  return countries.map(({ name }) => name);
};

// INPUT: the array of countries from data.js
// OUTPUT: an array of the names and their iso2 country codes using .map
// REQS: use .map

export const getCountryCodes = (countries) => {
  return countries.map(({ name, iso2 }) => [name, iso2]);
};

// INPUT: the array of shoes from data.js
// OUTPUT: an array of the brands
// REQS: use .map

export const getBrands = (brands) => {
  const emptyArray = [];
  return brands.map(({ brand }) => brand);
};
