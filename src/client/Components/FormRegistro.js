import React, { Component } from 'react'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@material-ui/core'

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
            TipoEmpresa:'',
            abierto:false
        };
        this.handleChange=this.handleChange.bind(this);
        this.addRegister=this.addRegister.bind(this);
        this.handleClose=this.handleClose.bind(this);
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

        if (this.state.nombre=='' || this.state.mail==''  || this.state.TipoEmpresa=='' || this.state.NoContacto=='' || this.state.NombreEmpresa=='') {
            alert('Aun faltan campos')
        }
        else
        {
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

            this.setState({abierto:true})
        }

    }

    handleClose()
    {
        this.setState({abierto:false})

        this.setState({
            nombre:'',
            mail:'',
            NombreEmpresa:'',
            NoContacto:''
        })
    }

    render() {
       
        const isOpen=this.state.abierto

        return (
            <div id="FormPrincipal">
                <form name="formulario" id="landingform" onSubmit={this.addRegister} >
                    <div className="form-row">
                        <div className="form-group col-12" style={{display:"flex", justifyContent:"center"}} >
                            <input className="box1" value={this.state.nombre} name="nombre" type="text" placeholder="Nombre y Apellido*" id="nombre" onChange={this.handleChange} value={this.state.nombre} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6 " style={{display:"flex", justifyContent:"center"}}>
                            <input type="mail" className="box1" name="mail" placeholder="Correo Electrónico*" id="mail" onChange={this.handleChange} value={this.state.mail} />
                        </div>
                        <div className="form-group col-md-6 " style={{display:"flex", justifyContent:"center"}}>
                            <input type="text"className="box1" name="NombreEmpresa" placeholder="Nombre Empresa" id="NombreEmpresa"  onChange={this.handleChange} value={this.state.NombreEmpresa} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6 " style={{display:"flex", justifyContent:"center"}}>
                            <input type="text" className="box1" name="NoContacto" placeholder="Número Telefónico*" id="NoContacto" onChange={this.handleChange} value={this.state.NoContacto} />
                        </div>
                        <div className="form-group col-md-6 " style={{display:"flex", justifyContent:"center"}}>
                            <select value={this.state.TipoEmpresa} className="box1" name="TipoEmpresa" id="TipoEmpresa" onChange={this.handleChange}>
                                <option value="...">Seleccione</option>
                                <option value="Manufactura">Manufactura</option>
                                <option value="Servicios">Servicios</option>
                                <option value="Comercializadora">Comercializadora</option>
                                <option value="Otras">Otras</option>
                            </select>
                        </div>
                    </div>
                    <div className="avisame" style={{display:"flex", justifyContent:"center"}}>
                        <button id="enviar" type="submit">AVÍSAME</button>  
                    </div>
                </form>

                <Dialog open={isOpen} onClose={this.handleClose} id="BoxDialog"> 
                    <DialogTitle id="dialogLanding">¡Gracias por Suscribirte!</DialogTitle>
                        <DialogContent id="dialogLanding">
                            <DialogContentText id="dialogLanding">
                                Te notificaremos cuando estemos listos para ofrecerte el mejor servicio.

                            </DialogContentText>
                        </DialogContent>
                    <DialogActions id="dialogLanding">
                    <button id="Agree" onClick={this.handleClose} color="primary">
                        Aceptar
                    </button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
