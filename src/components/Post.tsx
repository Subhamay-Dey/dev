import Image from 'next/image'
import React from 'react'

function Post() {
  return (
    <div className='flex flex-col gap-4'>
      {/*USER*/}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image src={"https://i.pinimg.com/736x/ae/60/98/ae6098078360d7ec1cc2add3df692b3d.jpg"} alt='' width={40} height={40} className='w-10 h-10 rounded-full'/>
          <span className='font-medium'>Subhamay Dey</span>
        </div>
      </div>
      <Image src={"/more.png"} alt='' width={16} height={16}/>
      {/* DESC */}
      <div className='flex flex-col gap-4'>
        <div className='w-full min-h-96 relative'>
          <Image src={"https://i.pinimg.com/736x/22/bf/ac/22bfac5521353a98b130f0886a0d2918.jpg"} alt='' fill className='object-cover rounded-md'/>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique tempore reprehenderit quos perspiciatis temporibus sed, ea et aliquid expedita facilis! Laudantium labore dignissimos nisi tempora repellendus ad, dolorem voluptates ducimus!</p>
      </div>
      {/* INTERACTION */}
      <div className='flex items-center justify-between text-sm'>
        <div className='flex gap-8'>
          
        </div>
      </div>
    </div>
  )
}

export default Post