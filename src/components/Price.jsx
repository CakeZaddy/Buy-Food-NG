'use client'

import React, { useEffect, useState } from 'react'

const Price = ({ price, id, options }) => {
  const [total, setTotal] = useState(price)
  const [quantity, setQuantity] = useState(1)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    )
  }, [quantity, selected, options, price])

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold '>N{total.toFixed(2)}</h2>
      {/* Options Container */}
      <div className='flex gap-4'>
        {options.map((option, index) => (
          <button
            className='p-2 ring-1 ring-red-500 rounded-md min-w-[6rem]'
            key={option.title}
            style={{
              background: selected === index ? 'rgb(239 68 68)' : 'white',
              color: selected === index ? 'white' : 'rgb(239 68 68)',
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* Quantity N Add Button Container */}
      <div className='flex justify-between items-center'>
        {/* Quantity Container */}
        <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
          <span className=''>Quantity</span>
          <div className='flex gap-4 items-center'>
            <button
              className=''
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {'<'}
            </button>
            <span className='w-6 text-center'>{quantity}</span>
            <button
              className=''
              onClick={() => setQuantity((prev) => (prev < 10 ? prev + 1 : 10))}
            >
              {'>'}
            </button>
          </div>
        </div>
        {/* Button Container */}
        <button className='uppercase w-56 bg-red-500 text-white ring-red-500 ring-1 p-3'>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Price
