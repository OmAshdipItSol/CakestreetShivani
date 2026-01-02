import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Eggless Cakes in Mumbai - CAKE STREET | Vegetarian Cake Delivery",
  description:
    "Eggless cakes in Mumbai from CAKE STREET. Premium quality vegetarian cakes with no compromise on taste. Same-day delivery.",
  keywords: "eggless cakes Mumbai, vegetarian cakes, egg-free cakes, eggless cake delivery",
}

export default function EgglessCakesMumbai() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Mumbai"
        heading="Eggless Cakes in Mumbai – Premium Vegetarian Options"
        subheading="Delicious vegetarian cakes without any compromise"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Premium Eggless Cake Collection</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          CAKE STREET offers premium eggless cakes that are just as delicious as traditional cakes. Perfect for
          vegetarians and those with dietary preferences. Every eggless cake is made with premium ingredients ensuring
          the same taste, texture, and quality as regular cakes. Available across all cake types including customised,
          birthday, wedding, anniversary, designer, and theme cakes. Same-day delivery across Mumbai.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Eggless Cake Varieties</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Eggless chocolate cakes</li>
          <li>Eggless vanilla cakes</li>
          <li>Eggless red velvet cakes</li>
          <li>Eggless carrot cakes</li>
          <li>Eggless black forest cakes</li>
          <li>Eggless customised designs</li>
          <li>Eggless birthday and celebration cakes</li>
          <li>Eggless premium designer cakes</li>
        </ul>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Quality & Taste Guarantee</h3>
        <p className="text-muted-foreground mb-8">
          Our eggless cakes use premium egg substitutes and carefully selected ingredients. Zero compromise on taste,
          texture, or freshness. Every eggless cake is crafted with the same expertise and care as traditional cakes.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Eggless Cake Shop Near You</h3>
        <p className="text-muted-foreground mb-8">
          Find eggless cakes in Dadar, Parel, Sewree, Wadala, Cotton Green, and Kalachowki. All eggless cakes available
          with same-day delivery. Order before 2 PM for evening delivery or midnight delivery options.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Perfect for Dietary Preferences</h3>
        <p className="text-muted-foreground mb-8">
          Eggless cakes suitable for strict vegetarians, vegan-friendly (upon request), and those with allergies or
          dietary restrictions. Same premium quality and taste in every slice.
        </p>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Order Your Eggless Cake Today</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="More Collections"
          links={[
            { href: "/customised-cakes-mumbai", label: "Customised Cakes" },
            { href: "/birthday-cakes-mumbai", label: "Birthday Cakes" },
            { href: "/wedding-cakes-mumbai", label: "Wedding Cakes" },
            { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
            { href: "/eggless-cakes-dadar", label: "Eggless Cakes in Dadar" },
            { href: "/anniversary-cakes-mumbai", label: "Anniversary Cakes" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
