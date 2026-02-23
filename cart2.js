const handleAddtoCart = () => {
  const productName = document.getElementById("productName");
  const productQuantity = document.getElementById("productQuantity");

  const name = productName.value;
  const quantity = productQuantity.value;
  //console.log(name, quantity);
  SetProductToLocalStorage(name, quantity);
  displayProduct(name, quantity);

  //clearing input field
  productName.value = "";
  productQuantity.value = "";
};

//displaying product in webpage
const displayProduct = (name, quantity) => {
  const productContainer = document.getElementById("productContainer");
  const li = document.createElement("li");
  li.innerText = `${name} :${quantity}`;
  productContainer.appendChild(li);
};

// get product
const getProductFromLocalStorage = () => {
  let cart = {};
  const getProduct = localStorage.getItem("cart");

  if (getProduct) {
    cart = JSON.parse(getProduct);
  }
  return cart;
};

//display from local storage
const displayFromLocalStorage = () => {
  const products = getProductFromLocalStorage();
  // console.log(products)
  for (const product in products) {
    //  console.log(product);
    //  console.log(products[product]);
    displayProduct(product, products[product]);
  }
};

// local storage
const SetProductToLocalStorage = (name, quantity) => {
  //console.log(name, quantity);
  //const newProduct = { name: quantity };
  //localStorage.setItem("cart", JSON.stringify(newProduct));
  const cart = getProductFromLocalStorage();
  // console.log(cart);
  cart[name] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

//const product = {
//  mobile: 12,
//};
//product["mobile"] = 126;
//console.log(product);
//
displayFromLocalStorage();
