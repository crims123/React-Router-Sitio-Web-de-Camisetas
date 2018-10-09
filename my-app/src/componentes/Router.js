import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Nosotros from "./Nosotros";
import Navegacion from "./Navegacion";
import Error from "./Error";  // exportamos los componentes q se van a usat
import infoProductos from "../datos/datos.json";
import Productos from "./Productos";
import Contacto from "./Contacto";
import Header from "./Header";
import SingleProducto from "./SingleProducto";


 class Router extends Component {


state= {
	productos: [],
	terminoBusqueda:"",
}


// monstamos los productos al estado vacio de productos que vienen del archivo json

componentWillMount(){
	this.setState({
		productos:infoProductos,
		
	})
}


// recibimos el termino del props del buscador

busquedaProducto=(busqueda)=>{
	// hacemos una comparacion para que solo busque si se escriben mas de 3 caracteres

	if (busqueda.length>3) {

		this.setState({
			terminoBusqueda:busqueda,
		})
	}

	//si no toca resetear la busqueda

	else{
		this.setState({
			terminoBusqueda:"",
		})
	}

}



	render() {

	

		let productos =[...this.state.productos];
		let busqueda =this.state.terminoBusqueda;
		let resultado;

		if (busqueda!=="") {
			resultado = productos.filter(producto=>(
					producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !==-1  // los transforma todo a minusculas

				))
		}

		else{
			resultado =productos;
		}

		return (
			<BrowserRouter>
				
			<div className="contenedor" >

				<Header/>
				<Navegacion />
				<Switch>
					<Route exact path="/" render={()=>(
							<Productos
							 productos={resultado}
							 busquedaProducto ={this.busquedaProducto}
							  />


						)}/>

					<Route exact path="/nosotros" component={Nosotros}/>
					<Route exact path="/productos" render={()=>(
							<Productos
							 productos={resultado}
							 busquedaProducto ={this.busquedaProducto}
							  />


						)}/>


					<Route exact path="/producto/:productoId" render={(props)=>{
								//console.log(props) 

								let idProducto = props.location.pathname.replace("/producto/","");

								return (
										<SingleProducto 
										producto = {this.state.productos[idProducto]}
										/>
									)

						}}/>

						<Route exact path="/contacto" component={Contacto}/>
						<Route component={Error}/>
				
				</Switch>
				</div>
			</BrowserRouter>


		);
	}
}

export default Router;