import { Button } from 'flowbite-react';
import './App.css'
import NavBar from './secciones/NavBar'
import Carousel from './secciones/Carousel'
import Nosotros from './secciones/Nosotros'

function App() {

  return (
    <>
      <NavBar/>
      <div className="h-screen w-full flex items-center justify-center bg-gray-200">
        {/* <span className="text-3xl">Hola, Paraguay Salta</span> */}
        <Carousel/>
      </div>
      <div id='nosotros' className="w-full">
        <Nosotros/>
      </div>

      <div id='nosotros' className="container h-screen mx-auto flex items-center justify-center bg-white">
          <Button>Click me</Button>
      </div>
      
    </>
  )
}

export default App
