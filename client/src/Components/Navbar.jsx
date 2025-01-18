import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AppContext } from "../Context/AppContext"
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react"
import { FloatingNav } from "./ui/floatingNavbar"

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated, setCookies } =
    useContext(AppContext)

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Courses",
      link: "/courses",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ]

  const handleLogout = () => {
    setCookies("access_token", null)
    setIsAuthenticated(false)
    navigate("/login")
  }

  return (
    isAuthenticated && (
      // <div className="px-20 py-6 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <FloatingNav navItems={navItems} handleLogout={handleLogout} />
      </div>
      // </div>
    )
  )
}

export default Navbar
