import Image from 'next/image'
import React from 'react'

function Post() {
  return (
    <div className='flex flex-col gap-4'>
      {/* USER */}
      <div className='flex items-center justify-between px-2'>
        <div className='flex items-center gap-4'>
          <Image src={"https://i.pinimg.com/736x/ae/60/98/ae6098078360d7ec1cc2add3df692b3d.jpg"} alt='' width={40} height={40} className='w-10 h-10 rounded-full'/>
          <span className='font-medium'>Subhamay Dey</span>
        </div>
          <Image src={"/more.png"} alt='' className='w-6 h-6 cursor-pointer' width={20} height={20}/>
      </div>
      {/* DESC */}
      <div className='flex flex-col gap-4'>
        <div className='w-full min-h-96 relative'>
          <Image src={"https://i.pinimg.com/736x/22/bf/ac/22bfac5521353a98b130f0886a0d2918.jpg"} alt='' fill className='object-cover rounded-md'/>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique tempore reprehenderit quos perspiciatis temporibus sed, ea et aliquid expedita facilis! Laudantium labore dignissimos nisi tempora repellendus ad, dolorem voluptates</p>
      </div>
      {/* INTERACTION */}
      <div className='flex items-center justify-between text-sm mt-6'>
        <div className='flex gap-8'>
          <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
            <Image src={"/like.png"} alt='' width={16} height={16} className='cursor-pointer'/>
            <span className='text-gray-300'>|</span>
            <span className='text-gray-500'>123
              <span className='hidden md:inline p-2'>Likes</span>
            </span>
          </div>
          <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
            <Image src={"/comment.png"} alt='' width={16} height={16} className='cursor-pointer'/>
            <span className='text-gray-300'>|</span>
            <span className='text-gray-500'>123
              <span className='hidden md:inline p-2'>Comments</span>
            </span>
          </div>
        </div>
        <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
          <Image src={"/share.png"} alt='' width={16} height={16} className='cursor-pointer'/>
          <span className='text-gray-300'>|</span>
          <span className='text-gray-500'>
            123
            <span className='hidden md:inline p-2'>Shares</span>
          </span>
        </div>

      </div>

    </div>
  )
}

export default Post