import React from 'react'
import "../css/Footer.css"

const Footer = () => {
  return (
    <>
<footer>
<div className='footerContainer'>
    <h2 className='text-center' id='Contactos'>Contactos</h2>
    <br />
        <div className='socialIcons'>
          <a href="https://www.facebook.com/sergio.coronel.2024?mibextid=ZbWKwL" target='_blank'><i className='fa-brands fa-facebook'></i></a>
          <a href="https://www.linkedin.com/in/sergio-coronel-96352830a/" target='_blank'><i className='fa-brands fa-linkedin'></i></a>
          <a href="https://github.com/Coronel-Sergio" target='_blank'><i className='fa-brands fa-github'></i></a>
        </div>
        <br />
        <div className="footerNav">
            <ul>
                <li><a href="#Inicio">Inicio</a></li>
                <li><a href="#Yo">Sobre Mi</a></li>
                <li><a href="#Tecnologias">Tecnologias</a></li>
                <li><a href="#Proyectos">Proyectos</a></li>
            </ul>
        </div>
        <div className='footerBottom'>
          <p>Copyright &copy;2024; Desined by Sergio</p>
        </div>
    </div>
</footer>
   
    </>
  )
}

export default Footer