import React, { useState } from 'react'

export default function Crew() {

    const [activeStaff, setActiveStaff] = useState("commander");

    const crew = {
        commander: {
            id: "douglas-hurley",
            title: "COMMANDER",
            name: "DOUGLAS HURLEY",
            text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        specialist: {
            id: "mark-shuttleworth",
            title: "MISSION SPECIALIST",
            name: "MARK SHUTTLEWORTH",
            text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        pilot: {
            id: "victor-glover",
            title: "PILOT",
            name: "VICTOR GLOVER",
            text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        engineer: {
            id: "anousheh-ansari",
            title: "Flight Engineer",
            name: "Anousheh Ansari",
            text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        },
    }


    return (
        <div className='grid grid-cols-2 gap-20'>
            <div className='flex flex-col gap-5 h-full justify-center'>
                <h4 className='text-customWhite opacity-50 text-hed4 font-bellefair'>{crew[activeStaff].title}</h4>
                <h3 className='text-hed3 font-bellefair'>{crew[activeStaff].name}</h3>
                <p className='text-body font-barlow text-secondary'>{crew[activeStaff].text}</p>
                <div className='flex items-center gap-4 mt-8'>
                    <button onClick={() => setActiveStaff("commander")} className={`w-4 h-4 rounded-full bg-customWhite ${activeStaff === "commander" ? null : 'opacity-20'}`}></button>
                    <button onClick={() => setActiveStaff("specialist")} className={`w-4 h-4 rounded-full bg-customWhite ${activeStaff === "specialist" ? null : 'opacity-20'}`}></button>
                    <button onClick={() => setActiveStaff("pilot")} className={`w-4 h-4 rounded-full bg-customWhite ${activeStaff === "pilot" ? null : 'opacity-20'}`}></button>
                    <button onClick={() => setActiveStaff("engineer")} className={`w-4 h-4 rounded-full bg-customWhite ${activeStaff === "engineer" ? null : 'opacity-20'}`}></button>
                </div>
            </div>
            <div className='flex h-full items-end justify-end '>
                <img src={require(`../assets/crew/image-${crew[activeStaff].id}.png`)} alt={crew[activeStaff].id} />
            </div>
        </div>
    )
}
