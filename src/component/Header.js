import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='h-[10vh] bg-black text-white flex items-center'>
      <NavLink className='px-5' to='/'>Home</NavLink>
      <NavLink className='px-5' to='/about'>About</NavLink>
      <NavLink className='px-5' to='/contact'>Contact</NavLink>
    </header>
  )
}

export default Header
