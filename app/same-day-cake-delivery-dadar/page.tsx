import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Same-Day Cake Delivery in Dadar - CAKE STREET | Order Now",
  description:
    "Same-day cake delivery in Dadar. Order before 2 PM and get delivery by evening. CAKE STREET delivers fresh cakes same-day.",
  keywords: "same-day cake delivery Dadar, urgent cake delivery, instant cake order Dadar",
}

export default function SameDayCakeDeliveryDadar() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Dadar"
        heading="Same-Day Cake Delivery in Dadar – Fresh Cakes Fast"
        subheading="Order before 2 PM, get delivery by evening"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Same-Day Cake Delivery Service</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Need a cake urgently in Dadar? CAKE STREET offers same-day cake delivery with fresh, premium quality cakes.
          Order before 2 PM and receive your customised cake by evening. We understand last-minute celebrations and
          provide quick, reliable service without compromising quality.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">How Same-Day Delivery Works</h3>
        <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Chat with us via WhatsApp with your cake requirements</li>
          <li>Discuss flavours, design, and preferences quickly</li>
          <li>Confirm order before 2 PM for same-day delivery</li>
          <li>We prepare your fresh cake with priority</li>
          <li>Receive delivery by 6-7 PM in Dadar</li>
          <li>Enjoy your fresh cake the same day</li>
        </ol>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Same-Day Delivery Options</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Evening delivery by 6-7 PM for daytime orders</li>
          <li>Midnight delivery for surprise celebrations</li>
          <li>Custom cake designs available same-day</li>
          <li>Eggless options available on same-day orders</li>
          <li>No compromise on quality despite quick turnaround</li>
        </ul>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Cakes Available for Same-Day Delivery</h3>
        <p className="text-muted-foreground mb-8">
          All our cake types available for same-day delivery: Birthday cakes, customised cakes, celebration cakes, and
          eggless options. Order your favourite cake quickly via WhatsApp.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Why Choose CAKE STREET for Same-Day Delivery?</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Experienced bakers working fast without cutting quality</li>
          <li>Premium ingredients used even for urgent orders</li>
          <li>Quick WhatsApp ordering process</li>
          <li>Reliable and on-time delivery</li>
          <li>Freshly made cakes every order</li>
          <li>Affordable same-day pricing</li>
        </ul>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Order Your Same-Day Cake Now</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="More Delivery Services"
          links={[
            { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
            { href: "/customised-cakes-dadar", label: "Customised Cakes in Dadar" },
            { href: "/birthday-cakes-dadar", label: "Birthday Cakes in Dadar" },
            { href: "/customised-cakes-mumbai", label: "Customised Cakes Mumbai" },
            { href: "/cake-shop-parel", label: "Cake Shop in Parel" },
            { href: "/best-cake-shop-near-me", label: "Cake Shop Near Me" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
