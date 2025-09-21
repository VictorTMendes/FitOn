import { useState } from 'react'
import './App.css'

import Logo from './img/fiton-logo.png'
import ImagemPrincipal from './img/nutricionista.png'

function App() {

  return (
    <>
      <div className="container">
        <div className="main-container">
          <div className="header">
            <img className='logo' src={Logo} alt="logo FitOn"/>
          </div>

          <div className="info-principal">
            <div className="texto-principal">
              <h1 className='titulo'>Transforme sua vida com FitOn ao seu lado!</h1>
              <p className='info'>Você está a poucos passos da melhor versão de si mesmo! Conheça o universo da nutrição personalizada com FitOn, onde cada escolha alimentar é guiada pelo seu própio ritmo e acompanhada de perto com inteligência artificial!</p>
              <div className="button-cta">
                
              </div>
            </div>
            <img className='imagem-principal'src={ImagemPrincipal} alt="imagem de frutas"/>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
