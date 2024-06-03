import React from 'react'
import logo from '../assets/img/logo.svg'
import imgHeader from '../assets/img/header_inicio.jpg'

const Header = () => {
    return (
        <header className='header'>
            <div className="header-content container">
                <div className="navbar">
                    <div className="logo">
                        <img src={logo} alt="Logo Cafetería" />
                    </div>
                    <div className="nav-main">
                        <a href="">Inicio</a>
                        <a href="">Nosotros</a>
                        <a href="">Proceso</a>
                        <a href="">Ménu</a>
                        <a href="">Galería</a>
                        <a href="">Contacto</a>
                    </div>
                </div>
                <div className="header-text">
                    <h1>Disfruta una Deliciosa taza de café</h1>
                </div>
            </div>
        </header>
    )
}

export default Header