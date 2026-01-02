"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

interface CarouselSlide {
  id: number
  type: "image" | "video"
  src: string
  alt: string
}

const slides: CarouselSlide[] = [
  { id: 1, type: "image", src: "/cake-decorating-with-glazing.jpg", alt: "Artisan cake creation" },
  { id: 2, type: "video", src: "/chocolate-cake-being-sliced.jpg", alt: "Premium chocolate cake" },
  { id: 3, type: "image", src: "/premium-bento-cake-display.jpg", alt: "Bento collection" },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="relative w-full h-screen max-h-96 md:max-h-screen overflow-hidden rounded-b-3xl">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src || "/placeholder.svg"}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Soft gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />

          {/* Play icon for video slides */}
          {slide.type === "video" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition-colors">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all text-white hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all text-white hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlay(false)
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide ? "bg-white w-8 h-2" : "bg-white/50 w-2 h-2 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="serif-display text-4xl md:text-6xl font-light tracking-tight mb-4 text-pretty">CakeStreet</h1>
        <p className="text-lg md:text-xl font-light opacity-90">Handcrafted with Care & Premium Ingredients</p>
      </div>
    </section>
  )
}
