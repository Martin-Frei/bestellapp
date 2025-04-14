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

// function loadMenu(category =''){
//     showMenu = document.getElementById("menu");
//     showMenu.innerHTML("");

//     if ( category === ''){
//         return Object.values(menuItems).flat(); 
//     }
//     showMenu.innerHTML += showDishesTemplate(category);
// }

function showDishesTemplate(item) {
    return `
        <div class="dish">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>${item.price.toFixed(2)} €</span>
            <button onclick="addToCard('${item.name}', ${item.price})">+</button>
        </div>
    `;
}

// function showDishesTemplate(element){
//     return  `
//         <div class="dish">
//         <img src="${element.image}">
//         <h3> ${element.name}</h3>
//         <p>${element.description}</p>
//         <span>${element.price}</span>
//         <button onclick="addToCard('
//         ${element.name},${element.price}
//         ')">+</button>                
//         </div>
//             ` ;
// }           