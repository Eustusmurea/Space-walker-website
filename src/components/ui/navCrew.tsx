import React from 'react'
import { NavLink } from 'react-router-dom'


const NavCrew = () => {
  return (
    <nav>
    <NavLink to="/crew/commander" className={({ isActive }) => isActive ? "active" : ""}>commander</NavLink>
    <NavLink to="/crew/specialist" className={({ isActive }) => isActive ? "active" : ""}>specialist</NavLink>
    <NavLink to="/crew/pilot" className={({ isActive }) => isActive ? "active" : ""}>pilot</NavLink>
    <NavLink to="/destination/engineer" className={({ isActive }) => isActive ? "active" : ""}>engineer</NavLink>
  </nav>
  )
}

export default NavCrew
