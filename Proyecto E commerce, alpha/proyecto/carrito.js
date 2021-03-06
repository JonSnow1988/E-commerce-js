
    let carrito = {}
 
cards.addEventListener('click', e => {
    addCarrito(e)
})

const addCarrito = e => {
    
    if(e.target.classList.contains('btn-dark')) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
   
    const producto = {
      id: objeto.querySelector(".btn-dark").dataset.id,  
      title: objeto.querySelector('h5').textContent,
      precio: objeto.querySelector('p').textContent,
      cantidad: 1
    }

    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad +1
    }

    carrito[producto.id] = { ...producto }  
    
    pintarCarrito()

    
}

