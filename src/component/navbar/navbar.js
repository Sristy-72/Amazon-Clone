import React from 'react';
import NavbarBelt from './NavbarBelt/navbarBelt'
import NavbarBanner from './NavbarBanner/navbarBanner';
const Navbar = () => {
  return (
    <div className='navbar'>
      <NavbarBelt />
      <NavbarBanner />
    </div>
  )
}

export default Navbar
