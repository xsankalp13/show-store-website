
import { HeroBanner, Wrapper,ProductCard } from "@/components"

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Wrapper>
        {/* Heading and pragraph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning For Your Miles
          </div>
          <div className="text-md md:text-lg">
            A lightweight, Nike ZoomX midsole is combined with increased stack heights to help 
            provide Cushioning during extended strrches of running.
          </div>
        </div>
        {/* Heading and pragraph end */}
        
        {/* Product cards start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0 "> 
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          
        </div>
        {/* Product cards end */}
        
      </Wrapper>
    </div>
  )
}
