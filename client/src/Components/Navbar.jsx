import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AppContext } from "../Context/AppContext"

const Navbar = () => {
  const { isAuthenticated } = useContext(AppContext)

  return (
    isAuthenticated && (
      <div className="px-20 py-6 flex items-center justify-between">
        <h1>PrabaAcademy</h1>
        <div className="flex items-center gap-5">
          <NavLink>Home</NavLink>
          <NavLink>Courses</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </div>
      </div>
    )
  )
}

export default Navbar
