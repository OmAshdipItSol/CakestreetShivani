"use client"

import { useRef, useEffect } from "react"
import { MessageCircle, MapPin, Truck, Award } from "lucide-react"
import Link from "next/link"
import HeroCarousel from "@/components/hero-carousel"
import ProductHighlights from "@/components/product-highlights"
import CategoryGallery from "@/components/category-gallery"
import DeliveryZones from "@/components/delivery-zones"
import Footer from "@/components/footer"
import CustomerReviews from "@/components/customer-reviews"
import CTAButtons from "@/components/seo/cta-buttons"

export default function Home() {
  const whatsappRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (whatsappRef.current) {
        whatsappRef.current.style.bottom = "24px"
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openWhatsApp = () => {
    const phoneNumber = "9136540141"
    const message = "Hi! I would like to place an order."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Product Highlights */}
      <ProductHighlights />

      {/* Category Gallery with Tabs */}
      <CategoryGallery />

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Delivery Zones */}
      <DeliveryZones />

      {/* Location Overview Section - SEO optimized */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
            Best Customised Cake Shop in Central Mumbai
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">Handcrafted cakes with finest ingredients</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Same-Day Delivery</h3>
              <p className="text-muted-foreground">Fast delivery across Central Mumbai</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multiple Locations</h3>
              <p className="text-muted-foreground">Serving Dadar, Parel, Sewree & more</p>
            </div>
          </div>

          {/* Main CTA Section */}
          <div className="bg-card rounded-lg p-8 md:p-12 shadow-xl border border-border/50">
            <h3 className="text-2xl font-serif font-bold text-card-foreground mb-4 text-center">
              Order Your Custom Cake Today
            </h3>
            <p className="text-center text-card-foreground/80 mb-8 max-w-2xl mx-auto">
              CAKE STREET specializes in customised, designer, and theme cakes for all occasions. Same-day delivery
              available in Dadar, Sewree, Parel, Wadala, Cotton Green, and Kalachowki.
            </p>
            <div className="flex justify-center">
              <CTAButtons />
            </div>
          </div>
        </div>
      </section>

      {/* Location Links Section - SEO optimized */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Cake Shop in Your Area</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
              { href: "/cake-shop-sewree", label: "Cake Shop in Sewree" },
              { href: "/cake-shop-parel", label: "Cake Shop in Parel" },
              { href: "/cake-shop-wadala", label: "Cake Shop in Wadala" },
              { href: "/cake-shop-cotton-green", label: "Cake Shop in Cotton Green" },
              { href: "/cake-shop-kalachowki", label: "Cake Shop in Kalachowki" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="p-4 bg-muted/50 hover:bg-muted rounded-lg transition-colors group"
              >
                <p className="text-foreground font-medium group-hover:text-accent transition-colors">{link.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Links Section - SEO optimized */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Our Cake Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: "/customised-cakes-mumbai", label: "Customised Cakes" },
              { href: "/birthday-cakes-mumbai", label: "Birthday Cakes" },
              { href: "/wedding-cakes-mumbai", label: "Wedding Cakes" },
              { href: "/anniversary-cakes-mumbai", label: "Anniversary Cakes" },
              { href: "/designer-cakes-mumbai", label: "Designer Cakes" },
              { href: "/eggless-cakes-mumbai", label: "Eggless Cakes" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="p-4 bg-card hover:bg-card/90 border border-border/50 rounded-lg transition-all group shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                <p className="text-card-foreground font-medium group-hover:text-primary transition-colors">{link.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Sticky WhatsApp Button */}
      <button
        ref={whatsappRef}
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-accent hover:shadow-2xl hover:scale-110 transition-all duration-300 text-accent-foreground"
        aria-label="Open WhatsApp chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </main>
  )
}
