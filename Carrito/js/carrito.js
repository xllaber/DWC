class Carrito{
	constructor(id){
		this.id = id;
		this.articulos = [];
	}
						
	anyadeArticulo(articulo){
		if (this.articulos.indexOf(articulo) !== -1) {
			articulo.unidades += 1;
		} else {
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
		(articulo.unidades === 0) ? this.borraArticulo(articulo.codigo) : undefined;
		this.verCarrito();
	}	
			
	verCarrito(){
		let dialogo = document.getElementById("miDialogo");
		dialogo.showModal();
		let dialogContent = document.getElementById("dialogContent");
		dialogContent.innerHTML = "";
		document.getElementById("idPedido").innerHTML = `${this.id}`;
		let contenido = `<table class="table table-bordered table-striped">
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
			contenido += `<tr>
							<td><img src="assets/img/${a.codigo}.jpg" width="40px" height="40px" alt="${a.nombre}"></td>
							<td>${a.nombre}</td>
							<td>${a.descripcion}</td>
							<td>${a.precio}&euro;</td>
							<td>${a.unidades}</td>
							<td>${a.unidades * a.precio}&euro;</td>
							<td>
								<button id="${a.codigo}" class="btn-success rounded">+</button>
								<button id="${a.codigo}" class="btn-warning rounded">-</button>
								<button id="${a.codigo}" class="btn-danger rounded">Eliminar</button>
							</td>
						</tr>`
		})
		contenido += "</tbody></table>";
		dialogContent.innerHTML = contenido;
		Array.from(dialogContent.getElementsByClassName("btn-success"))
			.forEach(b => b.addEventListener("click", () => this.modificaUnidades(b.id, 1)));
		Array.from(dialogContent.getElementsByClassName("btn-warning"))
			.forEach(b => b.addEventListener("click", () => this.modificaUnidades(b.id, -1)));
		Array.from(dialogContent.getElementsByClassName("btn-danger"))
			.forEach(b => b.addEventListener("click", () => this.borraArticulo(b.id)));

		let totalDiv = document.getElementById("total");
		// let total = this.articulos.reduce((total, a) => a.precio * a.unidades, 0);
		let total = 0;
		this.articulos.forEach(a => total += (a.precio * a.unidades));
		totalDiv.innerHTML = total;
	}
}
