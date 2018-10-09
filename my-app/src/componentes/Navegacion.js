import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./Navegacion.css"

// vamos a crear una barra de navegacion



 class Navegacion extends Component {
	render() {

		return (
			<nav className="navegacion">
				<Link to={"/nosotros"}>Nosotros</Link>		
				<Link to={"/productos"}>Produtos</Link>	
				<Link to={"/contacto"}>Contacto</Link>	

			</nav>
		);
	}
}

export default Navegacion;