// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  return brands.reduce((acc, curr) => [...acc, ...curr.shoes], []);
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {
  const reduced = dogs.reduce((acc, dog) => {
    acc += dog.age;
    return acc;
  }, 0);
  return reduced / dogs.length;
};
