import React from 'react';
import Header from "./Components/Header"
import Formulario from "./Components/Formulario"
import Footer from "./Components/Footer"
import "./estilos/main.css"
// vamos lá

function App() {
  return (
    <div id="main">
    <Header/>
    <Formulario></Formulario>
    <Footer></Footer>
    </div>
    
  );
}

export default App;
