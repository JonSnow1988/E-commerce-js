
const items = document.getElementById('items')

const footer = document.getElementById('footer')

const templateFooter = document.getElementById('template-footer').content

const templateCarrito = document.getElementById('template-carrito').content


const pintarCarrito = () => {
    
    items.innerHTML = ''
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id;
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)

    });
    items.appendChild(fragment) 

    pintarFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const pintarFooter = () => {
    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0) {
        footer.innerHTML = `<th scope="row" colspan="5">Inicie su compra! Gracias por Confiar en Nosotros!</th>`

        return
    }
const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad,0)
const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio,0)
templateFooter.querySelectorAll('td')[0].textContent = nCantidad
templateFooter.querySelector('span').textContent = nPrecio

const clone = templateFooter.cloneNode(true)
fragment.appendChild(clone)
footer.appendChild(fragment) 

const btnVaciar = document.getElementById('vaciar-carrito')
btnVaciar.addEventListener('click', () =>{
    carrito = {}
    pintarCarrito()
})


}



