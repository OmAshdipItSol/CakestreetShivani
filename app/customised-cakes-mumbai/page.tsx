import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Customised Cakes in Mumbai - CAKE STREET | Designer Cakes",
  description:
    "Premium customised cakes in Mumbai. CAKE STREET creates bespoke designer cakes for all occasions. Same-day delivery in Dadar, Parel, Sewree, Wadala & more.",
  keywords:
    "customised cakes Mumbai, custom cakes, designer cakes, bespoke cakes, personalised cakes, same-day cake delivery",
}

export default function CustomisedCakesMumbai() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Mumbai"
        heading="Customised Cakes in Mumbai – Premium & Designer Collections"
        subheading="Bespoke handcrafted cakes for every celebration"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Custom Cakes for All Occasions</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          CAKE STREET specialises in creating customised and designer cakes that turn your special moments into
          unforgettable memories. Every cake is handcrafted with premium ingredients and personalised designs. From
          intimate celebrations in Dadar to grand events in Parel, Sewree, Wadala, Cotton Green, and Kalachowki – we
          deliver excellence everywhere.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Our Customisation Process</h3>
        <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Discuss your cake ideas, theme, and preferences</li>
          <li>Choose from eggless or regular cake options</li>
          <li>Select flavours (chocolate, vanilla, red velvet, carrot, etc.)</li>
          <li>Finalise design, colours, and decorations</li>
          <li>Order via WhatsApp for instant confirmation</li>
          <li>Receive your custom cake fresh and on time</li>
        </ol>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Eggless & Premium Ingredients</h3>
        <p className="text-muted-foreground mb-8">
          All our customised cakes are available in eggless variants. We use only premium quality ingredients sourced
          from trusted suppliers. Your cake is as delicious as it is beautiful, with freshness guaranteed.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Same-Day Cake Delivery Available</h3>
        <p className="text-muted-foreground mb-8">
          Order your customised cake before 2 PM and get same-day delivery. We deliver across Central Mumbai including
          Dadar, Parel, Sewree, Wadala, Cotton Green, and Kalachowki. Midnight delivery available for urgent orders.
        </p>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Start Your Cake Customisation Today</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="Service Areas & Options"
          links={[
            { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
            { href: "/birthday-cakes-mumbai", label: "Birthday Cakes" },
            { href: "/wedding-cakes-mumbai", label: "Wedding Cakes" },
            { href: "/anniversary-cakes-mumbai", label: "Anniversary Cakes" },
            { href: "/designer-cakes-mumbai", label: "Designer Cakes" },
            { href: "/eggless-cakes-mumbai", label: "Eggless Cakes" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
