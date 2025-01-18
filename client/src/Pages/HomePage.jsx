import React from "react"
import { BackgroundBeamsWithCollision } from "../Components/ui/bgBeam"
import { TypewriterEffectSmooth } from "../Components/ui/typeEffect"
import { CodeBlock } from "../Components/ui/codeBlock"
import { chooseUs, howWorks, programs } from "../Data/Data"
import { MovingBorderDesign } from "../Components/ui/movingBorder"
import { BsRocketTakeoff } from "react-icons/bs"
import { TextGenerateEffect } from "../Components/ui/textGenerateEffect"

const HomePage = () => {
  const words = [
    {
      text: "Welcome to Praba Academy.",
      // className: "text-blue-500 dark:text-blue-500",
    },
  ]

  const wordsText = `Join Praba Academy, your one-stop platform to bcome a skilled web developer. Whether you're a beginner or looking to advance your career, we provide the tools, knowledge, and support you need to succeed in today's digital world.`

  const code = `const DummyComponent = () => {
    const [count, setCount] = React.useState(0);
   
    const handleClick = () => {
      setCount(prev => prev + 1);
    };
   
    return (
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
        <p className="mb-2">Fight Club Fights Count: {count}</p>
        <button 
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
    );
  };
  `
  return (
    <div className="">
      <div className="h-screen w-full">
        <BackgroundBeamsWithCollision>
          <div className="flex flex-col items-center justify-center h-[40rem]  ">
            <p className="text-neutral-300 dark:text-neutral-200 text-xs sm:text-base  ">
              MASTER SOFTWARE DEVELOPMENT, BUILD YOUR FUTURE
            </p>
            <TypewriterEffectSmooth words={words} />

            <p className="mb-10 w-2/4 text-sm font-medium text-neutral-300 leading-7 tracking-wider">
              <TextGenerateEffect words={wordsText} />
            </p>

            <button className="w-40 h-10 font-medium rounded-xl bg-blue-500 border border-transparent text-white text-sm">
              Enroll Now
            </button>
          </div>
        </BackgroundBeamsWithCollision>
      </div>

      <div className="h-screen w-full py-10 px-20 my-10">
        <h1 className="text-4xl font-bold text-center mb-10">Why Choose Us?</h1>
        <div className="grid grid-cols-2 items-center gap-10">
          <div className="col flex flex-col gap-5">
            {chooseUs.map((item, i) => {
              return (
                <div className="" key={i}>
                  <div className="flex items-center gap-2">
                    <item.icon color={item.color} size={20} />{" "}
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                  </div>
                  <p className="text-base text-zinc-400 font-normal leading-7 tracking-wider">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="col w-full">
            <CodeBlock
              language="jsx"
              filename="DummyComponent.jsx"
              highlightLines={[9, 13, 14, 18]}
              code={code}
            />
          </div>
        </div>
      </div>

      <div className="w-full py-10 px-20 my-20">
        <h1 className="text-4xl font-bold text-center mb-10">Our Programs</h1>

        <div className="grid grid-cols-2 gap-10">
          {programs.map((item, i) => {
            return (
              <MovingBorderDesign borderRadius="8px">
                <div className="col p-5" key={i}>
                  <div className="flex items-center gap-2">
                    <item.icon color={item.color} size={20} />{" "}
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                  </div>
                  <p className="text-base text-zinc-400 font-normal leading-7 tracking-wider">
                    {item.desc}
                  </p>
                </div>
              </MovingBorderDesign>
            )
          })}
        </div>

        <h1 className="text-4xl font-bold text-center my-10">How It Works</h1>

        <div className="border border-zinc-400/50 rounded-lg p-10">
          {howWorks.map((item, i) => {
            return (
              <div className="" key={i}>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-zinc-400">{i + 1}.</h1>{" "}
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                </div>
                <p className="text-base text-zinc-400 font-normal leading-7 tracking-wider mb-5">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div className="h-[22rem] flex flex-col items-center justify-center w-full mt-20">
          <h1 className="text-6xl font-bold text-center my-10">
            Get Started Today!
          </h1>

          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-2xl text-neutral-200 flex items-center gap-3 font-bold">
              <BsRocketTakeoff /> Ready to Begin Your Journey?
            </h1>
            <p className="text-base text-neutral-400 mb-2">
              Join thousands of learners who have transformed their careers with{" "}
              <span className="font-bold text-purple">PRABA ACADMEY</span>
            </p>

            <button className="w-40 h-10 rounded-xl font-semibold bg-blue-500 border border-transparent text-white text-sm">
              Enroll Now
            </button>
          </div>

          <p className="text-sm italic tracking-widest mt-5 w-[500px] text-center">
            Take the First step toward becoming a web development expert. Your
            future starts here!
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
