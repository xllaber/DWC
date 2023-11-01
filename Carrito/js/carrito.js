class Carrito{
	constructor(id){
		this.id = id;
		this.articulos = [];
	}
						
	anyadeArticulo(articulo){
		// let existe = this.articulos.find(a => a.codigo === articulo.codigo);
		if (this.articulos.indexOf(articulo) !== -1) {
			articulo.unidades++;
		} else {
			console.log(this);
			this.articulos.push(articulo);
		}
	}
				
	borraArticulo(codigo){		
		let articuloIdx = this.articulos.findIndex(a => a.codigo === codigo);
		this.articulos.splice(articuloIdx, 1);
		this.verCarrito();
	}
	
	modificaUnidades(codigo, n){
		let articulo = this.articulos.find(a => a.codigo === codigo);
		console.log(articulo);
		(n === 1) ? articulo.unidades++ : (n === -1) ? articulo.unidades-- : undefined;
		this.verCarrito();
	}	
			
	verCarrito(){
		let dialogo = document.getElementById("miDialogo");
		dialogo.showModal();
		let dialogContent = document.getElementById("dialogContent");
		document.getElementById("idPedido").innerHTML = `${this.id}`;
		// let table = document.createElement("table");
		// let tbody = document.createElement("t")
		dialogContent.innerHTML = `<table class="table table-bordered table-striped">
										<tbody>
											<tr>
												<td></td>
												<td>NOMBRE</td>
												<td>DESCRIPCION</td>
												<td>PRECIO</td>
												<td>UNIDADES</td>
												<td>TOTAL</td>
												<td></td>
											</tr>
									`;
		this.articulos.forEach(a => {
			dialogContent.innerHTML += `<tr>
											<td><img src="../assets/img/${a.codigo}.jpg" width="40px" height="40px" alt="${a.nombre}"></td>
											<td>${a.nombre}</td>
											<td>${a.descripcion}</td>
											<td>${a.precio}</td>
											<td>${a.unidades}</td>
											<td>${a.unidades * a.precio}</td>
											<td>
												<button id="incremento" class="btn-success">+</button>
												<button id="decremento" class="btn-warning">-</button>
												<button id="borrar" class="btn-danger">Eliminar Producto</button>
											</td>
										</tr>`
			// document.getElementById("incremento").addEventListener("click", () => this.modificaUnidades(a.codigo, 1));
			// document.getElementById("decremento").addEventListener("click", () => this.modificaUnidades(a.codigo, -1));
			// document.getElementById("borrar").addEventListener("click", () => this.borraArticulo(a.codigo));
		})
		dialogContent.innerHTML += "</tbody></table>";
		// let btnsIncremento = Array.from(document.getElementsByClassName("btn-success"));
		// let btnsDecremento = Array.from(document.getElementsByClassName("btn-warning"));
		// let btnsEliminar = Array.from(document.getElementsByClassName("btn-danger"));
		//
		// btnsIncremento.forEach(b => b.addEventListener("click", () => this.modificaUnidades(a.codigo, 1)));
		// btnsDecremento.forEach(b => b.addEventListener("click", () => this.modificaUnidades(a.codigo, -1)));
		// btnsEliminar.forEach(b => b.addEventListener("click", () => this.borraArticulo(a.codigo)));
	}
}
