import Link from 'next/link'
import React from 'react'
const ProductCard = () => {
  return (
    <Link href='/product/1' className='rounded-lg p-1 shadow-lg hover:scale-105 duration-300'>
        <img className='w-full rounded-lg' src='/product-1.webp' alt='Product Image'/>
        <div>
            <h2 className='text-lg font-medium'>Product Name</h2>
            <div className='flex items-center text-black/[0.5]'>
                <p className='mr-2 text-lg font-semibold text-green-600'>$20.00</p>
                <p className='text-base font-medium line-through'>$24.00</p>
                <p className='ml-auto text-base font-medium text-green-500 '>20% off</p>
            </div>
        </div>
    </Link>
  );
}

export default ProductCard