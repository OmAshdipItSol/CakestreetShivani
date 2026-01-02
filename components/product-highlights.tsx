"use client"

import { MessageCircle } from "lucide-react"
import Image from "next/image"

interface Product {
  id: number
  title: string
  price: string
  image: string
  span?: string
}

const products: Product[] = [
  {
    id: 1,
    title: "Bento Cakes",
    price: "Starting at ₹250",
    image: "/colorful-bento-cake-assortment.jpg",
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    title: "Truffle Bento Cakes",
    price: "Starting at ₹300",
    image: "/chocolate-truffle-bento-cake.jpg",
    span: "col-span-1 row-span-2",
  },
  {
    id: 3,
    title: "Customized Theme Cakes",
    price: "Custom Pricing",
    image: "/decorated-theme-birthday-cake.jpg",
    span: "col-span-1",
  },
  {
    id: 4,
    title: "Minimal White Cakes",
    price: "Custom Pricing",
    image: "/minimalist-white-wedding-cake-pinterest-style.jpg",
    span: "col-span-1",
  },
  {
    id: 5,
    title: "Jar Cakes",
    price: "Starting at ₹150",
    image: "/layered-dessert-jar-cake.jpg",
    span: "col-span-2 md:col-span-1",
  },
]

export default function ProductHighlights() {
  const openWhatsApp = () => {
    const phoneNumber = "9136540141"
    const message = "Hi! I would like to order a cake. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-background via-primary to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="serif-display text-4xl md:text-5xl font-light mb-4 text-foreground">Featured Collection</h2>
          <p className="text-muted-foreground text-lg">Exquisitely crafted creations for every celebration</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group relative rounded-3xl overflow-hidden bg-card hover-glow transition-all duration-300 cursor-pointer ${
                product.span
              }`}
              onClick={openWhatsApp}
            >
              {/* Image */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-100 transition-opacity">
                <h3 className="serif-display text-white text-lg md:text-xl font-light mb-1">{product.title}</h3>
                <p className="text-secondary text-sm md:text-base font-light mb-3">{product.price}</p>
                <button className="flex items-center justify-center gap-2 bg-accent/90 hover:bg-accent text-accent-foreground py-2 px-4 rounded-full text-sm transition-colors w-full">
                  <MessageCircle className="w-4 h-4" />
                  Order Now
                </button>
              </div>

              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-light">
                {product.price.split("₹")[1] ? `₹${product.price.split("₹")[1]}` : "Custom"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
