import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Wedding Cakes in Mumbai - CAKE STREET | Premium Custom Wedding Cakes",
  description:
    "Premium wedding cakes in Mumbai. CAKE STREET creates elegant custom wedding cakes. Delivery available in Dadar, Parel, and all Central Mumbai locations.",
  keywords: "wedding cakes Mumbai, custom wedding cake, premium wedding cakes, wedding cake delivery",
}

export default function WeddingCakesMumbai() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Mumbai"
        heading="Wedding Cakes in Mumbai – Premium Custom Designs"
        subheading="Elegant cakes for your special day"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Custom Wedding Cakes for Your Big Day</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          CAKE STREET creates stunning custom wedding cakes that complement your wedding theme and vision. From elegant
          tiered designs to modern minimalist cakes, we handle wedding cakes of all sizes and styles. Our expert bakers
          work closely with you to design a cake that's as beautiful as your celebration. Available with eggless options
          and premium ingredients.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Wedding Cake Customisation</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Tiered wedding cakes (2, 3, 4+ tiers)</li>
          <li>Custom flavour combinations for each tier</li>
          <li>Intricate sugar work and hand-piped designs</li>
          <li>Fresh flower decoration options</li>
          <li>Personalised cake toppers and monograms</li>
          <li>Theme-based designs (luxury, rustic, modern)</li>
          <li>Large wedding cakes for 50-200+ guests</li>
        </ul>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Eggless & Premium Ingredients</h3>
        <p className="text-muted-foreground mb-8">
          All wedding cakes available in eggless variants. We use premium quality ingredients ensuring freshness and
          taste throughout your celebration. Perfect for diverse dietary requirements at your wedding.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Same-Day & Scheduled Delivery</h3>
        <p className="text-muted-foreground mb-8">
          We deliver wedding cakes on your wedding day or the day before. Delivery available across all wedding venues
          in Central Mumbai. Our team ensures safe delivery and on-venue cake setup if needed.
        </p>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Discuss Your Wedding Cake</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="More Cake Collections"
          links={[
            { href: "/customised-cakes-mumbai", label: "Customised Cakes" },
            { href: "/anniversary-cakes-mumbai", label: "Anniversary Cakes" },
            { href: "/designer-cakes-mumbai", label: "Designer Cakes" },
            { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
            { href: "/wedding-cakes-dadar", label: "Wedding Cakes in Dadar" },
            { href: "/eggless-cakes-mumbai", label: "Eggless Cakes" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
