import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { AppContext } from "../Context/AppContext"
import axiosInstance from "../Services/axiosInstance"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { cn } from "../lib/utils"

const Login = () => {
  const { setCookies, setIsAuthenticated } = useContext(AppContext)

  const [loginData, setLoginData] = useState({
    emailAddress: "",
    password: "",
  })

  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!loginData.emailAddress) {
      toast.error("Please enter a Email Address")
    }
    if (!loginData.password) {
      toast.error("Please enter a Password")
    } else if (loginData.password.length < 6) {
      toast.error("Password must have 6 Characters")
    }

    if (loginData.emailAddress && loginData.password) {
      try {
        const res = await axiosInstance.post("/auth/login", loginData)
        setCookies("access_token", res?.data?.token)
        localStorage.setItem("userID", res?.data?.userID)
        localStorage.setItem("role", res?.data?.role)
        if (res?.data?.userID) {
          setIsAuthenticated(true)
          navigate("/")
        }
      } catch (error) {
        toast.error(error?.response?.data?.message)
      }
    }
  }

  useEffect(() => {
    handleSubmit()
  }, [])

  return (
    <div className="px-5 pt-5 w-full flex flex-col justify-center ">
      <div className="w-full rounded-none md:rounded-2xl shadow-input bg-transparent">
        <h2 className="font-bold text-xl text-neutral-200">
          Login to <span className="text-purple">PrabaAcademy</span>
        </h2>

        <form className="my-4" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="emailAddress" className="text-neutral-200">
              Email Address
            </Label>
            <Input
              id="emailAddress"
              name="emailAddress"
              placeholder="prabaacademy@gmail.com"
              type="email"
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password" className="text-neutral-200">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              onChange={handleChange}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn bg-blue-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Login &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

          <div className="">
            <h2 className="text-lg font-bold">New to PrabaAcademy</h2>
            <p className="text-sm my-2">
              <Link to="/register" className="text-blue-500 underline">
                Create an Account
              </Link>{" "}
              to unlock.
            </p>
            <ul className="text-[12px] text-zinc-400 px-5 list-disc">
              <li>Expert-led courses</li>
              <li>Hands-on coding projects</li>
              <li>Career-building resources</li>
              <li>A community of passionate learners</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  )
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  )
}

export default Login
