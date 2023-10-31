import { Navbar } from 'flowbite-react';
import viteLogo from '/vite.svg';

function NavBar() {

  const menus = [
    { name: 'Nosotros', link: '#nosotros' },
    { name: 'Quiero Saltar', link: '#' },
    { name: 'Staff', link: '#' },
    { name: 'Saltos de Exhibición', link: '#' },
    { name: 'Ubicación', link: '#' },
    { name: 'Contactos', link: '#' },
  ]

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={viteLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">FreeSpirit</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        { menus.map((menu) => <Navbar.Link href={menu.link}> {menu.name} </Navbar.Link>) }
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
