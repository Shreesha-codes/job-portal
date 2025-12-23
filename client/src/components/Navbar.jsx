import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='shadow py-4'>
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <img src={assets.logo} alt="Insiderjobs" className='cursor-pointer' />
        </div>
        <div className='flex gap-4 max-sm:text-xs'>
          <button className='text-gray-600 font-medium hover:text-blue-600 transition-colors'>Recruiter Login</button>
          <button className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar