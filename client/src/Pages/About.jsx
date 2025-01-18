import React from "react"
import { BackgroundBeamsWithCollision } from "../Components/ui/bgBeam"
import { BentoGrid, BentoGridItem } from "../Components/ui/bentoGrid"
import { aboutPoints, ourValues } from "../Data/Data"
import { MovingBorderDesign } from "../Components/ui/movingBorder"
import { TextGenerateEffect } from "../Components/ui/textGenerateEffect"

const About = () => {
  const words = `Empowering innovators, Shaping the Future of Technology`
  return (
    <div className="">
      <div className="h-screen w-full">
        <BackgroundBeamsWithCollision>
          <div className="flex flex-col items-center justify-center gap-5 text-center w-3/4">
            <h1 className="text-6xl font-bold text-neutral-200">
              <TextGenerateEffect words={words} />
            </h1>
            <p className="text-base text-neutral-300 tracking-wider leading-8">
              At <span className="font-bold text-purple">PRABA ACADEMY</span>,
              we are more tha just an online learning platform we are a
              community of dreamers, creators, and problem solver's. Our mission
              is to equip aspiring web developers with the tools, knowledge, and
              confidence to excel in the dynamic tech industry.
            </p>

            <p className="text-base text-neutral-300 tracking-wider leading-8">
              Whether you're a complete beginner or a seasoned programmer
              looking to sharpen your skills, our academy is designed to meet
              you at your level and guide you toward success.
            </p>
          </div>
        </BackgroundBeamsWithCollision>
      </div>

      <div className="px-20 mt-20">
        <h1 className="text-5xl font-bold text-center my-10">Our Vision</h1>

        <div className="flex flex-col items-center gap-4">
          <p className="text-base text-neutral-400 mb-2 leading-8 tracking-wide w-[800px] text-center">
            To bridge the gap between passion and expertise by creating a
            platform where learners can transform their dreams into reality.
          </p>
          <p className="text-base text-neutral-400 mb-2 tracking-wide w-[800px] text-center">
            We envision a world where anyone regardless of background or
            location, can access top-tier education and become a skilled web
            developer capable of shaping the digital future.
          </p>
        </div>
      </div>

      <div className="px-20 my-20">
        <h1 className="text-5xl font-bold mb-10 text-center">Our Values</h1>

        <div className="grid grid-cols-2 gap-10">
          {ourValues.map((item, i) => {
            return (
              <MovingBorderDesign borderRadius="8px">
                <div className="col p-5" key={i}>
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-xl font-semibold">
                      {i + 1}. {item.title}
                    </h2>
                  </div>
                  <p className="text-base text-zinc-400 font-normal leading-7 tracking-wider">
                    {item.desc}
                  </p>
                </div>
              </MovingBorderDesign>
            )
          })}
        </div>
      </div>

      <div className="px-20 mt-20">
        <h1 className="text-5xl font-bold mb-10 text-center">
          What Sets Us Apart
        </h1>
        <BentoGrid className="">
          {aboutPoints.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={<item.header />}
              icon={item.icon}
              className={i === 0 || i === 3 || i == 4 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>

      <div className="px-20 mt-20">
        <h1 className="text-5xl font-bold text-center my-10">Our Story</h1>

        <div className="flex flex-col gap-4">
          <p className="text-base text-neutral-400 mb-2 leading-8 tracking-wide">
            <span className="font-bold text-purple">PRABA ACADMEY</span> was
            founded by a group of passionate developers who recognized the need
            for accessible and practical web development education. With years
            of experience in the tech industry, our founders created a platform
            that combines their expertise with an innovative approach to
            learning
          </p>
          <p className="text-base text-neutral-400 mb-2 tracking-wide">
            What started as a small initiative has grown into a global academy,
            empowering students from all walks of life to achieve their dreams
            in tech.
          </p>
        </div>
      </div>

      <div className="h-[30rem] flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl font-bold text-center my-10">
          Join the Revolution in Learning
        </h1>

        <div className="flex flex-col gap-4 items-center">
          <p className="text-base text-neutral-400 mb-2 w-[700px] text-center leading-8 tracking-wide">
            At <span className="font-bold text-purple">PRABA ACADMEY</span>, we
            don't just tech coding, we create opportunities. Our mission is to
            help you unlock your potential, one line of code at a time.
          </p>
          <p className="text-base text-neutral-400 mb-2 text-center tracking-wide">
            Are you ready to take the first step toward becoming a web
            development expert?
          </p>

          <button className="w-40 h-10 rounded-xl font-semibold bg-blue-500 border border-transparent text-white text-sm">
            Explore Our Courses
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
