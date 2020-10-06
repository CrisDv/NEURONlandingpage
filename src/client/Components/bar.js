import React, { Component } from "react";

import Logo from "../Assets/LogoNeuron.png";
import IG from "../Assets/instagram.png";

import '../styles/ComponentBar.css'
export default class bar extends Component {
  render() {
    return (
      <div style={{ color: "white" }}>
        <nav className="navbar nav-expand-lg sticky-top">
          <div id="navLogo" >
            <img src={Logo} alt="IMAGEN NO DISPONIBLE" style={{width:"240px", height:"42px"}} />
          </div>

          <div className="">
            <span href="/" style={{marginRight:"30px"}} >Siguenos</span>
            <img src={IG} alt="IG" style={{width:"30px", height:"30px", marginRight:"140px"}} />
        </div>
        </nav>
      </div>
    );
  }
}
