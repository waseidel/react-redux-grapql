import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

export const Landing = () => {
  const { user } = useSelector(store => store.auth)

  console.log(user)
  return (
    <div className='bg-gray-100 w-full text-white'>
      <header className='pb-2'>
        <nav className='flex flex-row px-4 py-2 bg-zinc-700 justify-between items-center shadow-lg'>
          <div className='flex flex-row space-x-3'>
            <NavLink to="/">Home</NavLink>
          </div>
          <ul className='flex flex-row space-x-3 items-center'>
            {
              user.name ?
                <li>{user.name}</li>
                :
                (
                  <>
                    <li>
                      <FontAwesomeIcon icon={faArrowRightToBracket} />
                      <NavLink className="ml-2" to="/auth/login">Iniciar Sesión</NavLink>
                    </li>
                    <li className='border rounded border-slate-600 py-1 px-2 bg-slate-600 hover:bg-slate-700 hover:cursor-pointer'><NavLink to="/auth/register">Registrarse</NavLink></li>
                  </>

                )
            }
          </ul>
        </nav>
      </header>
      <section className='px-4 py-2 flex justify-center h-full'>
        <Outlet />
      </section>
    </div>
  )
}
