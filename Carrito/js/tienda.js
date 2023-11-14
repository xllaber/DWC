criterios=["Sin ordenar","Ascendente por precio", "Descendente por precio"]
let carrito = {};
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
		contenedor.innerHTML += `<div class='col'>
									<div class="card">
										<img src="../assets/img/${a.codigo}.jpg" alt="${a.nombre}">
										<div class="card-body">
											<h5 class="card-title">${a.nombre}</h5>
											<p class="card-text">${a.descripcion}</p>
											<b><p class="card-text text-center">${a.precio}&euro;</p></b>
										</div>
										<button id="${a.codigo}" class="btn-success">COMPRAR</button>
									</div>
								</div>
								`
	})
	Array.from(document.getElementsByClassName("btn-success")).forEach( b => {
		b.addEventListener("click", () => {
			let articulo =  listaArticulos.find(a => a.codigo === b.id);
			ponArticuloEnCarrito(articulo)
		})
	})
}


function ponArticuloEnCarrito(articulo){
	if (carrito.articulos.indexOf(articulo) < 0){
		articulo.unidades = 1;
		carrito.anyadeArticulo(articulo);
	} else {
		carrito.anyadeArticulo(articulo);
	}
}

function verCarro(){
	if (carrito.articulos.length <= 0){
		alert("El carrito esta vacio")
	} else {
		carrito.verCarrito();
	}
}

function efectuaPedido(){
	if (carrito.articulos.length === 0 ){
		alert("El carrito esta vacio");
	} else {
		let total =  document.getElementById("total").textContent;
		console.log(JSON.stringify(carrito) + ", Precio total: " + total + "€");
		carrito = new Carrito(carritos.length + 1);
		carritos.push(carrito);
	}
}

window.onload= () => {
	creaListaCriterios();
	pintaArticulos(criterios[0]);

	carrito = new Carrito(carritos.length + 1);
	carritos.push(carrito);

	let carritoImg = document.getElementById("carritoImg");
	carritoImg.addEventListener("click", () => verCarro());

	let dialogo = document.getElementById("miDialogo");
	let efectuarPedido = document.getElementById("btnEfectuaPedido");
	let cerrarCarrito = document.getElementById("btnCierraDialog");
	efectuarPedido.addEventListener("click", () => {
		this.efectuaPedido();
		dialogo.close();
	});
	cerrarCarrito.addEventListener("click", () => dialogo.close());
}
