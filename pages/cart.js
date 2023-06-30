import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Wrapper,CartItem } from '@/components'
import { useState } from 'react'



const Cart = () => {
    const [isEmpty, setIsEmpty] = useState(true);
    return (
    <div className='w-full md:py-20'>
        <Wrapper>
            {/* Heading and Paragraph Start */}
            <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
                <div className='text-[28px] md:text-[34px] mb-5 font-semibold z-20'>
                    Shopping Cart
                </div>
            </div>
            {/* Heading and Paragraph End */}
            {/* Cart Conetent Start */}
            {isEmpty ? (
                <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-2 -z-10'>
                <Image src='/empty-cart.jpg' width={300} height={300} className="w-[300px] md:w-[400px]"/>
                <span className='text-xl font-bold'>
                    Your cart is empty
                </span>
                <span className='text-center mt-4'>
                    Looks like you have not added anything in your cart.
                    <br/>
                    Go ahead and explore top categories
                </span>
                <Link href="/" className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-80 mt-8'>Continue Shopping</Link>
            </div>
            ):(
                <div className='flex flex-col lg:flex-row gap-12 py-10'>
                {/* Cart Items Start */}
                <div className='flex-[2]'>
                    <div className='text-lg font-bold'> Cart Items</div>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
                {/* Cart Items End */}
                {/* Cart Summary Start */}
                <div className='flex-[1]'>
                    <div className='text-lg font-bold'> Summary</div>
                    <div className='p-5 my-5 bg-black/[0.05] rounded-xl  '>
                        <div className='flex justify-between'>
                            <div className='uppercase text-md md:text-lg font-medium text-black'>Subtotal</div>
                            <div className='text-md md:text-lg font-medium text-black'>$ 200.00</div>
                        </div>
                        <div className='text-sm md:text-md py-5 border-t mt-5'>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    {/* Button Start */}
                    <div className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-[85%] text-center'>
                        <span className=' select-none'>Checkout</span>
                    </div>
                </div>
                {/* Cart Summary End */}
            </div>
            )}
        </Wrapper>
    </div>
  )
}

export default Cart