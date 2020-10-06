import React, { Component } from "react";

import Logo from "../Assets/LogoNeuron.png";
import IG from "../Assets/instagram.png";

import '../styles/ComponentBar.css'
export default class bar extends Component {
  render() {
    return (
      <div style={{ color: "white" }}>
        <nav className="navbar nav-expand-lg sticky-top justify-content-center">
          <div id="navLogo" >
            <img src={Logo} alt="IMAGEN NO DISPONIBLE" style={{width:"240px", height:"42px"}} />
          </div>

          <div className="">
            <a href="https://www.instagram.com/neuron_remoter/" style={{textDecoration:"none"}} ><span  style={{marginRight:"30px", textDecoration:"none", color:"white"}} >Síguenos</span></a>
            <a href="https://www.instagram.com/neuron_remoter/"><img src={IG} alt="IG"  style={{width:"30px", height:"30px", marginRight:"140px"}} /></a>
        </div>
        </nav>
      </div>
    );
  }
}
