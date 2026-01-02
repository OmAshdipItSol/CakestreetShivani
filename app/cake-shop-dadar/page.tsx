import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Cake Shop in Dadar - CAKE STREET | Best Customised Cakes",
  description:
    "Best customised cake shop in Dadar. Premium designer cakes, same-day delivery available. Birthday, wedding, anniversary cakes. Order now via WhatsApp.",
  keywords: "cake shop Dadar, customised cakes Dadar, birthday cakes near Dadar, eggless cakes Dadar",
}

export default function DadarCakeShop() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Dadar"
        heading="Cake Shop in Dadar – Customised & Designer Cakes"
        subheading="Premium handcrafted cakes with same-day delivery in Central Mumbai"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Best Custom Cake Shop in Dadar</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Welcome to CAKE STREET – your trusted cake shop in Dadar. We specialise in customised cakes, designer cakes,
          and theme-based creations for all occasions. Whether you need a birthday cake, wedding cake, anniversary cake,
          or eggless cake, we deliver fresh, premium-quality cakes right to your doorstep in Dadar with same-day
          delivery available.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Why Choose CAKE STREET in Dadar?</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>100% customised cake designs tailored to your preferences</li>
          <li>Premium ingredients and eggless options available</li>
          <li>Same-day cake delivery across Dadar</li>
          <li>Midnight delivery for last-minute celebrations</li>
          <li>Affordable pricing with no compromise on quality</li>
          <li>Experienced bakers with 10+ years expertise</li>
        </ul>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Birthday Cakes Near Dadar Station</h3>
        <p className="text-muted-foreground mb-8">
          Looking for the best birthday cake near Dadar Station? CAKE STREET offers custom birthday cakes delivered
          same-day. From simple chocolate cakes to elaborate themed designs, we create memorable birthday cakes that
          perfectly match your celebration. Order now via WhatsApp for instant confirmation.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Eggless Cakes in Dadar</h3>
        <p className="text-muted-foreground mb-8">
          All our cakes can be prepared eggless without compromising on taste or texture. Perfect for vegetarians and
          those with dietary preferences. We use premium eggless ingredients to ensure the same delicious experience.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Same-Day Cake Delivery in Dadar</h3>
        <p className="text-muted-foreground mb-8">
          Need a cake urgently? CAKE STREET offers same-day cake delivery in Dadar. Order before 2 PM and get your
          custom cake delivered by evening. Midnight delivery also available for special celebrations.
        </p>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Order Your Cake Today</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="Explore Our Services"
          links={[
            { href: "/customised-cakes-dadar", label: "Customised Cakes in Dadar" },
            { href: "/birthday-cakes-dadar", label: "Birthday Cakes in Dadar" },
            { href: "/wedding-cakes-dadar", label: "Wedding Cakes in Dadar" },
            { href: "/customised-cakes-mumbai", label: "All Customised Cakes" },
            { href: "/cake-shop-parel", label: "Cake Shop in Parel" },
            { href: "/cake-shop-sewree", label: "Cake Shop in Sewree" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
