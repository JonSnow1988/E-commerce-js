


const cards = document.getElementById('cards')

const templateCard = document.getElementById('template-card').content

const fragment = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", () => {
    fetchData()
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})



items.addEventListener('click', e =>{
    btnAccion(e)
})

const fetchData = async () => {
   try {
       const res = await fetch('api.json');
       const data = await res.json()
       
       pintarCards(data)
   } catch (error) {
       console.log(error);
   }
}

const pintarCards = data => {
   
    data.forEach(producto => {
       templateCard.querySelector('h5').textContent = producto.title
       templateCard.querySelector('p').textContent = producto.precio
       templateCard.querySelector('img').setAttribute('src', producto.thumbnailUrl)
       templateCard.querySelector('.btn-dark').dataset.id = producto.id


       const clone = templateCard.cloneNode(true)
       fragment.appendChild(clone)
    });
    cards.appendChild(fragment)
}

const btnAccion = e => { 
    
    if(e.target.classList.contains('btn-info')){
        
        const producto = carrito[e.target.dataset.id]
        
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}
        pintarCarrito()
    }

    if(e.target.classList.contains('btn-danger')){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if(producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        pintarCarrito() 
    }
    e.stopPropagation()
}