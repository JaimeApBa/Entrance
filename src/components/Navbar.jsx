import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <button className='bt bt-check-in'>Fichar</button>
        <ul className='navList-1'>
            <li className='navLink bt-home'>
                <Link to='/'>
                    <span className="material-symbols-outlined">home</span>
                </Link>
            </li>
            <li className='navLink'>
                <Link to='/historic'>Historial</Link>
            </li>
            <li className='navLink'>
                <Link to='/calendar'>Calendario</Link>
                <span className='notification vacation'>1</span>
            </li>
        </ul>
        <ul className='navList-2'>
            <li className='navLink'>
                <Link to='/incidents'>Incidencias</Link>
                <span className='notification incident'>1</span>
            </li>
            <li className='navLink logout'>
                <span className="material-symbols-outlined">logout</span>
            </li>
        </ul>
    </nav>
  )
}
