import React, { Fragment } from 'react'
import './assets/styles/app.css'

const App = () => {

  return (
    <div className='app'>
      <section className='appEncrypter'>
        <header className='appEncrypter__header'>
          <img
            src='www.google.com'
            alt='logo'
            className='appLogo'
          />
        </header>
        <main className='appEncrypter__main'>
          <textarea
            className='appEncrypter__mainMessage'
            placeholder='Ingrese el texto aqui'
          />
        </main>
        <footer className='appEncrypter__footer'>
          <span>Solo letras minusculas y sin acentos</span>
          <div className='appEncrypter__footerButtons'>
            <button id='button__Encrypt'>Encriptar</button>
            <button id='button__Desencrypt'>Desencriptar</button>
          </div>
        </footer>
      </section>
      <section className='appEncrypted'>
        <p></p>
        <button>Copiar</button>
      </section>
    </div>
  )
}

export default App
