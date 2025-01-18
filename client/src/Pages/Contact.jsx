import React from "react"
import { BackgroundBeamsWithCollision } from "../Components/ui/bgBeam"
import { TextGenerateEffect } from "../Components/ui/textGenerateEffect"

import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"
import { Label } from "../Components/ui/label"
import { Input } from "../Components/ui/input"
import { Link } from "react-router-dom"
import { cn } from "../lib/utils"
import { MovingBorderDesign } from "../Components/ui/movingBorder"

const Contact = () => {
  const words = `Have Questions? We’re Here to Help!`
  return (
    <div>
      <div className="h-screen w-full">
        <BackgroundBeamsWithCollision>
          <div className="flex flex-col items-center justify-center gap-5 text-center w-3/4">
            <h1 className="text-6xl font-bold text-neutral-200">
              <TextGenerateEffect words={words} />
            </h1>
            <p className="text-base text-neutral-300 tracking-wider leading-8">
              At <span className="font-bold text-purple">PRABA ACADEMY</span>,
              we value your feedback and are committed to providing excellent
              support. Whether you have questions about our courses, need
              technical assistance, or just want to say hello, we’re here for
              you.
            </p>

            <p className="text-base text-neutral-300 tracking-wider leading-8">
              Whether you're a complete beginner or a seasoned programmer
              looking to sharpen your skills, our academy is designed to meet
              you at your level and guide you toward success.
            </p>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
      <div className="mt-20 px-20">
        <h1 className="text-5xl font-bold mb-20 text-center">Get in Touch</h1>
        <div className="grid grid-cols-2 items-center gap-10 ">
          <div className="col">
            <div className="">
              <h2 className="text-xl font-bold">Email Us</h2>
              <p className="text-sm my-1 leading-8 tracking-wide text-neutral-400">
                Have a question? Send us an email, and our team will get back to
                you within 24–48 hours.
              </p>
              <p>help@prabaacademy.com</p>
            </div>
            <div className="my-5">
              <h2 className="text-xl font-bold">Call Us</h2>
              <p className="text-sm my-1 leading-8 tracking-wide text-neutral-400">
                Need immediate assistance? Give us a call during our business
                hours.Available: Monday to Friday, 9 AM – 6 PM (Your Time Zone)
              </p>
              <p>+91 9900880099</p>
            </div>
            <div className="">
              <h2 className="text-xl font-bold">Connect With Us</h2>
              <p className="text-sm my-1 leading-8 tracking-wide text-neutral-400">
                Follow us on social media to stay updated on our latest courses,
                offers, and tech tips
              </p>
              <div className="flex items-center gap-4 mt-5">
                <div className="h-12 w-12 rounded-md flex items-center justify-center text-neutral-400 hover:text-neutral-200 border border-zinc-400/50">
                  <FaFacebookSquare size={40} />
                </div>
                <div className="h-12 w-12 rounded-md flex items-center justify-center text-neutral-400 hover:text-neutral-200 border border-zinc-400/50">
                  <FaInstagram size={40} />
                </div>
                <div className="h-12 w-12 rounded-md flex items-center justify-center text-neutral-400 hover:text-neutral-200 border border-zinc-400/50">
                  <FaSquareXTwitter size={40} />
                </div>
                <div className="h-12 w-12 rounded-md flex items-center justify-center text-neutral-400 hover:text-neutral-200 border border-zinc-400/50">
                  <FaLinkedin size={40} />
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <MovingBorderDesign borderRadius="8px ">
              <div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-transparent">
                <h2 className="font-bold text-2xl text-neutral-200">
                  Drop Us a Message Below
                </h2>
                <form className="my-4">
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="username" className="text-neutral-200">
                      Username
                    </Label>
                    <Input
                      id="username"
                      name="username"
                      placeholder="prabaacademy"
                      type="text"
                      // onChange={handleChange}
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
                      // onChange={handleChange}
                    />
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="message" className="text-neutral-200">
                      Message
                    </Label>
                    <Input
                      id="message"
                      name="message"
                      placeholder="Leave Your Message..."
                      type="text"
                      // onChange={handleChange}
                    />
                  </LabelInputContainer>

                  <button
                    className="bg-gradient-to-br relative group/btn bg-blue-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                  >
                    Send Message &rarr;
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
            </MovingBorderDesign>
          </div>
        </div>
      </div>

      <div className="h-[30rem] flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl font-bold text-center my-6">
          Visit Our Help Center
        </h1>

        <div className="flex flex-col gap-4 items-center">
          <p className="text-base text-neutral-400 w-[700px] text-center leading-8 tracking-wide">
            Looking for quick answers? Explore our comprehensive FAQ and Help
            Center for instant solutions to common questions.
          </p>

          <h2 className="text-neutral-200 font-bold text-xl">
            We’d Love to Hear From You
          </h2>
          <p className="text-base text-neutral-400 w-[700px] text-center leading-8 tracking-wide">
            Whether you’re a prospective student, current learner, or industry
            partner, don’t hesitate to reach out. Your feedback and inquiries
            help us improve and grow!
          </p>
        </div>
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

export default Contact
