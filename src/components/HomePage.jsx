import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className='container px-12 min-h-desktop '>
            <div className='grid grid-cols-2 items-center justify-center gap-6 pt-6'>
                <div>
                    <small className='text-hed5 tracking-hed5letter transition-all duration-75'>SO, YOU WANT TO TRAVEL TO</small>
                    <h1 className='text-hed1 font-bellefair'>SPACE</h1>
                    <p className='text-body font-barlow'>
                        Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
                    </p>
                </div>
                <div className='flex justify-end relative  -bottom-28'>
                    <Link to="/destination" className='w-ceffectW h-ceffectH rounded-full flex items-center justify-center hover:bg-customWhite hover:bg-opacity-10' >
                    <div className='w-circleW h-circleH rounded-full flex items-center justify-center bg-customWhite text-primary text-hed4'>
                        EXPLORE
                    </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}
