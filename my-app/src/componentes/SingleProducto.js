import React, { Component } from 'react';
import "./SingleProducto.css";
import Error from "./Error"; 


export class SingleProducto extends Component {
	render() {

// creamos un destructor para estrar las propiedades


const {imagen,nombre,precio,descripcion} =this.props.producto;

	
		return (
			<div className="info-producto">
				 <div className="imagen">
				 	<img src={`/img/${imagen}.png`} />
				

				 </div>

				  <div className="info">
				  	
				  	<h2>{nombre}</h2>
				  	<p className="precio">$ {precio}</p>
					<p>{descripcion}</p>
				  </div>
			</div>
		);
	
}

}


export default SingleProducto;