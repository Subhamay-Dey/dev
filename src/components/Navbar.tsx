import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

function Navbar() {
  return (
    <>
        <div className='flex items-center justify-between h-24'>
            {/* LEFT */}
            <div className=''>
                <Link href={"/"} className='font-bold text-xl text-blue-600'>DEVSOCIAL</Link>
            </div>

            {/* CENTER */}
            <div className='hidden md:flex'>
                <div className=''>
                    <Link href={"/"} className='flex gap-2'>
                        <Image alt='Homepage' src={""} width={16} height={16}></Image>
                    </Link>
                </div>

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