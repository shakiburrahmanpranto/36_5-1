const addProduct = () => {
  const productField = document.getElementById("product_name");
  const quantityField = document.getElementById("product_quantity");
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = " ";
  quantityField.value = "";
  console.log(product, quantity);
  displayProducts(product, quantity);
  setToLocal(product, quantity);
};

const displayProducts = (product, quantity) => {
  const ul = document.getElementById("product_container");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  ul.appendChild(li);
};

// get product
const getProductFromLocalStorage = () => {
  let cart = {};
  getProduct = localStorage.getItem("cart");
  if (getProduct) {
    cart = JSON.parse(getProduct);
  }
  return cart;
};

// local storage
const setToLocal = (product, quantity) => {
  //console.log(product, quantity);
  const cart = getProductFromLocalStorage();
  //console.log(cart);
  cart[product] = quantity;
  const cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
};
