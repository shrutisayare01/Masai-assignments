function processProducts(products) {
  // Step 1: Use map() to extract product names
  const productNames = products.map(product => product.name);

  // Step 2: Use forEach() to log messages based on price
  products.forEach(product => {
    if (product.price > 50) {
      console.log(`${product.name} is above $50`);
    } else {
      console.log(`${product.name} is below $50`);
    }
  });

  return productNames;
}

const products = [
  { name: "Notebook", price: 30 },
  { name: "Pencil", price: 10 },
  { name: "Textbook", price: 60 },
  { name: "Bag", price: 150 }
];

const result = processProducts(products);
console.log(result);
