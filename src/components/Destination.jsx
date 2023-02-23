import React, { useState } from 'react'

export default function Destination() {

    const [activeElement, setActiveElement] = useState("moon");

    const elements = {
        moon: {
            id: "moon",
            title: "Moon",
            text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,000 KM",
            time: "3 DAYS"
        },
        mars: {
            id: "mars",
            title: "Mars",
            text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 MIL. KM",
            time: "9 MONTHS"
        },
        europa: {
            id: "europa",
            title: "Europa",
            text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 MIL. KM",
            time: "3 YEARS"
        },
        titan: {
            id: "titan",
            title: "Titan",
            text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 BIL. KM",
            time: "7 YEARS"
        },
    }


    return (
        <div className='grid grid-cols-2 gap-6'>
            <img src={require(`../assets/destination/image-${elements[activeElement].id}.webp`)} alt={elements[activeElement].id} />
            <div className='flex flex-col gap-2'>
                <ul className='flex items-center gap-8'>
                    <li onClick={() => setActiveElement("moon")} className={`cursor-pointer text-navtext tracking-navletter text-secondary ${activeElement === "moon" ? "border-b-2" : null}`}>
                        Moon
                    </li>
                    <li onClick={() => setActiveElement("mars")} className={`cursor-pointer text-navtext tracking-navletter text-secondary ${activeElement === "mars" ? "border-b-2" : null}`}>
                        Mars
                    </li>
                    <li onClick={() => setActiveElement("europa")} className={`cursor-pointer text-navtext tracking-navletter text-secondary ${activeElement === "europa" ? "border-b-2" : null}`}>
                        Europa
                    </li>
                    <li onClick={() => setActiveElement("titan")} className={`cursor-pointer text-navtext tracking-navletter text-secondary ${activeElement === "titan" ? "border-b-2" : null}`}>
                        Titan
                    </li>
                </ul>
                <h1 className='text-hed1 text-customWhite uppercase'>
                    {elements[activeElement].title}
                </h1>
                <p className='text-secondary text-body font-barlow '>
                {elements[activeElement].text}
                </p>
                <div className='flex items-center gap-16 mt-8 p-8 border-t border-opacity-10'>
                    <div className='flex flex-col gap-1'>
                        <small className='text-subhead2 text-secondary'>AVG. DISTANCE</small>
                        <small className='font-bellefair text-subhead1 '>{elements[activeElement].distance}</small>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <small className='text-subhead2 text-secondary uppercase'>Est. travel time</small>
                        <small className='font-bellefair text-subhead1 '>{elements[activeElement].time}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
