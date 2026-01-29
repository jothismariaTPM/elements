import React, { useRef, useState, useEffect } from 'react'
import { assets } from '../assets/asset'

const MainBanner = () => {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [offsetY, setOffsetY] = useState(0)

  // autoplay (muted)
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = true
      video.play()
    }
  }, [])

  // parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const scrollProgress = -rect.top * 0.3 // parallax strength
      setOffsetY(scrollProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[97vh] overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          transform: `translateY(${offsetY}px)`,
        }}
      >
        <source src={assets.video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Play / Pause Button */}
      <button
        onClick={togglePlay}
        className="absolute bottom-10 right-10 z-10 px-3 py-2 bg-white/80 text-black rounded-md hover:bg-white"
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>
    </div>
  )
}

export default MainBanner
