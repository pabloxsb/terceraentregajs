let cuadros = [
  {
    id: 1,
    nombre: "Campera naranja",
    categoria: "hombre",
    precio: 13340,
    img: "./imagen/hombre1.jpg",
  },
  {
    id: 2,
    nombre: "Campera Azul",
    categoria: "hombre",
    precio: 21940,
    img: "./imagen/hombre2.jpg",
  },
  {
    id: 3,
    nombre: "Campera bordo",
    categoria: "hombre",
    precio: 6800,
    img: "./imagen/hombre3.jpg",
  },
  {
    id: 4,
    nombre: "Campera negra",
    categoria: "hombre",
    precio: 15650,
    img: "./imagen/hombre4.jpg",
  },
  {
    id: 5,
    nombre: "Campera marron claro",
    categoria: "hombre",
    precio: 5000,
    img: "./imagen/hombr5.jpg",
  },
  {
    id: 6,
    nombre: "Campera con cierre",
    categoria: "mujer",
    precio: 6500,
    img: "./imagen/mujer1.jpg",
  },
  {
    id: 7,
    nombre: "Campera con capucha",
    categoria: "mujer",
    precio: 8500,
    img: "./imagen/mujer2.jpg",
  },
  {
    id: 8,
    nombre: "Campera con corderoy",
    categoria: "mujer",
    precio: 8000,
    img: "./imagen/mujer3.jpg",
  },
  {
    id: 9,
    nombre: "Campera camuflada",
    categoria: "mujer",
    precio: 14000,
    img: "./imagen/mujer4.jpg",
  },
  {
    id: 10,
    nombre: "Campera azul oscuro",
    categoria: "mujer",
    precio: 7000,
    img: "./imagen/mujer5.jpg",
  },
  {
    id: 11,
    nombre: "Campera blanca",
    categoria: "mujer",
    precio: 8000,
    img: "./imagen/mujer6.jpg",
  },
  {
    id: 12,
    nombre: "Conjunto de sky",
    categoria: "niño",
    precio: 40000,
    img: "./imagen/niño1.jpg",
  },
  {
    id: 13,
    nombre: "Campera amarilla",
    categoria: "niño",
    precio: 4000,
    img: "./imagen/niño2.jpg",
  },
  {
    id: 14,
    nombre: "Campera de sky camuflada",
    categoria: "niño",
    precio: 13010,
    img: "./imagen/niño3.jpg",
  },
  {
    id: 15,
    nombre: "Campera de invierno",
    categoria: "niño",
    precio: 4000,
    img: "./imagen/niño4.jpg",
  },
  {
    id: 16,
    nombre: "Campera reversible",
    categoria: "niño",
    precio: 12000,
    img: "./imagen/niño5.jpg",
  },
  {
    id: 17,
    nombre: "Camperita liviana",
    categoria: "niña",
    precio: 6000,
    img: "./imagen/niña1.jpg",
  },
  {
    id: 18,
    nombre: "Campera camuflada",
    categoria: "niña",
    precio: 9000,
    img: "./imagen/niña2.jpg",
  },
  {
    id: 19,
    nombre: "Campera camuflada sky",
    categoria: "niña",
    precio: 10000,
    img: "./imagen/niña3.jpg",
  },
  {
    id: 20,
    nombre: "Campera con corderoy verde",
    categoria: "niña",
    precio: 4000,
    img: "./imagen/niña4.jpg",
  },
  {
    id: 21,
    nombre: "Campera con corderoy blanco",
    categoria: "niña",
    precio: 8000,
    img: "./imagen/niña5.jpg",
  },
];

let carrito = [];
let carritoJSON = "";
let contenedor = document.getElementById("contenedor");
let carritoRender = document.getElementById("cart-row");
let modal = document.getElementById("myModal");
let cartNav = document.getElementById("cart-nav");
let botonCarrito = document.getElementById("cart-button");
let total = document.getElementById("total");
botonCarrito.addEventListener("click", mostrar);
let contenedorCarritoTotal = document.getElementById("contenedorCarritoTotal");
let totalFinal = "";
let unidades = "";

renderizar(cuadros);

comprobar(carrito);

function comprobar() {
  if (localStorage.getItem("Carrito")) {
    carrito = JSON.parse(localStorage.getItem("Carrito"));
    renderizarCarro(carrito);
    totalRender(carrito);
  } else {
    totalRenderVacio(carrito);
  }
}

let niña = document.getElementById("niña");
let mujer = document.getElementById("mujer");
let niño = document.getElementById("niño");
let hombre = document.getElementById("hombre");

let inicio = document.getElementById("Inicio");
let logo = document.getElementById("Logo");

inicio.addEventListener("click", renderizarTodo);
logo.addEventListener("click", renderizarTodo);

niña.addEventListener("click", filtro);
mujer.addEventListener("click", filtro);
niño.addEventListener("click", filtro);
hombre.addEventListener("click", filtro);

function filtro(e) {
  e.preventDefault();
  console.log(e.target.id);
  let categoriaFiltrado = cuadros.filter(
    (cuadro) => cuadro.categoria == e.target.id
  );
  renderizar(categoriaFiltrado);
}

function renderizarTodo(e) {
  e.preventDefault();
  renderizar(cuadros);
}

function renderizar(array) {
  contenedor.innerHTML = "";
  for (const cuadro of array) {
    let tarjetaBody = document.createElement("div");

    tarjetaBody.className = "tarjeta-body";
    tarjetaBody.innerHTML = `
            <div class="card">
                <div class="card-img">
                    <img src="${cuadro.img}" alt="Card image cap">
                </div>
                <h5 class="card-title">${cuadro.nombre}</h5>
                <p class="card-text">
                Pregunte los talle antes de comprar.</p>
                <div class="cardBody">
                    <h6 class= "precio"><strong>Precio: $ ${cuadro.precio.toFixed(
                      2
                    )}</strong></h6>
                    <button id="${
                      cuadro.id
                    }"  class="btn btn-secondary me-md-2">Comprar</button>
                </div>
            </div>
            `;

    contenedor.append(tarjetaBody);
  }

  let comprar = document.getElementsByClassName("btn btn-secondary me-md-2");

  for (boton of comprar) {
    boton.addEventListener("click", addCarrito);
  }
}

function renderizarCarro(array) {
  carritoRender.innerHTML = "";
  for (let cuadro of array) {
    let cart = document.createElement("div");
    cart.className = "cart-render";
    cart.innerHTML = `
            <div class="cart-row">
                <div  style="flex:1"><img class="row-image" src="${
                  cuadro.img
                }"></div>
                <div  style="flex:2"><p class="cart-p">${
                  cuadro.nombre
                }</p></div>
                <div  style="flex:1"><p class="cart-p">$${cuadro.precio.toFixed(
                  2
                )}</p></div>
                <div style="flex:1">
                    <p class="quantity">${cuadro.unidades}</p>
                    <div class="quantity">
                    <img id="${
                      cuadro.id
                    }" class="chg-quantity update-cart " src="./imagen/arriba.jpg">
                    <img id="${
                      cuadro.id
                    }" class="chg-quantity-2 update-cart" src="./imagen/abajo.jpg">
                    </div>
                </div>
                <div style="flex:1"><p class="cart-p">$${cuadro.subtotal.toFixed(
                  2
                )}</p></div>
            </div>
            `;
    carritoRender.append(cart);
  }

  let add = document.getElementsByClassName("chg-quantity update-cart");
  for (let a of add) {
    a.addEventListener("click", addCarrito);
  }
  let remove = document.getElementsByClassName("chg-quantity-2 update-cart");
  for (let b of remove) {
    b.addEventListener("click", removeItem);
  }
}

function addCarrito(e) {
  let productoBuscado = cuadros.find((cuadro) => cuadro.id == e.target.id);

  let indexCuadro = carrito.findIndex(
    (cuadro) => cuadro.id == productoBuscado.id
  );

  if (indexCuadro != -1) {
    carrito[indexCuadro].unidades++;

    carrito[indexCuadro].subtotal =
      carrito[indexCuadro].precio * carrito[indexCuadro].unidades;

    carritoJSON = JSON.stringify(carrito);

    localStorage.setItem("Carrito", carritoJSON);
  } else {
    carrito.push({
      id: productoBuscado.id,
      nombre: productoBuscado.nombre,
      categoria: productoBuscado.categoria,
      precio: productoBuscado.precio,
      img: productoBuscado.img,
      unidades: 1,
      subtotal: productoBuscado.precio,
    });

    carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("Carrito", carritoJSON);
  }
  renderizarCarro(carrito);
  totalRender(carrito);
}

function removeItem(e) {
  let productoBuscado = cuadros.find((cuadro) => cuadro.id == e.target.id);
  let indexCuadro = carrito.findIndex(
    (cuadro) => cuadro.id == productoBuscado.id
  );

  if (indexCuadro != -1) {
    if (carrito[indexCuadro].unidades >= 2) {
      carrito[indexCuadro].unidades--;
      carrito[indexCuadro].subtotal =
        carrito[indexCuadro].subtotal - carrito[indexCuadro].precio;
      carritoJSON = JSON.stringify(carrito);
      localStorage.setItem("Carrito", carritoJSON);
    } else {
      carrito.splice(indexCuadro, 1);
      carritoJSON = JSON.stringify(carrito);
      localStorage.setItem("Carrito", carritoJSON);
    }
  }
  totalFinal = carrito.reduce((a, b) => a + b.subtotal, 0);
  unidades = carrito.reduce((a, b) => a + b.unidades, 0);
  renderizarCarro(carrito);
  totalRender(carrito);
}

function totalRender(array) {
  totalFinal = carrito.reduce((a, b) => a + b.subtotal, 0);
  unidades = carrito.reduce((a, b) => a + b.unidades, 0);
  total.innerHTML = "";
  let totalResumen = document.createElement("div");
  totalResumen.className = "total";
  totalResumen.innerHTML = `
        <span class="close">&times;</span> 
        <h5 class="totalh5" >Items: <strong>${unidades}</strong></h5>
        <h5 class="totalh5" >Total:<strong> $ ${totalFinal.toFixed(
          2
        )}</strong></h5>
        <button id="clear" style="float:right; margin:5px;" type="button" class="btn btn-outline-success">Comprar Ya</button>
        `;
  total.append(totalResumen);

  let span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };

  cartNav.innerHTML = "";
  if (array.lenght != 0) {
    let parrafo = document.createElement("div");
    parrafo.className = "cart-total";
    parrafo.innerHTML = `<p>${unidades}</p>`;
    cartNav.append(parrafo);
  } else {
    let parrafo = document.createElement("div");
    parrafo.className = "cart-total";
    parrafo.innerHTML = `<p>0</p>`;
    cartNav.append(parrafo);
  }

  let clear = document.getElementById("clear");
  clear.addEventListener("click", borrarStorage);
}

function totalRenderVacio(array) {
  total.innerHTML = "";
  let totalResumen = document.createElement("div");
  totalResumen.className = "total";
  totalResumen.innerHTML = `
            <span class="close">&times;</span> 
            <h5 class="totalh5">Items: <strong> 0 </strong></h5>
            <h5 class="totalh5">Total:<strong> $ 0.00 </strong></h5>
            `;
  total.append(totalResumen);
  cartNav.innerHTML = "";
  let parrafo = document.createElement("div");
  parrafo.className = "cart-total";
  parrafo.innerHTML = `<p>0</p>`;
  cartNav.append(parrafo);

  let span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
}

function mostrar(e) {
  modal.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function borrarStorage() {
  localStorage.removeItem("Carrito");
  contenedorCarritoTotal.className = "modal-content";
  modal.style.display = "none";

  carrito = [];
  totalRenderVacio(carrito);
  renderizarCarro(carrito);
  renderizar(cuadros);
  comprobar(carrito);
}
