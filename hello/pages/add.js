import React from 'react'
import { AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/Ai';

function add() {
  return (
 <>
   <div className='block m-40'>
     <div className='m-96 flex'>
        <div className='w-2/3'>tshirts</div>
        <div className='w-1/3 flex items-center justify-center text-xl'><AiFillMinusCircle className='mx-3'/> 1 <AiFillPlusCircle className='mx-3'/></div>
     </div>
   </div>
 </>
    )
}

export default add