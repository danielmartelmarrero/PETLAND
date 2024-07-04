window.addEventListener('load', getProducts)

function getProducts() {
    //Create variable=content of cart (cart is supposed to be an array of objects)
    let shoppingList = JSON.parse(localStorage.getItem('cart'))
    let shopListDiv = document.getElementById("shopList-div")
    shopListDiv.innerHTML = ''
    
    console.log(shoppingList)
    //For every element in cart
    let sum = 0
    shoppingList.forEach((element, elemIndex) => {
        let product = document.createElement('div');

        let name = document.createElement('p');
        name.id = "product-name"
        name.innerHTML = element.title
        product.appendChild(name)

        let subtract = document.createElement('button')
        subtract.innerHTML = "-"
        product.appendChild(subtract)
        
        let quantity = document.createElement('p');
        quantity.innerHTML = element.quantity
        product.appendChild(quantity)

        let add = document.createElement('button')
        add.innerHTML = "+"
        product.appendChild(add)

        let price = document.createElement('p')
        price.innerHTML = `${(element.quantity * element.price).toFixed(2)}$`
        let quantityDiv = document.createElement('div')
        quantityDiv.appendChild(price)

        product.appendChild(quantityDiv)
        shopListDiv.appendChild(product)

        add.addEventListener('click', () => addElement(elemIndex))
        subtract.addEventListener('click', () => subtractElement(elemIndex))

        sum += element.quantity * element.price
        localStorage.setItem('total', sum)
    });
    
    let totalEl = document.querySelector('.total')
    if(shopListDiv.length==0){
        totalEl.innerHTML = ''
    }
    totalEl.innerHTML = (JSON.parse(localStorage.getItem('total'))).toFixed(2)+"$"
    
}


function addElement(elemIndex) {
    let carrito = JSON.parse(localStorage.getItem('cart'))
    carrito[elemIndex].quantity += 1
    localStorage.setItem('cart', JSON.stringify(carrito))
    getProducts()
}

function subtractElement(elemIndex) {
    let carrito = JSON.parse(localStorage.getItem('cart'))
    carrito[elemIndex].quantity -= 1
    if (carrito[elemIndex].quantity == 0) {
        carrito.splice(elemIndex, 1)
    }
    localStorage.setItem('cart', JSON.stringify(carrito))
    getProducts()
}



function pay() {
    localStorage.removeItem('cart')
    window.location.href = "../Shopping-cart/cart.html"
}








