import React, { Component } from 'react';
import Producto from "./Producto";
import "./Productos.css";
import Buscador from "./Buscador";
class Productos extends Component {
	render() {



		return (
			<div className="productos">
			<Buscador
			 busqueda={this.props.busquedaProducto}
			/>
				<h2>Nuestros Productos</h2>
				<ul className="lista-productos">
					{Object.keys(this.props.productos).map(producto=>(

								<Producto
								key={producto}
								informacion={this.props.productos[producto]}
								
								 />
								
								
						))}
				</ul>
			</div>
		);
	}
}

export default Productos;