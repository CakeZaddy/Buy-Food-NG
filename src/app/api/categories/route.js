import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'

// Fetch All Categories
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany()
    return new NextResponse(JSON.stringify(categories), {
      status: 200,
    })
  } catch (err) {
    console.log(err)
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      {
        status: 500,
      }
    )
  }
}

export const POST = () => {
  return new NextResponse('Hello, Jesus is King of the Heaven and the Earth', {
    status: 200,
  })
}