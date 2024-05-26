const products = [
    {
        name: 'Slovenia Moravia',
        price: '$29.99',
        imageUrl: '/images/_DSC9639-1.jpg'
    },
    {
        name: 'Slovenia Moravia',
        price: '$39.99',
        imageUrl: '/images/_DSC1315-3.jpg'
    },
    {
        name: 'Persidi',
        price: '$49.99',
        imageUrl: '/images/_DSC5591-1.jpg'
    },
    {
        name: 'Shiroka polqna',
        price: '$49.99',
        imageUrl: '/images/_DSC7133-2.jpg'
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