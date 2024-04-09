import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex place-content-around items-center py-5'>
      <div className=' text-red-500 font-bold text-lg'>BookUsNow</div>

      <div className='flex items-center gap-3' >
        <div className='flex gap-3 text-white text-sm font-semibold bg-black p-2 rounded-md h-8 px-5 items-center'>
          <div><i class="fa-solid fa-bars"></i></div>
          <div>Categories</div>
        </div>
        <div className='flex border border-gray-400 rounded-md text-black text-sm w-96 h-8 place-content-between items-center px-3'>
          <input
            type="text"
            placeholder="DJI phantom"
            value="DJI phantom"
            />
            <div className=' text-gray-400'><i class="fa-solid fa-magnifying-glass"></i></div>
        </div>
      </div>

      <div className='flex text-sm gap-3  items-center'>
        <div className='text-gray-400'><i class="fa-solid fa-heart"></i></div>
        <div>Favorites</div>
        <button className=' border border-gray-400 rounded-md px-3 h-8 flex items-center'>Sign In</button>
      </div>

    </div>
  )
}

export default Navbar