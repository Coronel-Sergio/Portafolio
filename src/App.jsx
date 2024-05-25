import {Home} from "./pages/Home"
import "../src/index.css"

function App() {
  

  const Perfil = {
    Nombre:"Sergio Antonio",
    Apellido:"Coronel",
    Edad:19,
    Direccion:"Salta 660",
    Telefono:"3865-676999",
    Email:"totocoronel02@gmail.com"
  }


return (
  <>
   <Home Perfil={Perfil}/>
  </>
)
}

export default App
