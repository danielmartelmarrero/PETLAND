function saveInfo(title, image, price, info){
    
    localStorage.setItem('title',title)
    localStorage.setItem('image', image)
    localStorage.setItem('price',price)
    localStorage.setItem('info', info)

    window.location.href="../Listing-page/product-info.html"
    //Guardamos los parametros pasados en la función en el local storage
    //Guardamos la información del producto en el local storage cada vez que hacemos click.
}

