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
        let producto = document.createElement('div');

        let nombre = document.createElement('p');
        let cantidad = document.createElement('p');
        let precio = document.createElement('p')

        let add = document.createElement('button')
        let subtract = document.createElement('button')
        let cantidadDiv = document.createElement('div')


        add.addEventListener('click', () => addElement(elemIndex))
        subtract.addEventListener('click', () => subtractElement(elemIndex))


        nombre.innerHTML = element.title
        cantidad.innerHTML = element.quantity

        precio.innerHTML = `${(element.quantity * element.price).toFixed(2)}$`

        sum += element.quantity * element.price
        console.log(sum)
        add.innerHTML = "+"
        subtract.innerHTML = "-"

        producto.appendChild(nombre)
        producto.appendChild(subtract)
        producto.appendChild(cantidad)
        producto.appendChild(add)

        cantidadDiv.appendChild(precio)



        localStorage.setItem('total', sum)
        producto.appendChild(cantidadDiv)

        shopListDiv.appendChild(producto)


    });

    let total = document.createElement('h2')
    total.innerHTML = (JSON.parse(localStorage.getItem('total'))).toFixed(2)
    total.className = "total"
    shopListDiv.appendChild(total)

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








