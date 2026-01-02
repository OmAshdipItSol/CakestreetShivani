"use client"

import { Star } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Review {
  id: number
  name: string
  rating: number
  text: string
  image?: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "The bento cakes are absolutely stunning! Each one is a work of art. The quality and taste exceeded my expectations. Highly recommend!",
    image: "/customer-avatar.jpg",
  },
  {
    id: 2,
    name: "Priya K.",
    rating: 5,
    text: "Ordered a customized cake for my sister's birthday. The presentation was Instagram-worthy and the flavors were incredible. Will definitely order again!",
    image: "/customer-avatar.jpg",
  },
  {
    id: 3,
    name: "Aditya R.",
    rating: 5,
    text: "Best truffle bento cakes in Mumbai! Fresh, delicious, and beautifully designed. The WhatsApp ordering process is so convenient.",
    image: "/customer-avatar.jpg",
  },
  {
    id: 4,
    name: "Neha S.",
    rating: 5,
    text: "Every cake is meticulously crafted with attention to detail. The minimal white cakes are perfect for any elegant occasion. Worth every rupee!",
    image: "/customer-avatar.jpg",
  },
  {
    id: 5,
    name: "Rohan P.",
    rating: 5,
    text: "Impressed with the quality and freshness. The bento cakes are not just beautiful but taste amazing too. Cake Street is my go-to now!",
    image: "/customer-avatar.jpg",
  },
]

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
    setIsAutoPlay(false)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    setIsAutoPlay(false)
  }

  const visibleReviews = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      items.push(reviews[(currentIndex + i) % reviews.length])
    }
    return items
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-background via-primary to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif-display text-4xl md:text-5xl font-light mb-2 text-foreground">Loved by Our Customers</h2>
          <p className="text-muted-foreground font-light">See what our happy customers have to say</p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Desktop: Show 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
            {visibleReviews().map((review) => (
              <div
                key={review.id}
                className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/80 font-light mb-6 flex-grow leading-relaxed text-sm">{review.text}</p>

                {/* Customer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-light text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Show 1 card */}
          <div className="md:hidden mb-8">
            <div className="bg-card rounded-3xl p-6 shadow-sm flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 font-light mb-6 flex-grow leading-relaxed">
                {reviews[currentIndex].text}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={reviews[currentIndex].image || "/placeholder.svg"}
                    alt={reviews[currentIndex].name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-light text-foreground">{reviews[currentIndex].name}</p>
                  <p className="text-xs text-muted-foreground">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-card hover:shadow-md transition-all text-foreground hover:scale-110"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlay(false)
                  }}
                  className={`transition-all rounded-full ${
                    index === currentIndex ? "bg-accent w-3 h-3" : "bg-accent/40 w-2 h-2 hover:bg-accent/60"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-card hover:shadow-md transition-all text-foreground hover:scale-110"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
