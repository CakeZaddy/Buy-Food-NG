import prisma from '@/utils/connect'
import { NextRequest, NextResponse } from 'next/server'

// Fetch All Products
export const GET = async (req) => {
  const { searchParams } = new URL(req.url)
  const cat = searchParams.get('cat')

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(cat ? { catSlug: cat } : { isFeatured: true }),
      },
    })
    return new NextResponse(JSON.stringify(products), {
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
