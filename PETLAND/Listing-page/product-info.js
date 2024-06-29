window.addEventListener('load', displayProduct)                                //Cada vez que se cargue la página da la orden de que se ejecute productInfo()

function displayProduct() {
    let div = document.getElementById("my-product-info")                    //Enlaze de elemento html con Jscript para posterior modificación.
    
    let titleElement = document.createElement('h1')                         //Creación de elementos
    let priceElement = document.createElement('h2')
    let imageElement = document.createElement('img')
    
    let infoElement = document.getElementById('additional-info')            //Enlaze de elemento html con Jscript para posterior modificación.

    titleElement.innerHTML = localStorage.getItem('title')                  //Populate elements
    imageElement.src = localStorage.getItem('image')
    imageElement.alt = localStorage.getItem('title')
    priceElement.innerHTML = `${localStorage.getItem('price')}$`
    infoElement.innerHTML = localStorage.getItem('info')

    div.appendChild(titleElement)
    div.appendChild(imageElement)                                           //Add elements to div
    div.appendChild(priceElement)
}


function addToCart(){
    if (!localStorage.getItem('cart')) {
        
        //Creación de array que contendrá los productos que el cliente quiere comprar.
        let shopcart = [{ title: localStorage.getItem('title'), picture: localStorage.getItem('image'), price: localStorage.getItem('price'), quantity: 1 }]
        //Subida al local storage
        localStorage.setItem('cart', JSON.stringify(shopcart))
        localStorage.setItem('totalPrice', localStorage.getItem('price'))
    }
    else {
        //En caso de que el carrito ya exista en el localStorage creamos variable = contenido del carrito.
        let parsedcart = JSON.parse(localStorage.getItem('cart'));
        //Busqueda de nombre del producto que queremos añadir en la variable parsedcart. Match = objeto que contiene info de nuestro producto.
        let match = parsedcart.find(function (item) {
            if (item.title === localStorage.getItem('title')) return true;
        });
        //If match exists adds 1 to quantity.
        if(match){
            let indexMatch = parsedcart.indexOf(match)
            parsedcart[indexMatch].quantity+=1
            localStorage.setItem('cart', JSON.stringify(parsedcart))
        }
        //If not, adds a new object with the info of the product.
        else{
            parsedcart.push({title: localStorage.getItem('title'), picture: localStorage.getItem('image'), price: localStorage.getItem('price'), quantity: 1 })
            localStorage.setItem('cart', JSON.stringify(parsedcart))
        }
        
        

    }
        window.location.href = "../Shopping-cart/cart.html"
    }

    