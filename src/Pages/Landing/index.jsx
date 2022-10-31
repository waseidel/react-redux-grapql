import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Landing = () => {
  return (
    <div className='bg-zinc-900 w-full h-screen text-white'>
      <header className='pb-2'>
        <nav className='flex flex-row px-4 py-2 bg-zinc-700 justify-between shadow-lg'>
          <div className='flex flex-row space-x-3'>
            <NavLink to="/">Home</NavLink>
          </div>
          <ul className='flex flex-row space-x-3'>
            <li><NavLink to="/auth/login">Iniciar Sesión</NavLink></li>
            <li><NavLink to="/auth/register">Registrarse</NavLink></li>
          </ul>
        </nav>
      </header>
      <section className='px-4 py-2 flex items-center justify-center h-full'>
        <Outlet />
      </section>
    </div>
  )
}
