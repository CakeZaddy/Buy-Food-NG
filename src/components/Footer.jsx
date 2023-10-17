import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 md:px-20 lg:px-40 text-red-500 flex items-center justify-between'>
      <Link href='/'>
        <p className='font-bold text-xl md:text-2xl'>Buy Food</p>
      </Link>
      <p className=''>. ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer
