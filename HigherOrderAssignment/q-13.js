
function countCategories(categories) {
  return categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
}

const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

const result = countCategories(categories);
console.log(result);

function sortedCategories(categories) {
  const counts = countCategories(categories);

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])  
    .map(entry => entry[0]);        
}

console.log(sortedCategories(categories));

