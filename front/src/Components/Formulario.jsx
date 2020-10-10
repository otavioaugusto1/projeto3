import React, { Component } from "react"
import "../estilos/formulario.css"
import axios from 'axios'
const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: {name:'', local : ''},
    list:[]
}

export default class Formulario extends Component{
    state= {...initialState}
    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url  = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url,user)
        .then(resp=>{
            const list = this.getUpdatedList(resp.data)
            this.state({user:initialState.user,list})
        })
    }
    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list 
    }
    updatedFiled(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }
    render(){
        return(
            <div id="form">
            <h1 id="h1">Cadastro para carona</h1>
            <form id="myForm">
                <div>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="name" value= {this.state.name}
                    onChange= {e=> this.updatedFiled(e)}/>
                </div>
                <div>
                    <label for="local">Local:</label>
                    <input type="text" id="local" name="local" value= {this.state.email}
                    onChange= {e=> this.updatedFiled(e)} />
                </div>
                <div>
                    <label for="data">Data:</label>
                    <input type="date" id="data" name="data" />
                </div>
                
                <select name="select" id="select">
                    <option value="motorista">Motorista</option> 
                    <option value="carona" selected>Carona</option>
                </select>
                <div class="button">
                    <button type="submit" onClick={e => this.save(e)}>Enviar!</button>
                </div>
            </form>
        </div>
        )
    }
}