import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./Buscador.css";

// vamos a crear un buscador
// para eso usamos la propiedad onchange para cada vez que haya un cambio lo guarde en es estado
// guarde todo lo que escribamos



 class Bucador extends Component {

leerDatos =(e)=>{
	//console.log(e.target.value); con la sintaxis e.target.value nos graba todo lo que escribamos en el input

	// creamos una variable con el termino

	const termino = e.target.value;
	// y lo enviamos por props a router que es el principal
	this.props.busqueda(termino);

}

	render() {

		return (
			
			<form className="busqueda">
				<input type="text" placeholder="Busqueda..." onChange={this.leerDatos} />
			</form>
		);
	}
}

export default Bucador ;