import React from 'react'

const Kategori = () => {
  return (
    <div className='flex items-center gap-[36px]'>
        <p className="font-dm text-base font-medium leading-[140%] tracking-[0.2px] text-[#333] cursor-pointer">
          New & Featured
        </p>
        <p className="font-dm text-base font-medium leading-[140%] tracking-[0.2px] text-[#333] cursor-pointer">
          Men
        </p>
        <p className="font-dm text-base font-medium leading-[140%] tracking-[0.2px] text-[#333] cursor-pointer">
          Women
        </p>
        <p className="font-dm text-base font-medium leading-[140%] tracking-[0.2px] text-[#333] cursor-pointer">
          Kids
        </p>
        <p className="font-dm text-base font-medium leading-[140%] tracking-[0.2px] text-[#333] cursor-pointer">
          App
        </p>
    </div>
  )
}

export default Kategori
