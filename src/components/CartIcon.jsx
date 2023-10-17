import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <div className=''>
      <Link href='/cart' className='flex items-center gap-4'>
        <div className='relative w-8 h-8 md:w-5 md:h-5 '>
          <Image src='/cart.png' alt='cart' fill />
        </div>
        <span>
          <p>Cart (4)</p>
        </span>
      </Link>
    </div>
  )
}

export default CartIcon
