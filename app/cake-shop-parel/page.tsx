import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Cake Shop in Parel - CAKE STREET | Designer & Customised Cakes",
  description:
    "Best customised cake shop in Parel. Premium designer cakes, same-day delivery available. Birthday, wedding, theme cakes in Parel near Parel Hospital.",
  keywords: "cake shop Parel, customised cakes Parel, birthday cakes near Parel Hospital, designer cakes Parel",
}

export default function ParelCakeShop() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Parel"
        heading="Cake Shop in Parel – Premium Customised & Designer Cakes"
        subheading="Handcrafted cakes with same-day delivery near Parel Hospital"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Best Custom Cake Shop in Parel</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          CAKE STREET is your go-to customised cake shop in Parel. We specialise in creating bespoke designer cakes for
          every occasion. Whether you're celebrating a birthday near Parel Hospital, planning a wedding, or organizing
          an anniversary party, our professional bakers craft cakes that exceed expectations. With same-day delivery
          across Parel and nearby areas, your celebration never has to wait.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Why Choose CAKE STREET in Parel?</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Customised cake designs tailored to your vision</li>
          <li>Premium ingredients with certified quality assurance</li>
          <li>Same-day delivery throughout Parel area</li>
          <li>Midnight delivery available for urgent orders</li>
          <li>Experienced bakers with professional training</li>
          <li>Competitive pricing with best quality guarantee</li>
        </ul>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Birthday Cakes Near Parel Hospital</h3>
        <p className="text-muted-foreground mb-8">
          Celebrating near Parel Hospital? Order custom birthday cakes from CAKE STREET for same-day delivery. We create
          themed birthday cakes, character cakes, and elegant designs. Quick order process via WhatsApp ensures timely
          delivery.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Eggless Cakes in Parel</h3>
        <p className="text-muted-foreground mb-8">
          All our cakes are available in eggless variants without any quality compromise. Perfect for vegetarians and
          dietary preferences. Premium eggless ingredients deliver the same delicious taste.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Same-Day Cake Delivery in Parel</h3>
        <p className="text-muted-foreground mb-8">
          Need a cake in Parel urgently? Order before 2 PM and get same-day delivery by evening. Midnight delivery also
          available for last-minute celebrations and emergencies.
        </p>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Order Your Custom Cake Now</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="Explore Our Collections"
          links={[
            { href: "/customised-cakes-parel", label: "Customised Cakes in Parel" },
            { href: "/birthday-cakes-parel", label: "Birthday Cakes in Parel" },
            { href: "/wedding-cakes-parel", label: "Wedding Cakes in Parel" },
            { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
            { href: "/cake-shop-wadala", label: "Cake Shop in Wadala" },
            { href: "/customised-cakes-mumbai", label: "All Customised Cakes" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
