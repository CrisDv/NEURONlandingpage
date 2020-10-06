import React, { Component } from 'react'

import './styles/home.css'
import Bar from './Components/bar'
import Descripcion from './Components/Descripcion'
import FormRegistro from './Components/FormRegistro'
import Cuenta from './Components/cuenta'

export default class home extends Component {
    render() {
        return (
            <div>
                <Bar/>
                <Descripcion/>
                <FormRegistro/>
                <Cuenta/>
            </div>
        )
    }
}
