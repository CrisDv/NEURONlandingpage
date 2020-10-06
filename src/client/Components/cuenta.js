import React, { Component } from 'react'


import '../styles/reloj.css'

export default class reloj extends Component {

  constructor()
  {
    super()
    this.state={
      meses:undefined,
      dias:undefined,
      horas:undefined,
      minutos:undefined,
      segundos:undefined,
      visibilidad:'block'
    }
  }

  componentDidMount()
  {
    this.interval=setInterval(() => {
      let FECHA_LIMITE='Jan 10 2021 00:00:00'
      let FECHA_ACTUAL=new Date(), 
      TIEMPO_RESTANTE=(new Date(FECHA_LIMITE)-FECHA_ACTUAL+1000)/1000,//convertir los MILISEGUNDOS a SEGUNDOS y se le suma 1000 para no atrasar 1 segundo
      SEGUNDOS_RESTANTES=('0'+Math.floor(TIEMPO_RESTANTE % 60 )).slice(-2),
      MINUTOS_RESTANTES=('0'+Math.floor(TIEMPO_RESTANTE / 60 % 60)).slice(-2),
      HORAS_RESTANTES=('0'+Math.floor(TIEMPO_RESTANTE / 3600 % 24)).slice(-2),
      DIAS_RESTANTES=Math.floor(TIEMPO_RESTANTE / (3600*24)),
      MESES_RESTANTES=Math.floor(DIAS_RESTANTES/30);

      //console.log(MINUTOS_RESTANTES)

      this.setState({
        meses:MESES_RESTANTES,
        dias:DIAS_RESTANTES,
        horas:HORAS_RESTANTES,
        minutos:MINUTOS_RESTANTES,
        segundos:SEGUNDOS_RESTANTES
      })
      
    }, 1000);
  }

    render() {

        return (
            <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
                <div className="content" id="reloj">
              <div className="row" id="styleclock" >
                <div className="xde col-md-2 col-6" id="meses">
                  <h1 id="month">{this.state.meses} </h1>
                  <p >MESES</p>
                </div>
    
                <div className="xde col-md-2 col-6" id="dias" style={{display:`${ this.state.visibilidad}` }} >
                  <h1 id="day">{this.state.dias} </h1>
                  <p>DIAS</p>
                </div>
    
                <div className="xde col-md-2 col-6" id="horas">
                  <h1 id="hour">{this.state.horas} </h1>
                  <p >HORAS</p>
                </div>
    
                <div className="xde col-md-2 col-6" id="minutos">
                  <h1 id="minute">{this.state.minutos} </h1>
                  <p >MINUTOS</p>
                </div>
    
                <div className="xde col-md-2 col-6" id="segundos">
                  <h1 id="seconds">{this.state.segundos} </h1>
                  <p>SEGUNDOS</p>
                </div>
              </div>
              
             </div>
            </div>
        )
    }
}
