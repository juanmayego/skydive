import { Navbar } from 'flowbite-react';
import viteLogo from '/vite.svg';

function NavBar() {

  const menus = [
    { name: 'Nosotros', link: '#nosotros' },
    { name: 'Quiero Saltar', link: '#saltar' },
    { name: 'Staff', link: '#staff' },
    { name: 'Saltos de Exhibición', link: '#' },
    { name: 'Ubicación', link: '#' },
    { name: 'Contactos', link: '#' },
  ]

  return (
    <Navbar fluid rounded className='absolute w-full top-0 opacity-55'>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={viteLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">FreeSpirit</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        { menus.map((menu, index) => <Navbar.Link key={menu.link+index} href={menu.link}> {menu.name} </Navbar.Link>) }
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
