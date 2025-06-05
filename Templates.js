function showDishesTemplate(item) {
    return `
        <div class="dish">
            <img src="${item.image}" alt="${item.name}">
            <div class="text-box">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>${item.price.toFixed(2)} €</span>
                <button class="button2" onclick="addToCart('${item.name}', ${item.price})">+</button>
            </div>
        </div>`;
}


function showCartTemplate(){
    let template =""
    cartTotal = 0
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let itemTotal = (item.quantity * item.price).toFixed(2);
        cartTotal += parseFloat(itemTotal) ;
        template += `<div class="cart-item">
                <strong>${item.name}</strong> : <br>
                ${item.quantity} × ${item.price.toFixed(2)} € = 
                ${itemTotal} €<br>
                <button class="button2" title="Löschen" onclick="deleteItem('${item.name}')">🗑️</button>
                <button class="button2" onclick="addToCart('${item.name}',${item.price})">+</button> 
                <button class="button2" onclick="removeFromCart('${item.name}')">-</button>                 
            </div>`;
    }; return template
};