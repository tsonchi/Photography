const products = [
    {
        name: 'Product 1',
        price: '$29.99',
        imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
        name: 'Product 2',
        price: '$39.99',
        imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
        name: 'Product 3asdasd',
        price: '$49.99',
        imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
        name: 'Product 4',
        price: '$49.99',
        imageUrl: 'https://via.placeholder.com/300x200'
    }
];
function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; 

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const img = document.createElement('img');
        img.src = product.imageUrl;

        productDiv.appendChild(img);
        const name = document.createElement('h2');
        name.textContent = product.name;
        productDiv.appendChild(name);

        const price = document.createElement('div');
        price.className = 'price';
        price.textContent = product.price;
        productDiv.appendChild(price);

        productList.appendChild(productDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});