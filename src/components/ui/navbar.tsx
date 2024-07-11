import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
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
    </div>
  )
}

export default Navbar
