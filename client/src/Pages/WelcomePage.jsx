import React from "react"
import Login from "../Components/Login"
import { MovingBorderDesign } from "../Components/ui/movingBorder"

const WelcomePage = () => {
  return (
    <div className="px-20 py-16 h-screen grid grid-cols-2 justify-center items-center gap-10">
      <div className="col">
        <h1 className="text-3xl font-bold">
          Welcome Back to <span className="text-purple">PrabaAcademy</span>
        </h1>
        <h2 className="text-xl font-semibold my-4">
          Continue Your Journey Toward Becoming a Software Development Expert!
        </h2>

        <p className="text-sm text-zinc-200 leading-6 tracking-wider">
          Login to access your courses, view your progress, and explore new
          opportunities in the world of Software Development
        </p>

        <div className="mt-8 border border-zinc-400/50 rounded-lg px-5 py-8">
          <h2 className="text-xl font-bold mb-4 uppercase">Why Login?</h2>
          <ul className="text-sm text-zinc-300 list-disc px-5">
            <li className="mb-2">
              <b className="text-white">Access your Dashboard: </b>Stay on top
              of your learning journey with a personalized dashboard.
            </li>
            <li className="mb-2">
              <b className="text-white">Resume your Courses: </b>Pick up right
              where you left off.
            </li>
            <li className="mb-2">
              <b className="text-white">Build Your Portfolio: </b>Access tools
              and resources to showcase your work
            </li>
            <li className="mb-2">
              <b className="text-white">Earn Certificates: </b>Track your
              achievements and download your course completing certificates.
            </li>
          </ul>
        </div>
      </div>

      <MovingBorderDesign borderRadius="8px">
        <Login />
      </MovingBorderDesign>
    </div>
  )
}

export default WelcomePage
