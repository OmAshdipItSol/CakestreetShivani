"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Category {
  id: string
  name: string
  images: string[]
}

const categories: Category[] = [
  {
    id: "bento",
    name: "Bento Cakes",
    images: [
      // "/bento-cake-with-patterns.jpg",
      // "/square-bento-cake-design.jpg",
      // "/rainbow-bento-cake.jpg",
      // "/minimalist-bento-cake.jpg",
      // "/decorated-bento-cake.jpg",
      "/bento-1-one.jpeg",
      "/bento-2-two.jpeg",
      "/bento-3-three.jpeg",
      "/bento-4-four.jpeg",
      "/bento-5-five.jpeg",
      "/bento-6-six.jpeg"
    ],
  },
  {
    id: "truffle",
    name: "Truffle Cakes",
    images: ["/dark-chocolate-truffle-cake.jpg", "/chocolate-truffle-cake.jpg", "/premium-truffle-cake.jpg"],
  },
  {
    id: "cheesecake",
    name: "Cheesecakes",
    images: ["/elegant-cheesecake.jpg", "/artisan-cheesecake.jpg", "/gourmet-cheesecake.jpg"],
  },
  {
    id: "jar",
    name: "Jar Cakes",
    images: ["/JAR-CAKE.jpg","/beautiful-jar-cake.jpg", "/layered-jar-dessert.jpg"],
  },
  {
    id: "chocolate",
    name: "Customized Chocolates",
    images: ["/custom-choclate.jpg","/artisan-chocolate.jpg"],
  },
  {
    id: "photo",
    name: "Photo Print Cakes",
    images: ["/spiderman.jfif","/unicorn.jfif","/bheem.jfif","motupatlu.jfif","/print21.jfif","/print.jpg","/custom-photo-cake.jpg"],
  },
  {
    id: "theme",
    name: "Theme Cakes",
    images: ["/krishna.jpg","/naruto.jpg","/bday.jpg","/themed-cake-design.jpg"],
  },
  {
    id: "custom",
    name: "Customized Cakes",
    images: ["/bespoke-custom-cake.jpg","/cuatomize-1.jpg","/cuatomize-2.jpg",
              "/cuatomize-3.jpg","/cuatomize-4.jpg","/cuatomize-5.jpg",
              "/cuatomize-6.jpg","/prinses.jpg"
        ],
  },
  {
    id: "white",
    name: "Minimal Designed Cakes",
    images: ["/minimalist-white-cake.jpg", "/elegant-white-cake.jpg",
      "custom-1cake.jpg","custom-2cake.jpg","/custom-3cake.jpg",
      "custom-4cake.jpg","custom-5cake.jpg"
    ],
  },
]

export default function CategoryGallery() {
  const [activeCategory, setActiveCategory] = useState("bento")
  const activeTab = categories.find((cat) => cat.id === activeCategory)

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="serif-display text-4xl md:text-5xl font-light mb-4 text-foreground">Our Collection</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handcrafted creations designed to delight every occasion
          </p>
        </div>

        {/* Horizontal Tab Navigation */}
        <div className="flex overflow-x-auto gap-2 mb-12 pb-4 scrollbar-hide">
          <div className="flex gap-2 px-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full whitespace-nowrap font-light transition-all text-sm md:text-base ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-105 ring-2 ring-offset-2 ring-primary"
                    : "bg-secondary text-secondary-foreground hover:shadow-md hover:bg-secondary/90"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery */}
        {activeTab && (
          <div className="animate-fade-in">
            {/* Carousel for category */}
            {activeTab.images && activeTab.images.length > 0 && <CategoryCarousel images={activeTab.images} />}

            {/* Masonry Gallery */}
            <div className="mt-12">
              <h3 className="text-2xl font-light text-foreground mb-8">Explore {activeTab.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {activeTab.images?.map((image, index) => (
                  <div
                    key={index}
                    className="group relative rounded-3xl overflow-hidden aspect-square hover-glow transition-all duration-300 cursor-pointer"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${activeTab.name} ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function CategoryCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!images.length) return null

  return (
    <div className="relative mb-12 rounded-3xl overflow-hidden">
      <div className="relative w-full aspect-video md:aspect-auto md:h-96 bg-muted">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Carousel ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-all z-10 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-all z-10 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all rounded-full ${
                  index === currentIndex ? "bg-white w-3 h-3" : "bg-white/50 w-2 h-2 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
