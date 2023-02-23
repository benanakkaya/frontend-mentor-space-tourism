import React, { useState } from 'react'

export default function Technology() {

  const [activeTech,setActiveTech] = useState("tech1");

  const techs = {
    tech1: {
      id: 1,
      image: "launch-vehicle",
      title: "LAUNCH VEHICLE",
      text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    tech2: {
      id: 2,
      image: "spaceport",
      title: "SPACEPORT",
      text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    tech3: {
      id: 3,
      image: "space-capsule",
      title: "SPACE CAPSULE",
      text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    },
  }



  return (
    <div className='grid grid-cols-2 gap-8 py-6'>
      <div className='flex  gap-6 h-full items-center'>
        <div className='flex flex-col items-center justify-center h-full gap-6'>
            <button onClick={() => setActiveTech("tech1")} className='border border-customWhite rounded-full w-20 h-20'>1</button>
            <button onClick={() => setActiveTech("tech2")} className='border border-customWhite rounded-full w-20 h-20'>2</button>
            <button onClick={() => setActiveTech("tech3")} className='border border-customWhite rounded-full w-20 h-20'>3</button>
        </div>
        <div className='flex flex-col gap-6'>
            <small className='text-navtext font-barlow text-secondary'>THE TERMINOLOGY...</small>
            <h3 className='text-hed3 font-bellefair text-customWhite'>{techs[activeTech].title}</h3>
            <p className='text-body text-secondary font-barlow'>{techs[activeTech].text}</p>
        </div>
      </div>
      <div className='flex h-full items-center justify-center '>
        <img src={require(`../assets/technology/image-${techs[activeTech].image}-portrait.jpg`)} alt={techs[activeTech].image} />
      </div>
    </div>
  )
}
