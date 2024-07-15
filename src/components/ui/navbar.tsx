import React from 'react'
import { Link } from 'react-router-dom'
import '../../navbar.css'

const Navbar = () => {
  return (
    <div className='container1'>
      <header className='header'>
        <div className='logo'>Logo </div>
        <hr className='divider' />

      <nav className='nav'>
          <ul className='navbar-list'>
            <li>
              <Link to="/">01 Home</Link>
            </li>
            <li>
              <Link to="/destination">02 Destination</Link>
            </li>
            <li>
              <Link to="/crew">03 Crew</Link>
            </li>
            <li>
              <Link to="/technology">04 Technology</Link>
            </li>
            <li>
              <Link to="/contacts">05 Contacts</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
