import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./Navegacion.css"
import "./Contacto.css"


 class Contacto extends Component {
	render() {

		return (
			
			<form>
			<legend>Formulario de Contacto</legend>
				<div className="input-field">
					
					<label>Nombre:</label>
					<input type="nombre" name="Ingresa tu nombre"/>
				</div>

				<div className="input-field">
					
					<label>Emal:</label>
					<input type="email" name="Ingresa tu Email"/>
				</div>

					<div className="input-field">
					
					<label>Mensaje:</label>
					<textarea></textarea>
				</div>
				<div className="input-field enviar">
			
			<input type="submit" value="Enviar"/>
		</div>

		</form>
		);
	}
}

export default Contacto;