import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-pink-100 p-14'>
        <div className='grid sm:grid-cols-1 gap-9 md:grid-cols-3'>
          <div className='col-span-1 '>
            <p className='text-lg font-serif font-bold'>Sales Support</p>
            <p className='text-gray-700 font-semibold'>Any queries related to sales please contact the mentioned email.</p>
            <p className='text-gray-700 font-semibold'>sales@ecom.io</p>
          </div>

          <div className='col-span-1 ' >
            <p className='text-lg font-serif font-bold'>Technical Support</p>
            <p className='text-gray-700 font-semibold'>For any technical support needed please contact the mentioned email.</p>
            <p className='text-gray-700 font-semibold'>support@ecom.io</p>
          </div>

          <div className='col-span-1 '>
            <p className='text-lg font-serif font-bold'>Our Offices</p>
            <p className='text-gray-700 font-semibold'>Hyderabad, India.</p>
          </div>
          
          </div>
    </div>
    </>
  )
}

export default Footer