// "use client"
import React, { useState } from "react"
import { Label } from "../Components/ui/label"
import { Input } from "../Components/ui/input"
import { cn } from "../lib/utils"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import axiosInstance from "../Services/axiosInstance"

export default function Register() {
  const [signupData, setSignupData] = useState({
    username: "",
    emailAddress: "",
    password: "",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setSignupData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!signupData.emailAddress) {
      toast.error("Please enter your Email Address")
    }
    if (!signupData.password) {
      toast.error("Please enter your Password")
    } else if (signupData.password.length < 6) {
      toast.error("Password must have 6 characters")
    }

    if (signupData.emailAddress && signupData.password) {
      try {
        const res = await axiosInstance.post("/auth/register", signupData)
        toast.success(res?.data?.message)
        navigate("/login")
      } catch (error) {
        toast.error(error?.response?.data?.message)
      }
    }
  }
  return (
    <div className="flex items-center h-screen">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-transparent border border-zinc-400/50">
        <h2 className="font-bold text-xl text-neutral-200">
          Welcome to <span className="text-purple">PrabaAcademy</span>
        </h2>
        <p className="text-neutral-300 text-sm max-w-sm mt-2">
          Register to PrabaAcademy if you are new here
        </p>
        <form className="my-4" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="username" className="text-neutral-200">
              Username
            </Label>
            <Input
              id="username"
              name="username"
              placeholder="prabaacademy"
              type="text"
              onChange={handleChange}
            />
          </LabelInputContainer>
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
            Sign up &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <p className="text-neutral-300 text-[12px] max-w-sm">
            Already have an Account{" "}
            <Link to="/login" className="text-blue-500 underline">
              CLick here to Login
            </Link>
          </p>
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
