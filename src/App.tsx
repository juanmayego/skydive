import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const menus = [
    { name: 'Nosotros', link: '#nosotros' },
    { name: 'Saltos', link: '#' },
    { name: 'Instructores', link: '#' },
    { name: 'Precios', link: '#' },
    { name: 'Contacto', link: '#' },
  ]

  return (
    <>
      <nav
        className="absolute flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white sm:bg-transparent shadow sm:shadow-none">
        <div
          className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
          <button id="menuBtn" className="hamburger block sm:hidden focus:outline-none" type="button" aria-label="Show Menu"><span
              className="hamburger__top-bun"></span><span className="hamburger__bottom-bun"></span></button>
        </div>
        <div id="menu"
          className="w-full sm:w-auto self-end sm:self-center hidden sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0">
            {menus.map(menu => <a className="text-gray-800 font-bold hover:text-purple-600 text-lg text-center w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1"
            href={menu.link}>{menu.name}</a>)}
          
        </div>
      </nav>
      <div className="h-screen w-full flex items-center justify-center bg-gray-200">
        <span className="text-3xl">Hola, Paraguay Salta</span>
        
      </div>
      <div id='nosotros' className="container h-screen mx-auto flex items-center justify-center bg-white">
        <span className="text-3x2">count {count}</span>
      </div>
      
    </>
  )
}

export default App
