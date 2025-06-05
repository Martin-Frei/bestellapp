let menuItems = {};
let cart = [];
let cartTotal = 0;

function fetchMenuItem() {
  fetch("menu.json")
    .then((respons) => respons.json())
    .then((data) => {
      menuItems = data;
      loadMenu();
    })
    .catch((error) => console.error("Error", error));
}

function loadMenu(category = "") {
  let showMenu = document.getElementById("menu");
  showMenu.innerHTML = "";
  let items = [];
  if (category === "") {
    items = Object.values(menuItems).flat();
  } else if (menuItems[category]) {
    items = menuItems[category];
  }
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    showMenu.innerHTML += showDishesTemplate(item);
  }
}

function addToCart(name, price) {
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].quantity += 1;
      found = true;
      break;
    }
  }
  if (!found) {
    cart.push({ name: name, price: price, quantity: 1 });
  }
  renderCart();
  renderCartDown();
}

function renderCart() {
  let showCart = document.getElementById("cartList");
  let showTotal = document.getElementById("total");

  showTotal.innerHTML = "";
  showCart.innerHTML = "";

  showCart.innerHTML += showCartTemplate();
  showTotal.innerHTML = cartTotal.toFixed(2) + " €";
}

function removeFromCart(name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].quantity--;
      if (cart[i].quantity <= 0) {
        cart.splice(i, 1);
      }
      break;
    }
  }
  renderCart();
  renderCartDown();
}

function deleteItem(name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart.splice(i, 1);
      break;
    }
  }
  renderCart();
  renderCartDown();
}

function toggelCard() {
  cardDown = document.getElementById("cardDown");
  cardDown.classList.toggle("d-none");
  renderCartDown();
}

function renderCartDown() {
  let showCart = document.getElementById("cartListDown");
  let showTotal = document.getElementById("totalDown");

  showTotal.innerHTML = "";
  showCart.innerHTML = "";

  showCart.innerHTML += showCartTemplate();
  showTotal.innerHTML = cartTotal.toFixed(2) + " €";
}

function send() { 
  let showCart = document.getElementById("cartList");
  let showTotal = document.getElementById("total");
  if (cart.length >= 1) {
    showTotal.innerHTML = "";
    showCart.innerHTML = "";
    cart = [];
    cartTotal = 0;
    showCart.innerHTML = `<h3>Bestellung erhalten</h3><br/><h2>Danke</h2>`;
  } else {
    showCart.innerHTML = `<h3>Kein Artikel im Warenkorb</h3>`;
  }    
}

function sendDown(){
  let showCart = document.getElementById("cartListDown");
  let showTotal = document.getElementById("totalDown");
  if (cart.length >= 1) {
    showTotal.innerHTML = "";
    showCart.innerHTML = "";
    cart = [];
    cartTotal = 0;
    showCart.innerHTML= `<h3>Bestellung erhalten</h3><br/><h2>Danke</h2>`
  } else {
    showCart.innerHTML= `<h3>Kein Artikel im Warenkorb</h2>`
  }    
}