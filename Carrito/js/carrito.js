class Carrito{
	constructor(id){
		this.id = id;
		this.articulos = [];
	}
						
	anyadeArticulo(articulo){
		}			
				
	borraArticulo(codigo){		
	}
	
	modificaUnidades(codigo, n){
	}	
			
	verCarrito(){
		let dialogo = document.getElementById("miDialogo");
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
											<td><img src="../assets/img/${a.codigo}" alt="${a.nombre}"></td>
											<td>${a.nombre}</td>
											<td>${a.descripcion}</td>
											<td>${a.precio}</td>
											<td>${a.unidades}</td>
											<td>${a.unidades * a.precio}</td>
											<td>
												<button class="btn-success">+</button>
												<button class="btn-warning">-</button>
												<button class="btn-danger">Eliminar Producto</button>
											</td>
										</tr>`
		})
		dialogContent.innerHTML += "</tbody></table>";
	}			
}
