import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="w-full py-4 bg-zinc-900 flex items-center justify-center">
      <p className="text-sm tracking-wider text-zinc-400">
        &copy; {year} All Rights Reserved | <Link>Terms and Conditions</Link> |
        <Link> Privacy Policy</Link> | Designed and Developed by &#10084;
        <span className="font-bold text-purple">PRABA ACADEMY</span>
      </p>
    </div>
  )
}

export default Footer
