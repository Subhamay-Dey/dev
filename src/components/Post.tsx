import Image from 'next/image'
import React from 'react'

function Post() {
  return (
    <div className='flex flex-col gap-4'>
      {/*USER*/}
      <div className=''>
        <div className='flex items-center gap-4'>
          <Image src={"https://i.pinimg.com/736x/ae/60/98/ae6098078360d7ec1cc2add3df692b3d.jpg"} alt='' width={40} height={40} className='w-10 h-10 rounded-full'/>
          <span className='font-medium'>Subhamay Dey</span>
        </div>
      </div>
      {/* DESC */}
      <div className=''>

      </div>
      {/* INTERACTION */}
      <div className=''>

      </div>
    </div>
  )
}

export default Post