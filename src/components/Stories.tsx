import Image from 'next/image'
import React from 'react'

function Stories() {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide'>
      <div className='flex gap-8 w-max'>

        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src={"https://i.pinimg.com/1200x/c0/09/0e/c0090ee8e5cf9e2a257beea0e5fa489f.jpg"} alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
          <span className='font-medium'>Ricky</span>
        </div>

        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src={"https://i.pinimg.com/1200x/c0/09/0e/c0090ee8e5cf9e2a257beea0e5fa489f.jpg"} alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
          <span className='font-medium'>Ricky</span>
        </div>
        
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src={"https://i.pinimg.com/1200x/c0/09/0e/c0090ee8e5cf9e2a257beea0e5fa489f.jpg"} alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
          <span className='font-medium'>Ricky</span>
        </div>
        
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src={"https://i.pinimg.com/1200x/c0/09/0e/c0090ee8e5cf9e2a257beea0e5fa489f.jpg"} alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
          <span className='font-medium'>Ricky</span>
        </div>
        
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src={"https://i.pinimg.com/1200x/c0/09/0e/c0090ee8e5cf9e2a257beea0e5fa489f.jpg"} alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
          <span className='font-medium'>Ricky</span>
        </div>
        
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src={"https://i.pinimg.com/1200x/c0/09/0e/c0090ee8e5cf9e2a257beea0e5fa489f.jpg"} alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
          <span className='font-medium'>Ricky</span>
        </div>
        
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src={"https://i.pinimg.com/1200x/c0/09/0e/c0090ee8e5cf9e2a257beea0e5fa489f.jpg"} alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
          <span className='font-medium'>Ricky</span>
        </div>

      </div>
    </div>
  )
}

export default Stories