import React from 'react'
import "../css/Main.css"
import Perfil1 from "../assets/Perfil1.jpg"
import Hobby from "../assets/Hobby.jpg"
import Educacion from "../assets/Educacion.jpg"
import Proximamente from "../assets/Proximamente.jpg"
import Csharp from "../assets/Csharp.png"
import sql from "../assets/sql.png"
import mysql from "../assets/mysql.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react1 from "../assets/react1.png"
import git from "../assets/git.png"


const Main = (props) => {
  
  return (
    <>
      <h2 className='text-center' id='Yo'>Sobre Mi</h2>
      <br />
      <div className='container'>

        <div className='card'>
          <div className='imgBx'>
             <img src={Perfil1}  alt="" />
          </div>
          <div className='content'>
            <h3>Me llamo: {props.perfil.Nombre} {props.perfil.Apellido}</h3>
            <p>Edad: {props.perfil.Edad}</p>
            <p>Direccion: {props.perfil.Direccion}</p>
            <p>Telefono: {props.perfil.Telefono}</p>
            <p>Email: {props.perfil.Email}</p>
          </div>
        </div>

        <div className='card'>
          <div className='imgBx'>
             <img src={Hobby} alt="" />
          </div>
          <div className='content'>
            <h2>Hobbies</h2>
            <p>basquet</p>
            <p>futbol</p>
            <p>correr</p>
            <p>ciclismo</p>
            <p>videojuegos</p>
          </div>
        </div>

        <div className='card'>
          <div className='imgBx'>
             <img src={Educacion} alt="" />
          </div>
          <div className='content'>
            <h2>Estudios</h2>
            <p>Secundario: Escuela Media de Arboles Grandes</p>
            <p>Universidad: Tecnicatura Universitaria en Programacion</p>
            <p>Curso: YoProgramo</p>
            <p></p>
          </div>
        </div>

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <h2 className='text-center' id='Tecnologias'>Tecnologias</h2>
      <br />
      <br />
      <div className='slider'>
        <div className='slide-track'>

          <div className='slide'>
            <img src={Csharp} alt="" />
          </div>

          <div className='slide'>
            <img src={sql} alt="" />
          </div>

          <div className='slide'>
            <img src={mysql} alt="" />
          </div>

          <div className='slide'>
            <img src={html} alt="" />
          </div>

          <div className='slide'>
            <img src={css} alt="" />
          </div>

          <div className='slide'>
            <img src={js} alt="" />
          </div>

          <div className='slide'>
            <img src={react1} alt="" />
          </div>

          <div className='slide'>
            <img src={git} alt="" />
          </div>
          
          <div className='slide'>
            <img src={Csharp} alt="" />
          </div>

          <div className='slide'>
            <img src={sql} alt="" />
          </div>

          <div className='slide'>
            <img src={mysql} alt="" />
          </div>

          <div className='slide'>
            <img src={html} alt="" />
          </div>

          <div className='slide'>
            <img src={css} alt="" />
          </div>

          <div className='slide'>
            <img src={js} alt="" />
          </div>

          <div className='slide'>
            <img src={react1} alt="" />
          </div>

          <div className='slide'>
            <img src={git} alt="" />
          </div>


        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <h2 className='text-center' id='Proyectos'>Proyectos</h2>
      <br />
      <div className='container'>

        <div className='card'>
          <div className='imgBx'>
             <img src={Proximamente} alt="" />
          </div>
          <div className='content'>
            <h2>Proximamente</h2>
            
          </div>
        </div>

        <div className='card'>
          <div className='imgBx'>
             <img src={Proximamente} alt="" />
          </div>
          <div className='content'>
            <h2>Proximamente</h2>
           
          </div>
        </div>

        <div className='card'>
          <div className='imgBx'>
             <img src={Proximamente} alt="" />
          </div>
          <div className='content'>
            <h2>Proximamente</h2>
           
          </div>
        </div>

      </div>
      <br />
      <br />
      
      <div className='container'>

        <div className='card'>
          <div className='imgBx'>
             <img src={Proximamente} alt="" />
          </div>
          <div className='content'>
            <h2>Proximamente</h2>
           
          </div>
        </div>

        <div className='card'>
          <div className='imgBx'>
             <img src={Proximamente} alt="" />
          </div>
          <div className='content'>
            <h2>Proximamente</h2>
           
          </div>
        </div>

        <div className='card'>
          <div className='imgBx'>
             <img src={Proximamente} alt="" />
          </div>
          <div className='content'>
            <h2>Proximamente</h2>
           
          </div>
        </div>

      </div>

     
    </>
  )
}

export default Main