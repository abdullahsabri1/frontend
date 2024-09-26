import React from 'react'
import {assets} from "../assets/a"
import { NavLink } from 'react-router-dom'
export const NavBar=()=> {
    return (
        
        <div className='flex item-center justify-between py-5 font-medium'>
        console.log("11")
        <h1>Hello World</h1>
        <img src={assets.logo} className='w-36'  alt=''/>
        <ul className='flex items-center justify-between py-5 font-medium'>
        <NavLink className="flex flex-col items-center gap-1"></NavLink>

        </ul>
        </div>
        
    )
}

