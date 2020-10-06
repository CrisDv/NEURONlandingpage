import React, { Component } from 'react'

import '../styles/descripcion.css'
export default class Descripcion extends Component {
    render() {
        return (
            <div>
                <div id="DescriptionText" className="mt-5">
                    <p id="Titulo">Plataforma administrativa en remoto</p>
                </div>
                <div id="que_es">
                    <p>
                        Somos el equipo de trabajo que gestiona el area administrativa de tu empresa
                        <br/>para que puedas enfocarte en tu crecimiento comercial
                    </p>

                    <p style={{fontSize:"30px"}} >Suscríbete para obtener <b>30 días gratis. </b> </p>
                </div>
            </div>
        )
    }
}
