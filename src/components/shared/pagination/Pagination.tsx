import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-between items-center px-10'>
        <button className='bg-red-500 w-24 py-3 rounded text-white text-center'>Previous</button>
        <button className='bg-red-500 w-24 py-3 rounded text-white text-center'>Next</button>
    </div>
  )
}

export default Pagination