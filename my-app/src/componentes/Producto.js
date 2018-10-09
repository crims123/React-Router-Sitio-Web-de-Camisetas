import React, { Component } from 'react';
import {Link} from "react-router-dom";
export class Producto extends Component {
	render() {

// creamos un objeodestructor para destruir el objeto y extraer las propiedades
// unamos la equiqueta Link para agregar los links de la pagina con la importacion de react-router-dom"
const {id,nombre,precio,descripcion,imagen} =this.props.informacion;

//console.log(nombre);
		return (
			<li>
				<img src={`img/${imagen}.png`} />
				<p>{nombre} <span> ${precio}</span></p>
				<Link to={`/producto/${id}`}>Mas informacion</Link>
			</li>
		);
	}
}

export default Producto;