import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Customised Cakes in Dadar - CAKE STREET | Bespoke Cake Design",
  description:
    "Customised cakes in Dadar. CAKE STREET creates bespoke designs tailored to your preferences. Same-day delivery available.",
  keywords: "customised cakes Dadar, custom cakes Dadar, personalised cakes, Dadar cake shop",
}

export default function CustomisedCakesDadar() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Dadar"
        heading="Customised Cakes in Dadar – Bespoke & Designer Collections"
        subheading="Create your perfect cake with CAKE STREET in Dadar"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Custom Cakes Tailored to Your Vision</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          CAKE STREET in Dadar specialises in creating fully customised cakes that match your exact vision. Every cake
          is handcrafted by our professional bakers using premium ingredients. Share your ideas, colours, themes, and
          preferences – we'll create a cake that exceeds expectations. Available with same-day delivery throughout Dadar
          and nearby areas.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Our Customisation Process in Dadar</h3>
        <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Chat with us via WhatsApp about your cake ideas</li>
          <li>Discuss flavours, colours, and design preferences</li>
          <li>Choose eggless or regular cake options</li>
          <li>Finalise design details and occasion requirements</li>
          <li>Confirm order and delivery time</li>
          <li>Receive your custom cake fresh on the scheduled date</li>
        </ol>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Why Choose CAKE STREET in Dadar?</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Professional bakers with 10+ years experience</li>
          <li>Premium quality ingredients sourced carefully</li>
          <li>Fully customised designs for your occasion</li>
          <li>Same-day delivery in Dadar</li>
          <li>Eggless options available</li>
          <li>Affordable pricing with zero quality compromise</li>
          <li>Quick WhatsApp ordering process</li>
        </ul>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Same-Day Customised Cake Delivery in Dadar</h3>
        <p className="text-muted-foreground mb-8">
          Order your customised cake before 2 PM and get same-day delivery by evening. Midnight delivery also available
          for last-minute celebrations. All deliveries within Dadar area handled with care.
        </p>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Start Your Custom Cake Design</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="Related Services"
          links={[
            { href: "/birthday-cakes-dadar", label: "Birthday Cakes in Dadar" },
            { href: "/wedding-cakes-dadar", label: "Wedding Cakes in Dadar" },
            { href: "/designer-cakes-dadar", label: "Designer Cakes in Dadar" },
            { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
            { href: "/customised-cakes-mumbai", label: "Customised Cakes Mumbai" },
            { href: "/cake-shop-parel", label: "Cake Shop in Parel" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
