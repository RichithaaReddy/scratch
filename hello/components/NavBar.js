import React from 'react'
import Link from 'next/Link'
import { AiOutlineShoppingCart } from 'react-icons/Ai';

function NavBar() {
  return (
    <>
    <nav className='bg-purple-300 text-gray-900 text-lg font-normal'>
    
    <ul className='flex space-x-6 p-3 justify-center'>
       <Link href="/hoodies"><li className='hover:text-black'> hoodies </li></Link>
       <Link href="/shirts"><li className='hover:text-black'> shirts </li></Link>
       <Link href="/"><li className='hover:text-black'> contactus</li></Link>
       <span className='absolute right-1'><AiOutlineShoppingCart /></span>
    </ul>
    
  
</nav>
    </>
  )
}

export default NavBar;