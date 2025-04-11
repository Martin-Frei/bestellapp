let menuItems ={}

function fetchMenuItem(){
    fetch("menu.json")
    .then(respons => respons.json())
    .then(data => {
        menuItems = data;
        loadMenu()
    })
    .catch(error => console.error("Error", error));
    
}

function loadMenu(category =''){
    let items = []
    if ( category === ''){
        items = Object.values(menuItems).flat()    
    }else if(menuItems[category]){
        items= menuItems[category]
    }else {items= []}


    let showDishes = document.getElementById("menu")
        showDishes.innerHTML = ""
        items.forEach(element => {
            showDishes.innerHTML += `
                <div class="dish">
                <img src="${element.image}">
                <h3> ${element.name}</h3>
                <p>${element.description}</p>
                <span>${element.price}</span>
                <button onclick="addToCard('
                ${element.name},${element.price}
                ')">+</button>                
                </div>
                 `            
        })        
  }     




function showDishesTemplate(){

}

let card = []

function addToCard(name, price){
    card.push({name,price})
    updateCard();
}

function updateCard(){
    let cardList = document.getElementById("cardList");
    let total = document.getElementById("total");
    let cardHTML = "TEST"
    total = 0
    // cardList.innerHTML ="Test"

    card.forEach((item, index)=>{
        total += item.price 
        cardHTML += `
        <div class="card-item">
        <h3>${item.name}</h3>
        <span>${item.price}</span>
        </div>
        `
    })
    cardList.innerHTML = cardHTML
    total.textContent= `total $${total}`
    
}

document.addEventListener("DOMContentLoaded",fetchMenuItem())