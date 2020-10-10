import React, { Component } from "react"
import "../estilos/header.css"
import logo from "../logoCarona.jpg"

export default class Header extends Component{
    render(){
        return(
            <div>
                <div id="header">
                    <img id="imgprincipal" src={logo} alt="logo principal" height="50px" width="50px"/>
                </div>
            </div>
            
        )
    }
}