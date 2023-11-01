criterios=["Sin ordenar","Ascendente por precio", "Descendente por precio"]
let carritoGeneral = {};
let carritos = [];

function creaListaCriterios(){
	let criteriosOrdenacion = document.getElementById("criteriosOrdenacion");
	criterios.forEach(c => {
		let option = document.createElement("option");
		option.value = c;
		option.textContent = c;
		criteriosOrdenacion.appendChild(option);
	})
	criteriosOrdenacion.addEventListener("change", () => pintaArticulos(criteriosOrdenacion.value));
}

function pintaArticulos(orden){
	let contenedor = document.getElementById("contenedor");
	contenedor.innerHTML = "";
	let listaOrdenada = [];
	let copia = [...listaArticulos];

	if (orden === criterios[0]){
		listaOrdenada = listaArticulos;
	} else if (orden === criterios[1]){
		listaOrdenada = copia.sort((a, b) => a.precio - b.precio);
	} else if (orden === criterios[2]) {
		listaOrdenada = copia.sort((a, b) => b.precio - a.precio);
	}

	listaOrdenada.forEach( a => {
		console.log(a);
		contenedor.innerHTML += `<div class='col'>
									<div class="card">
										<img src="../assets/img/${a.codigo}.jpg" alt="${a.nombre}">
										<div class="card-body">
											<h5 class="card-title">${a.nombre}</h5>
											<p class="card-text">${a.descripcion}</p>
											<b><p class="card-text text-center">${a.precio}</p></b>
										</div>
										<button id="${a.codigo}" class="btn-success">COMPRAR</button>
									</div>
								</div>
								`
		// debugger;
		// document.getElementById(`${a.codigo}`).addEventListener("click", () => ponArticuloEnCarrito(a.codigo));
	})
	Array.from(document.getElementsByClassName("btn-success")).forEach( b => {
		b.addEventListener("click", () => {
			let articulo =  listaArticulos.find(a => a.codigo === b.id);
			ponArticuloEnCarrito(articulo)
		})
	})
}


function ponArticuloEnCarrito(articulo){
	// let articulo = listaArticulos.find(a => a.codigo === codigo);
	console.log(articulo);
	articulo.unidades = 1;
	carritoGeneral.anyadeArticulo(articulo);
}

function verCarro(){
	carritoGeneral.verCarrito();
	console.log(carritoGeneral);
}

function efectuaPedido(){

}

window.onload= () => {
	creaListaCriterios();
	pintaArticulos(criterios[0]);

	let carrito = new Carrito(carritos.length + 1);
	carritoGeneral = carrito;
	carritos.push(carrito);

	let carritoImg = document.getElementById("carritoImg");
	carritoImg.addEventListener("click", () => verCarro());

	// let btnsIncremento = Array.from(document.getElementsByClassName("btn-success"));
	// let btnsDecremento = Array.from(document.getElementsByClassName("btn-warning"));
	// let btnsEliminar = Array.from(document.getElementsByClassName("btn-danger"));
	//
	// btnsIncremento.forEach(b => b.addEventListener("click", () => this.modificaUnidades(a.codigo, 1)));
	// btnsDecremento.forEach(b => b.addEventListener("click", () => this.modificaUnidades(a.codigo, -1)));
	// btnsEliminar.forEach(b => b.addEventListener("click", () => this.borraArticulo(a.codigo)));

}
