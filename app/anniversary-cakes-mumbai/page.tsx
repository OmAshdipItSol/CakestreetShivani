import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Anniversary Cakes in Mumbai - CAKE STREET | Custom Anniversary Cake Delivery",
  description:
    "Premium anniversary cakes in Mumbai. Custom designs for all anniversary milestones. Same-day delivery available.",
  keywords: "anniversary cakes Mumbai, custom anniversary cake, anniversary cake delivery, romantic cakes",
}

export default function AnniversaryCakesMumbai() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Mumbai"
        heading="Anniversary Cakes in Mumbai – Romantic Custom Designs"
        subheading="Celebrate love with beautiful anniversary cakes"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Romantic Anniversary Cakes</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Celebrate anniversaries with CAKE STREET's romantic and elegant anniversary cakes. Perfect for wedding
          anniversaries, relationship milestones, and special couples. Every cake is customised to express your love and
          celebration. Available with same-day delivery across Mumbai.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Anniversary Cake Designs</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Romantic tiered anniversary cakes</li>
          <li>Number cakes for milestone anniversaries (25th, 50th, etc.)</li>
          <li>Elegant floral designs with fresh flowers</li>
          <li>Customised couple names and dates</li>
          <li>Heart-shaped and romantic designs</li>
          <li>Luxury chocolate and red velvet options</li>
          <li>Photo anniversary cakes</li>
        </ul>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Perfect for All Occasions</h3>
        <p className="text-muted-foreground mb-8">
          Whether it's your 1st anniversary or 50th, we create cakes that celebrate your unique journey together.
          Eggless options available for all dietary preferences.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Same-Day Delivery Across Mumbai</h3>
        <p className="text-muted-foreground mb-8">
          Order before 2 PM for same-day delivery. We deliver across Dadar, Parel, Sewree, Wadala, and all Central
          Mumbai locations. Midnight delivery available for surprise celebrations.
        </p>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Order Your Anniversary Cake</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="More Celebrations"
          links={[
            { href: "/customised-cakes-mumbai", label: "Customised Cakes" },
            { href: "/birthday-cakes-mumbai", label: "Birthday Cakes" },
            { href: "/designer-cakes-mumbai", label: "Designer Cakes" },
            { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
            { href: "/anniversary-cakes-dadar", label: "Anniversary Cakes in Dadar" },
            { href: "/wedding-cakes-mumbai", label: "Wedding Cakes" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
