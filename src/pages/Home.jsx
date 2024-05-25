import React from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"



export const Home = (props) =>{

    

    return(
        < >
        <Header/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Main perfil={props.Perfil}/>
        <br />
        <br />
        <br />
       
        
        <Footer/>
        </>
    )
}