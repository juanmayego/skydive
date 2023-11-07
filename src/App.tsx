import './App.css'
import NavBar from './secciones/NavBar'
import Header from './secciones/Header'
import Nosotros from './secciones/Nosotros'
import Staff from './secciones/Staff'
import Saltar from './secciones/Saltar'
import Contacto from './secciones/Contacto'
import Info from './secciones/Footer'
import Saltar_2 from './secciones/Saltar_2'

function App() {

  return (
    <>
      <NavBar/>
      <>
        {/* <span className="text-3xl">Hola, Paraguay Salta</span> */}
        <Header/>
      </>
      <div id='nosotros' className="w-full">
        <Nosotros/>
      </div>

      {/* <div id='saltar' className="w-full">
        <Saltar/>
      </div> */}

      <div id='saltar' className="w-full">
        <Saltar_2/>
      </div>

      <div id='staff' className="w-full">
          <Staff/>
      </div>

      <div id='contacto' className="w-full">
          <Contacto/>
      </div>

      <div id='info' className="w-full">
          <Info/>
      </div>
      
    </>
  )
}

export default App
