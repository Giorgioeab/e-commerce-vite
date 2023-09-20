const products = [
  {
    id: 1,
    brand: "Zara",
    name: "Camisa Larga com Bolsos",
    price: 70,
    image: "./product-1.jpg",
    female: false,
  },
  {
    id: 2,
    brand: "Zara",
    name: "Casaco Reto com Lã",
    price: 85,
    image: "product-2.jpg",
    female: true,
  },
  {
    id: 3,
    brand: "Zara",
    name: "Jaqueta com Efeito Camurça",
    price: 60,
    image: "product-3.jpg",
    female: false,
  },
  {
    id: 4,
    brand: "Zara",
    name: "Sobretudo em Mescla de Lã",
    price: 160,
    image: "product-4.jpg",
    female: false,
  },
  {
    id: 5,
    brand: "Zara",
    name: "Camisa Larga Acolchoada de Veludo Cotelê",
    price: 110,
    image: "product-5.jpg",
    female: false,
  },
  {
    id: 6,
    brand: "Zara",
    name: "Casaco de Lã com Botões",
    price: 170,
    image: "product-6.jpg",
    female: true,
  },
  {
    id: 7,
    brand: "Zara",
    name: "Casaco com Botões",
    price: 75,
    image: "product-7.jpg",
    female: true,
  },
  {
    id: 8,
    brand: "Zara",
    name: "Colete Comprido com Cinto",
    price: 88,
    image: "product-8.jpg",
    female: true,
  },
];

catalogo.forEach(product => {
  
  const product_card = `<div id="card-product-${product.id}">
  <img src="../assets/img/${product.image}" alt="Product-1" style="height: 300px;">
  <p class='product-brand'>${product.brand}</p>
  <p class='product-name'>${product.name}</p>
  <p class='product-price'>R$ ${product.price}</p>
  <button>Add</button>
  <p>+</p>
  </div>`;

  document.getElementById("container-product").innerHTML += product_card;
  
});