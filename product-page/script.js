const products = [
  { name: "Smartphone", price: 20000, category: "tech" },
  { name: "Laptop", price: 55000, category: "tech" },
  { name: "T-Shirt", price: 500, category: "clothing" },
  { name: "Jeans", price: 1500, category: "clothing" }
];

function displayProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <p>📦 ${p.category}</p>
    `;
    container.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("filter").value;
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}

function sortProducts() {
  const type = document.getElementById("sort").value;
  const sorted = [...products];

  if (type === "name") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    sorted.sort((a, b) => a.price - b.price);
  }

  displayProducts(sorted);
}

window.onload = () => displayProducts(products);
