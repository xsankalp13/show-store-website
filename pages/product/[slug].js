import { Wrapper,ProductDetailsCarousel,RelatedProducts } from '@/components'
import React from 'react'

import { IoMdHeartEmpty } from 'react-icons/io'

const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper>
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
        {/* left col start */}
            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                <ProductDetailsCarousel />
            </div>
        {/* left col end */}
        {/* right col start */}
            <div className='flex-[1] py-3'>
                {/* Product Title start */}
                <div className='text-[34px] font-semibold mb-2'>
                    Jordan Retro 6G
                </div>
                {/* Product Title end */}
                {/* Product Subtitle start */}
                <div className='text-lg font-semibold mb-5'>
                    Men&apos;s Golf Shoe
                </div>
                {/* Product Subtitle end */}
                {/* Product Price start */}
                <div className='text-lg font-semibold'>
                    MRP: $ 200.00
                </div>
                {/* Product Price end */}
                <div className='text-md font-medium text-black/[0.5]'>
                    inlc. all taxes
                </div>
                <div className='text-md font-medium text-black/[0.5] mb-20'>
                    {`(Also includes all applicable duties.)`}
                </div>
                {/* Product size range start */}
                <div className='mb-10'>
                    {/* Heading Start */}
                    <div className='flex justify-between mb-2'>
                        <div className='text-md font-semibold'>
                            Select Size
                        </div>
                        <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                            Select Guide
                        </div>

                    </div>
                    {/* Heading End */}
                    {/* Size range start */}
                    <div className='grid grid-cols-3 gap-2'>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                            UK 6
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                            UK 6.5
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                            UK 7
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                            UK 7.5
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                            UK 8
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                            UK 8.5
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                            UK 9
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                            UK 9.5
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                            UK 10
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                            UK 11
                        </div>
                    </div>
                    {/* show error start */}
                    <div className='text-red-600 mt-1'>
                        Size selection is required
                    </div>
                </div>
                {/* Product size range end */}

                {/* Add to cart button start */}
                <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3'>
                    Add to cart
                </button>
                {/* Add to cart button end */}
                {/* Add to wishlist button start */}
                <button className='w-full py-4 rounded-full bg-white border border-black text-black text-lg font-medium transition-transform active:scale-95'>
                        Add to wishlist
                        <IoMdHeartEmpty className='inline-block ml-2' />
                </button>
                {/* Add to wishlist button end */}

                <div className='text-lg font-bold mb-5'>
                    Product Details
                </div>
                <div className='text-md mb-5'>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    vitae nisl vitae nisl luctus luctus. Sed vitae nisl vitae nisl
                    luctus luctus. Sed vitae nisl vitae nisl luctus luctus. Sed
                    vitae nisl vitae nisl luctus luctus. Sed vitae nisl vitae nisl
                </div>
                <div className='text-md mb-5'>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    vitae nisl vitae nisl luctus luctus. Sed vitae nisl vitae nisl
                    luctus luctus. Sed vitae nisl vitae nisl luctus luctus. Sed
                    vitae nisl vitae nisl luctus luctus. Sed vitae nisl vitae nisl
                </div>
            </div>
        {/* right col end */}
        </div>
        <RelatedProducts/>
        </Wrapper>
    </div>
  )
}

export default ProductDetails