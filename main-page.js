function saveInfo(title, image, price, info){
    
    localStorage.setItem('title',title)
    localStorage.setItem('image', image)
    localStorage.setItem('price',price)
    localStorage.setItem('info', info)

    window.location.href="./Listing-page/product-info.html"
    //Guardamos los parametros pasados en la función en el local storage
    //Guardamos la información del producto en el local storage cada vez que hacemos click.
}

document.getElementById('products').onchange = selectProduct



function selectProduct(){
    let product = document.getElementById('products').value
    if(product=='Products'){
        window.location.href ="./index.html"
    }
    if(product == 'Dogs'){
        const catProduct = [...document.getElementsByClassName("cat-products")]
        catProduct.forEach(element => {
            element.style.display = "none"
        });

        const birdProduct = [...document.getElementsByClassName("bird-products")]
        birdProduct.forEach(element => {
            element.style.display = "none"
        });

        const rabbitProduct = [...document.getElementsByClassName("rabbit-products")]
        rabbitProduct.forEach(element => {
            element.style.display = "none"
        });

    }
    if(product == 'Cats'){
        const dogProduct = [...document.getElementsByClassName("dog-products")]
        dogProduct.forEach(element => {
            element.style.display = "none"
        });

        const birdProduct = [...document.getElementsByClassName("bird-products")]
        birdProduct.forEach(element => {
            element.style.display = "none"
        });

        const rabbitProduct = [...document.getElementsByClassName("rabbit-products")]
        rabbitProduct.forEach(element => {
            element.style.display = "none"
        });

    }
    if(product == 'Birds'){
        const catProduct = [...document.getElementsByClassName("cat-products")]
        catProduct.forEach(element => {
            element.style.display = "none"
        });

        const dogProduct = [...document.getElementsByClassName("dog-products")]
        dogProduct.forEach(element => {
            element.style.display = "none"
        });

        const rabbitProduct = [...document.getElementsByClassName("rabbit-products")]
        rabbitProduct.forEach(element => {
            element.style.display = "none"
        });

    }
    if(product == 'Rabbits'){
        const catProduct = [...document.getElementsByClassName("cat-products")]
        catProduct.forEach(element => {
            element.style.display = "none"
        });

        const birdProduct = [...document.getElementsByClassName("bird-products")]
        birdProduct.forEach(element => {
            element.style.display = "none"
        });

        const dogProduct = [...document.getElementsByClassName("dog-products")]
        dogProduct.forEach(element => {
            element.style.display = "none"
        });

    }
}
function addToCart(title, image, price){

    localStorage.setItem('title',title)
    localStorage.setItem('image', image)
    localStorage.setItem('price',price)

    if (!localStorage.getItem('cart')) {
        //Creación de array que contendrá los productos que el cliente quiere comprar.
        let shopcart = [{ title: localStorage.getItem('title'), picture: localStorage.getItem('image'), price: localStorage.getItem('price'), quantity: 1 }]
        //Subida al local storage
        localStorage.setItem('cart', JSON.stringify(shopcart))
    }
    else {
        //En caso de que el carrito ya exista en el localStorage creamos variable = contenido del carrito.
        let parsedcart = JSON.parse(localStorage.getItem('cart'));
        //Busqueda de nombre del producto que queremos añadir en la variable parsedcart. Match = objeto que contiene info de nuestro producto.
        let product = parsedcart.find(function (item) {
            if (item.title === localStorage.getItem('title')) return true;
        });
        //If match exists adds 1 to quantity.
        if(product){
            //let indexMatch = parsedcart.indexOf(product)
            product.quantity+=1
            localStorage.setItem('cart', JSON.stringify(parsedcart))
        }
        //If not, adds a new object with the info of the product.
        else{
            parsedcart.push({title: localStorage.getItem('title'), picture: localStorage.getItem('image'), price: localStorage.getItem('price'), quantity: 1 })
            localStorage.setItem('cart', JSON.stringify(parsedcart))
        }
        
    }
    alert('Item added to the cart')
    }
