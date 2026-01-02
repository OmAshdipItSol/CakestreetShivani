import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Wedding Cakes in Dadar - CAKE STREET | Premium Custom Wedding Cakes",
  description:
    "Premium wedding cakes in Dadar. CAKE STREET creates elegant custom wedding cakes. Delivery available for Dadar venues.",
  keywords: "wedding cakes Dadar, custom wedding cake Dadar, premium wedding cakes",
}

export default function WeddingCakesDadar() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Dadar"
        heading="Wedding Cakes in Dadar – Premium Custom Designs"
        subheading="Elegant cakes for your special day"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Premium Wedding Cakes for Dadar Celebrations</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          CAKE STREET creates stunning custom wedding cakes for Dadar celebrations. From elegant tiered designs to
          modern minimalist cakes, we handle wedding cakes of all sizes and styles. Our expert bakers work with you to
          design a cake that's as beautiful as your wedding. Delivery available for all Dadar venues.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Wedding Cake Options</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Tiered wedding cakes (2, 3, 4+ tiers)</li>
          <li>Customised flavours for each tier</li>
          <li>Intricate sugar work and designs</li>
          <li>Fresh flower decorations</li>
          <li>Personalised cake toppers</li>
          <li>Theme-based wedding cake designs</li>
          <li>Large cakes for 50-200+ guests</li>
        </ul>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Wedding Cake Delivery in Dadar</h3>
        <p className="text-muted-foreground mb-8">
          We deliver wedding cakes to all Dadar venues. Our team ensures safe delivery and on-venue setup if required.
          Pre-wedding consultations available to discuss design and customisation.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Premium Quality & Ingredients</h3>
        <p className="text-muted-foreground mb-8">
          All wedding cakes made with premium ingredients and available in eggless options. Fresh, delicious, and
          beautifully designed for your special day.
        </p>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Discuss Your Wedding Cake</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="More Services"
          links={[
            { href: "/customised-cakes-dadar", label: "Customised Cakes in Dadar" },
            { href: "/anniversary-cakes-dadar", label: "Anniversary Cakes in Dadar" },
            { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
            { href: "/wedding-cakes-mumbai", label: "Wedding Cakes Mumbai" },
            { href: "/designer-cakes-dadar", label: "Designer Cakes in Dadar" },
            { href: "/cake-shop-parel", label: "Cake Shop in Parel" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
