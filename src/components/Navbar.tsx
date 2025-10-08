import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'

function Navbar() {
  return (
    <>
        <div className='flex items-center justify-between h-24'>
            {/* LEFT */}
            <div className=''>
                <Link href={"/"} className='font-bold text-xl text-blue-600'>DEVSOCIAL</Link>
            </div>

            {/* CENTER */}
            <div className='hidden'>

            </div>
            {/* RIGHT */}
            <div className=''>
                <MobileMenu/>
            </div>

        </div>
    </>
)
}

export default Navbar