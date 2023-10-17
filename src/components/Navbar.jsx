import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const user = false
// const user = true

const Navbar = () => {
  return (
    <div className='h-12 text-red-500 flex justify-between items-center p-4 border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
      {/* Left Links */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href='/'>
          <p>Homepage</p>
        </Link>
        <Link href='/menu'>
          <p>Menu</p>
        </Link>
        <Link href='/'>
          <p>Contact</p>
        </Link>
      </div>
      {/* LOGO */}
      <Link href='/' className='flex-1'>
        <p className='text-xl font-medium md:font-bold md:text-center md:text-2xl '>
          BUY FOOD
        </p>
      </Link>
      {/* Mobile Menu */}
      <div className='md:hidden'>
        <Menu />
      </div>
      {/* Right Links */}
      <div className='hidden md:flex gap-4 flex-1 justify-end'>
        <div className='md:absolute top-3 right-3 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md '>
          <Image src='/phone.png' alt='phone' width={20} height={20} />
          <span>
            <p>09034567890</p>
          </span>
        </div>
        {!user ? (
          <Link href='/login'>
            <p>Login</p>
          </Link>
        ) : (
          <Link href='/orders'>
            <p>Orders</p>
          </Link>
        )}
        <Link href='/'>
          <CartIcon />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
