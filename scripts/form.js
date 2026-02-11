// Product array
const products = [
    { id: "prod1", name: "Super Vacuum Cleaner" },
    { id: "prod2", name: "Smart Coffee Maker" },
    { id: "prod3", name: "Wireless Headphones" },
    { id: "prod4", name: "Air Purifier" },
    { id: "prod5", name: "Electric Kettle" }
];

// Populate select options
const productSelect = document.getElementById('product');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});
