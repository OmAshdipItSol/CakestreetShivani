import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"
import { ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Best Cake Shop Near Me - CAKE STREET | Find Your Local Cake Shop",
  description:
    "Looking for the best cake shop near you? CAKE STREET serves Dadar, Parel, Sewree, Wadala and more. Same-day delivery available.",
  keywords: "cake shop near me, best cake shop, local cake shop, cake delivery near me",
}

export default function BestCakeShopNearMe() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Nearby"
        heading="Best Cake Shop Near Me – Find CAKE STREET in Your Area"
        subheading="Premium customised cakes with same-day delivery"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Find the Best Cake Shop Near You</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          CAKE STREET is your trusted cake shop near you in Central Mumbai. We serve multiple locations including Dadar,
          Parel, Sewree, Wadala, Cotton Green, and Kalachowki. Whether you need a custom cake today or planning ahead,
          CAKE STREET has you covered with premium quality, quick delivery, and excellent customer service.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Why Choose CAKE STREET Near You?</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Local cake shop with personal service</li>
          <li>Premium quality customised cakes</li>
          <li>Same-day delivery in your area</li>
          <li>Affordable pricing without quality compromise</li>
          <li>Quick ordering via WhatsApp</li>
          <li>Multiple location coverage for convenience</li>
          <li>Experienced bakers serving your community</li>
        </ul>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Our Service Areas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {["Dadar", "Parel", "Sewree", "Wadala", "Cotton Green", "Kalachowki"].map((location) => (
            <div key={location} className="p-4 bg-muted/50 rounded-lg flex items-center justify-between">
              <span className="font-medium text-foreground">{location}</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          ))}
        </div>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">What Can You Order Near You?</h3>
        <p className="text-muted-foreground mb-4">From your local CAKE STREET, you can order:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
          <li>Customised cakes with your design ideas</li>
          <li>Birthday cakes for all age groups</li>
          <li>Wedding and anniversary cakes</li>
          <li>Designer and aesthetic cakes</li>
          <li>Theme-based cakes for special occasions</li>
          <li>Eggless cakes for dietary preferences</li>
        </ul>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Find CAKE STREET Near You Today</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="Visit Our Locations"
          links={[
            { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
            { href: "/cake-shop-parel", label: "Cake Shop in Parel" },
            { href: "/cake-shop-sewree", label: "Cake Shop in Sewree" },
            { href: "/cake-shop-wadala", label: "Cake Shop in Wadala" },
            { href: "/customised-cakes-mumbai", label: "All Customised Cakes" },
            { href: "/same-day-cake-delivery-dadar", label: "Same-Day Delivery" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
