import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

function Navbar() {
  return (
    <>
        <div className='flex items-center justify-between h-24'>
            {/* LEFT */}
            <div className='md:hidden lg:block w-[20%]'>
                <Link href={"/"} className='font-bold text-xl text-blue-600'>DEVSOCIAL</Link>
            </div>
 
            {/* CENTER */}
            <div className='hidden md:flex w-[40%]'>
                <div className='flex gap-6'>
                    <Link href={"/"} className='flex items-center gap-2'>
                        <Image alt='Homepage' src={"/home.png"} width={16} height={16} className='w-4 h-4'></Image>
                        <span>Homepage</span>
                    </Link>
                    <Link href={"/"} className='flex items-center gap-2'>
                        <Image alt='Friends' src={"/friends.png"} width={16} height={16} className='w-4 h-4'></Image>
                        <span>Friends</span>
                    </Link>
                    <Link href={"/"} className='flex items-center gap-2'>
                        <Image alt='Stories' src={"/stories.png"} width={16} height={16} className='w-4 h-4'></Image>
                        <span>Stories</span>
                    </Link>
                </div>

            </div>
            {/* RIGHT */}
            <div className='w-[30%] flex justify-end items-center gap-4 xl:gap-8'>
                <ClerkLoading>
                    <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className="cursor-pointer">
                            <Image src={"/people.png"} alt='' width={20} height={20}/>
                        </div>
                        <div className="cursor-pointer">
                            <Image src={"/messages.png"} alt='' width={20} height={20}/>
                        </div>
                        <div className="cursor-pointer">
                            <Image src={"/notifications.png"} alt='' width={20} height={20}/>
                        </div>
                        <UserButton/>
                    </SignedIn>
                    <SignedOut>
                        <div className='flex items-center gap-2 text-sm'>
                            <Image src={"/login.png"} alt='' width={20} height={20}/>
                            <Link href={"/sign-in"}>Login/Register</Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>
                <MobileMenu/>
            </div>

        </div>
    </>
)
}

export default Navbar