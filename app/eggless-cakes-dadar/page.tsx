import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Eggless Cakes in Dadar - CAKE STREET | Vegetarian Cake Delivery",
  description:
    "Eggless cakes in Dadar. Premium quality vegetarian cakes with same-day delivery. Order now via WhatsApp.",
  keywords: "eggless cakes Dadar, vegetarian cakes Dadar, egg-free cakes Dadar",
}

export default function EgglessCakesDadar() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Dadar"
        heading="Eggless Cakes in Dadar – Premium Vegetarian Options"
        subheading="Delicious vegetarian cakes with same-day delivery"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Premium Eggless Cakes in Dadar</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          CAKE STREET in Dadar offers premium eggless cakes with zero compromise on quality or taste. Perfect for
          vegetarians and those with dietary preferences. Every eggless cake is crafted using premium ingredients and
          egg substitutes. Available in all cake varieties including customised, birthday, designer, and theme cakes.
          Same-day delivery across Dadar.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Eggless Cake Varieties in Dadar</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Eggless chocolate cakes</li>
          <li>Eggless vanilla and custom flavours</li>
          <li>Eggless customised designs</li>
          <li>Eggless birthday and celebration cakes</li>
          <li>Eggless designer and artistic cakes</li>
          <li>Eggless wedding and anniversary options</li>
          <li>All available with same-day delivery</li>
        </ul>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Quality & Taste Assurance</h3>
        <p className="text-muted-foreground mb-8">
          Our eggless cakes taste just as delicious as traditional cakes. Premium egg substitutes and carefully selected
          ingredients ensure perfect texture and flavour in every bite.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Same-Day Eggless Cake Delivery in Dadar</h3>
        <p className="text-muted-foreground mb-8">
          Order your eggless cake before 2 PM for same-day delivery. Evening or midnight delivery options available. All
          eggless cakes delivered fresh and perfectly packaged in Dadar.
        </p>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Order Your Eggless Cake Today</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="More Services"
          links={[
            { href: "/customised-cakes-dadar", label: "Customised Cakes in Dadar" },
            { href: "/birthday-cakes-dadar", label: "Birthday Cakes in Dadar" },
            { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
            { href: "/eggless-cakes-mumbai", label: "Eggless Cakes Mumbai" },
            { href: "/designer-cakes-dadar", label: "Designer Cakes in Dadar" },
            { href: "/cake-shop-parel", label: "Cake Shop in Parel" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
