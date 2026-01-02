import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Designer Cakes in Mumbai - CAKE STREET | Premium Aesthetic Cakes",
  description:
    "Premium designer cakes in Mumbai. CAKE STREET creates stunning aesthetic cakes for all occasions. Same-day delivery available.",
  keywords: "designer cakes Mumbai, aesthetic cakes, premium cake designs, Instagram-worthy cakes",
}

export default function DesignerCakesMumbai() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Mumbai"
        heading="Designer Cakes in Mumbai – Premium Aesthetic Collections"
        subheading="Instagram-worthy handcrafted designer cakes"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Stunning Designer Cake Collections</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          CAKE STREET specialises in creating premium designer cakes that are as beautiful as they are delicious. Each
          cake is a work of art, crafted with meticulous attention to detail. From minimalist elegance to bold artistic
          designs, our designer cakes make perfect Instagram-worthy creations for your celebration. Available across all
          Mumbai locations with same-day delivery.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Designer Cake Styles</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Minimalist geometric designer cakes</li>
          <li>Bento-style aesthetic cakes</li>
          <li>Hand-painted artistic designs</li>
          <li>Floral and botanical decorations</li>
          <li>Modern gradient and ombre effects</li>
          <li>Abstract and contemporary designs</li>
          <li>Luxury marble and metallic finishes</li>
        </ul>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Custom & Premium Ingredients</h3>
        <p className="text-muted-foreground mb-8">
          Every designer cake is made with premium ingredients, available in eggless options. Our bakers use food-safe
          colours and premium decorations to create stunning visual masterpieces.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Same-Day Delivery Available</h3>
        <p className="text-muted-foreground mb-8">
          Order your designer cake before 2 PM for same-day delivery. We deliver across Dadar, Parel, Sewree, Wadala,
          Cotton Green, and Kalachowki. Evening and midnight delivery options available.
        </p>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Order Your Designer Cake Today</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="More Collections"
          links={[
            { href: "/customised-cakes-mumbai", label: "Customised Cakes" },
            { href: "/theme-cakes-mumbai", label: "Theme Cakes" },
            { href: "/birthday-cakes-mumbai", label: "Birthday Cakes" },
            { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
            { href: "/designer-cakes-dadar", label: "Designer Cakes in Dadar" },
            { href: "/eggless-cakes-mumbai", label: "Eggless Cakes" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
