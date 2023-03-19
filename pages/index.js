import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import home from './home'
import Link from 'next/link'

  

export default function Home() {
  return (
   <>
    <div >
      <NavBar/>
      <div className='min-h-screen'>
        {/* <img className='block h-[120mm] w-[400mm] mx-auto mt-5' src="https://plus.unsplash.com/premium_photo-1671076131210-5376fccb100b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"/> */}
        
      </div>
      <Footer />
   </div>
   </>
  )
}
