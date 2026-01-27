import React from 'react'
import { assets } from '../assets/asset'

const MainBanner = () => {
  return (
    <div className="w-full h-[97vh] overflow-hidden bg-black">
      <video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="w-full h-full object-cover"
>
  <source src={assets.video} type="video/mp4" />
</video>

    </div>
  )
}

export default MainBanner
