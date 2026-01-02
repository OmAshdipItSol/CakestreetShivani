import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Cake Shop in Sewree - CAKE STREET | Custom Designer Cakes",
  description:
    "Best cake shop in Sewree near Parel. Premium customised cakes with same-day delivery. Birthday, wedding, anniversary cakes for all occasions.",
  keywords: "cake shop Sewree, customised cakes Sewree, birthday cakes near Sewree, designer cakes Sewree",
}

export default function SewreeCakeShop() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Sewree"
        heading="Cake Shop in Sewree – Premium Customised Cakes"
        subheading="Handcrafted designer cakes with same-day delivery near Parel"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Best Custom Cake Shop in Sewree</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          CAKE STREET brings premium customised cakes to Sewree and nearby areas. Our cake shop near Sewree offers
          exquisite designer cakes, themed creations, and bespoke designs for every occasion. From birthdays to
          weddings, anniversaries to corporate events, we create cakes that are as beautiful as they are delicious.
          Same-day delivery available across Sewree and Central Mumbai.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Why Choose CAKE STREET in Sewree?</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Custom cake designs created by professional bakers</li>
          <li>Premium quality ingredients sourced carefully</li>
          <li>Same-day delivery available in Sewree area</li>
          <li>Midnight cake delivery for emergencies</li>
          <li>Flexible customisation options</li>
          <li>Affordable pricing without quality compromise</li>
        </ul>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Birthday Cakes Near Sewree Hospital</h3>
        <p className="text-muted-foreground mb-8">
          Celebrate birthdays in Sewree with our custom birthday cakes. Quick delivery near Sewree Hospital and
          surrounding areas. Order via WhatsApp for instant confirmation and same-day delivery.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Eggless Cakes in Sewree</h3>
        <p className="text-muted-foreground mb-8">
          All our cakes are available in eggless variants. Perfect for vegetarians and those preferring eggless options.
          No difference in taste or quality – just pure deliciousness.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Same-Day Cake Delivery in Sewree</h3>
        <p className="text-muted-foreground mb-8">
          Need a cake urgently in Sewree? Order before 2 PM and receive your freshly made cake by evening. Same-day cake
          delivery service ensures your celebration isn't delayed.
        </p>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Order Your Custom Cake Today</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="Explore More Services"
          links={[
            { href: "/customised-cakes-sewree", label: "Customised Cakes in Sewree" },
            { href: "/birthday-cakes-sewree", label: "Birthday Cakes in Sewree" },
            { href: "/designer-cakes-sewree", label: "Designer Cakes in Sewree" },
            { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
            { href: "/cake-shop-parel", label: "Cake Shop in Parel" },
            { href: "/customised-cakes-mumbai", label: "Customised Cakes Mumbai" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
