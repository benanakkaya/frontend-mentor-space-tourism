import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({activePage,setActivePage}) {

   



    return (
        <div className=' bg-transparent flex items-center justify-center py-6'>
            <div className='w-navbarW h-navbarH flex items-center justify-between pl-20'>
                <Link to="/">
                    <img src={require('../assets/shared/logo.svg').default} alt="logo" />
                </Link>
                <div className='border-b opacity-30 w-line h-px1 ml-12'>

                </div>
                <div className='h-full backdrop-opacity-80 backdrop-blur-xl flex items-center justify-center gap-12 w-blurBar '>
                    <Link onClick={() => setActivePage("home")} className={`${activePage === "home" ? 'border-b-4' : null} tracking-navletter flex items-center text-navtext font-bold gap-4 h-full uppercase hover:border-b-4`} to="/">00 <span className='font-normal'>Home</span></Link>
                    <Link onClick={() => setActivePage("destination")} className={`${activePage === "destination" ? 'border-b-4' : null} tracking-navletter flex items-center text-navtext font-bold gap-4 h-full uppercase hover:border-b-4`} to="/destination">01<span className='font-normal'>Destination</span></Link>
                    <Link onClick={() => setActivePage("crew")} className={`${activePage === "crew" ? 'border-b-4' : null} tracking-navletter flex items-center text-navtext font-bold gap-4 h-full uppercase hover:border-b-4`} to="/crew">02<span className='font-normal'>Crew</span></Link>
                    <Link onClick={() => setActivePage("technology")} className={`${activePage === "technology" ? 'border-b-4' : null} tracking-navletter flex items-center text-navtext font-bold gap-4 h-full uppercase hover:border-b-4`} to="/technology">03<span className='font-normal'>Technology</span></Link>
                </div>
            </div>
        </div>
    )
}
