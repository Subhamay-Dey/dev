import Image from 'next/image'
import React from 'react'

function Comments() {
  return (
    <div className='flex'>
        <div className='flex items-center gap-4'>
            <Image src={""} alt='' width={32} height={32} className='w-8 h-8 rounded-full'/>
            <div></div>
        </div>
    </div>
  )
}

export default Comments