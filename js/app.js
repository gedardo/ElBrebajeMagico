const contenedor = document.querySelector(".container")
const URL = "../bbdd/wines.json"
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let vinos = []
let contenidoHTML = ""

const mostrarError = ()=> {
    return `<div class="error">
                <h2>¡Ups...!</h2>
                <img src="images/corcho-2.png">
                <p>🍷 No pudimos cargar la información.</p>
                <p>🍷 Por favor, intenta nuevamente en unos minutos.</p>
            </div>`
}

const notification = (text) =>
{
    Toastify({
        text: text,
        className: "info",
        style: {
          background: "#fff",
          color:"#00a650"
        }
      }).showToast();
}

const mostrarCard = (contenido)=> {
    const {id, varietal, nombre, categoria, imagen, precio} = contenido
    return `<div class="card">
                <img id="${id}" src="images/${imagen}" title="${nombre} - ${categoria}">
                <div>
                <p title="${nombre}">${nombre}</p>
                <p class="label-bodega">${varietal}</p>
                <p class="precio">$ ${precio}</p>
                </div>
                <div class="align-btn">
                    <button class="card-button" id="${id}">AGREGAR</button>
                </div>
            </div>`
}

const cargarContenido  = async ()=> {
    try {
        const response = await fetch(URL)
        const data = await response.json()
              vinos = data 
              vinos.forEach(etiqueta => contenidoHTML += mostrarCard(etiqueta))
    } 
    catch (error) {
        contenidoHTML += mostrarError()
    }
    finally {
        contenedor.innerHTML = contenidoHTML
    }
}

document.addEventListener("DOMContentLoaded", async ()=> {
    const espero = await cargarContenido()
          activarClicks()
})

const activarClicks = ()=> {
    let botones = document.querySelectorAll("button.card-button")
        botones.forEach(boton => boton.addEventListener("click", (e)=> agregarAlCarrito(e)))
    let imagenes = document.querySelectorAll(".card img")
        imagenes.forEach(imagen => imagen.addEventListener("click", (e)=> verDetalle(e.target.id)))
}

document.querySelector(".dialog-close").addEventListener("click", ()=> document.querySelector("dialog").removeAttribute("open"))

const verDetalle = (id)=> {
    const etiqueta = vinos.find(etiqueta => etiqueta.id === parseInt(id))
          if (etiqueta) {
              document.querySelector("dialog").setAttribute("open", "true")
              document.querySelector("#detalleCategoria").textContent = etiqueta.categoria
              document.querySelector("#detalleImagen").textContent = etiqueta.imagen
              document.querySelector("#detalleTitulo").textContent = etiqueta.nombre
              document.querySelector("#detalleBodega strong").textContent = etiqueta.bodega
              document.querySelector("#detalleNotas").textContent = etiqueta.notas
              document.querySelector("#detalleImagen").src = `images/${etiqueta.imagen}`
          }
}

const setQuantity = () =>
{
    const label = document.querySelector('#cart-quantity');
    const total = carrito.reduce((acc, item) => acc + item.quantity, 0);
    if(total > 0)
    {
        label.innerText = total;
    }
}

const agregarAlCarrito = (event)=> {
    debugger
    let found = carrito.find(element => element.id == parseInt(event.target.id));
    if(found)
    {
        found.quantity++;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        notification('Producto agregado con éxito!')
    }
    else
    {
        let product = vinos.find(element => element.id == parseInt(event.target.id));
        if(product)
        {
            let newProduct = {
                id:product.id,
                nombre: product.nombre,
                precio: product.precio,
                categoria: product.categoria,
                quantity: 1
            }
            carrito.push(newProduct);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            notification('Producto agregado con éxito!');
        }
    }
    setQuantity(carrito);
}