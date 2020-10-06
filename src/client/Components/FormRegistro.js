import React, { Component } from 'react'

import '../styles/Form.css'
export default class FormRegistro extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            nombre:'',
            mail:'',
            NombreEmpresa:'',
            NoContacto:'',
            TipoEmpresa:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.addRegister=this.addRegister.bind(this);
    }

    handleChange(e)
    {
        const {name, value}= e.target//obtener nombre del input y su valor

        this.setState({
            [name]:value
        })
    }

    addRegister(e)
    {
        e.preventDefault();

        fetch('/api/landing', {
            method:'POST',
            body:JSON.stringify(this.state),//enviar el estado ya que tiene todos los atributos de nombre, empresa etc
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
       /* .then(res=>console.log(res))
        .catch(err=>console.error("ERROR"+err))*/
    }

    render() {
        return (
            <div id="FormPrincipal">
                <form name="formulario" id="landingform" onSubmit={this.addRegister} >
                    <div className="form-row">
                        <div className="form-group col-12" style={{display:"flex", justifyContent:"center"}} >
                            <input className="box1" name="nombre" type="text" placeholder="Nombre y Apellido*" id="nombre" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6 ">
                            <input type="mail" className="box1" name="mail" placeholder="Correo Electrónico*" id="mail" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-6 ">
                            <input type="text"className="box1" name="NombreEmpresa" placeholder="Nombre Empresa" id="NombreEmpresa"  onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6 ">
                            <input type="text" className="box1" name="NoContacto" placeholder="Numero Telefónico*" id="NoContacto" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-6 ">
                            <input type="text" className="box1" name="TipoEmpresa" placeholder="Tipo de empresa" id="TipoEmpresa" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="avisame" style={{display:"flex", justifyContent:"center"}}>
                        <button id="enviar" type="submit">AVÍSAME</button>  
                    </div>
                </form>
            </div>
        )
    }
}
