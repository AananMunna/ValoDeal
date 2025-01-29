import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="carousel w-full md:h-screen mt-">
  <div id="item1" className="carousel-item w-full ">
    <img
      src="https://ghorerbazar.com/cdn/shop/files/Web_Banner_Crystal_Honey.png?v=1736946452&width=1500"
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
  </div>
</div>
{/* <div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs"></a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div> */}
    </>
  )
}

export default Hero