"use client"
import React, { useState } from "react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion"
import { cn } from "../../lib/utils"
import { NavLink } from "react-router-dom"

export const FloatingNav = ({ navItems, className, handleLogout }) => {
  const { scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()

      if (scrollYProgress.get() < 0.05) {
        setVisible(false)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-3/4 fixed top-5 inset-x-0 mx-auto border border-zinc-400/50 bgBlur rounded-full bg-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 px-10  items-center justify-between space-x-4",
          className
        )}
      >
        <h1 className="text-4xl font-bold">Praba Academy</h1>
        <div className="flex items-center gap-5">
          {navItems.map((navItem, idx) => (
            <NavLink
              key={`link=${idx}`}
              to={navItem.link}
              className={cn(
                "relative items-center flex space-x-1 text-neutral-400 hover:text-neutral-200"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </NavLink>
          ))}
          <button
            onClick={handleLogout}
            className="border text-sm font-medium relative border-neutral-200  text-neutral-200 px-4 py-2 rounded-lg"
          >
            <span>Logout</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
