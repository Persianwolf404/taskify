import React from 'react'
import Process from './Process'
import Logo from '../assets/logo.png'

function Navbar() {
    return (
        <>
           <section className='w-[90%] nava flex justify-between fixed items-center py-3'>
                <img className='w-[150px] m-0' src={Logo} alt="taskify-logo" />
                <Process/>
                
           </section>
        </>
    )
}

export default Navbar;