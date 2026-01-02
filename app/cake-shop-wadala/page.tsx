import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Cake Shop in Wadala - CAKE STREET | Custom Designer Cakes",
  description:
    "Best customised cake shop in Wadala. Premium designer cakes with same-day delivery. Birthday, wedding, anniversary cakes near Wadala Station.",
  keywords: "cake shop Wadala, customised cakes Wadala, birthday cakes Wadala, designer cakes near Wadala Station",
}

export default function WadalaCakeShop() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Wadala"
        heading="Cake Shop in Wadala – Premium Customised Cakes"
        subheading="Designer cakes with same-day delivery near Wadala Station"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Best Custom Cake Shop in Wadala</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          CAKE STREET brings premium customised cake services to Wadala and surrounding areas. Our expert bakers create
          stunning designer cakes, themed creations, and bespoke designs for every celebration. From birthdays near
          Wadala Station to weddings and corporate events, we ensure your cake is as special as your occasion. Same-day
          delivery available across Wadala.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Why Choose CAKE STREET in Wadala?</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Custom-designed cakes for all occasions</li>
          <li>Premium quality with certified ingredients</li>
          <li>Same-day delivery in Wadala area</li>
          <li>Midnight delivery available</li>
          <li>Professional bakers with proven expertise</li>
          <li>Competitive prices with quality assurance</li>
        </ul>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Birthday Cakes Near Wadala Station</h3>
        <p className="text-muted-foreground mb-8">
          Celebrate birthdays in Wadala with our custom cake designs. Quick delivery near Wadala Station. Order via
          WhatsApp for same-day service and instant confirmation.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Eggless Cakes in Wadala</h3>
        <p className="text-muted-foreground mb-8">
          All cakes available in eggless options with premium taste. Suitable for vegetarians and dietary preferences.
          Same quality, absolutely no compromise.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Same-Day Cake Delivery in Wadala</h3>
        <p className="text-muted-foreground mb-8">
          Need a cake today in Wadala? Order before 2 PM for same-day delivery. Evening and midnight delivery options
          available for your convenience.
        </p>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Order Your Cake Today</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="More Services Available"
          links={[
            { href: "/customised-cakes-wadala", label: "Customised Cakes in Wadala" },
            { href: "/designer-cakes-wadala", label: "Designer Cakes in Wadala" },
            { href: "/theme-cakes-wadala", label: "Theme Cakes in Wadala" },
            { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
            { href: "/cake-shop-parel", label: "Cake Shop in Parel" },
            { href: "/birthday-cakes-mumbai", label: "Birthday Cakes Mumbai" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
