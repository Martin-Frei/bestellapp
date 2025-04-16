let menuItems ={}
let cart = []
let cartTotal = 0

function fetchMenuItem(){
    fetch("menu.json")
    .then(respons => respons.json())
    .then(data => {
        menuItems = data;
        loadMenu()
    })
    .catch(error => console.error("Error", error));
    
}


function loadMenu(category = '') {
    let showMenu = document.getElementById("menu");
    showMenu.innerHTML = "";

    let items = [];

    if (category === '') {
        items = Object.values(menuItems).flat();
    } else if (menuItems[category]) {
        items = menuItems[category];
    }

    for (let index = 0; index < items.length; index++) {
        let item = items[index];
        showMenu.innerHTML += showDishesTemplate(item);
    }
}

function showDishesTemplate(item) {
    return `
        <div class="dish">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>${item.price.toFixed(2)} €</span>
            <button onclick="addToCart('${item.name}', ${item.price})">+</button>
        </div>
    `;
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
}

function renderCart(){
    let showCart = document.getElementById("cartList");
    let showTotal = document.getElementById("total");

    showTotal.innerHTML = "";
    showCart.innerHTML = "";

    showCart.innerHTML += showCartTemplate();
    showTotal.innerHTML = cartTotal.toFixed(2) + " €";;
}   

function showCartTemplate(){
    let template =""
    cartTotal = 0

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let itemTotal = (item.quantity * item.price).toFixed(2);
        cartTotal += parseFloat(itemTotal) ;
        template += `
            <div class="cart-item">
                <strong>${item.name}</strong> : 
                ${item.quantity} × ${item.price.toFixed(2)} € = 
                ${itemTotal} €
                <button onclick="addToCart('${item.name},${item.price}')">+</button> 
                <button onclick="removeFromCart('${item.name}')">-</button> 
                <button title="Löschen" onclick="deleteItem('${item.name}')">🗑️</button>
            </div>
        `;
    };
    return template
};

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
}

function deleteItem(name) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
        cart.splice(i, 1);
        break;
        }
    }
    renderCart();
}
  
