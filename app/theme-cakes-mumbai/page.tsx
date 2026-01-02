import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Theme Cakes in Mumbai - CAKE STREET | Customised Theme Cake Designs",
  description:
    "Theme cakes in Mumbai for all occasions. CAKE STREET creates custom theme-based cakes. Same-day delivery available.",
  keywords: "theme cakes Mumbai, themed cakes, character cakes, customised theme cake designs",
}

export default function ThemeCakesMumbai() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Mumbai"
        heading="Theme Cakes in Mumbai – Custom Themed Designs"
        subheading="Character and themed cakes for every celebration"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Custom Themed Cake Designs</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          CAKE STREET creates incredible theme cakes that bring imagination to life. From beloved characters to
          personalised themes, each cake is designed to match your celebration's unique character. Perfect for kids'
          birthdays, corporate events, and themed parties. All theme cakes crafted with premium ingredients and
          available with same-day delivery across Mumbai.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Theme Cake Collections</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Disney and fairy tale character cakes</li>
          <li>Superhero themed cakes (Batman, Superman, Marvel)</li>
          <li>Sports themed cakes (cricket, football, basketball)</li>
          <li>Cartoon and animated character cakes</li>
          <li>Video game and gaming theme cakes</li>
          <li>Movie and pop culture themed designs</li>
          <li>Corporate and office party theme cakes</li>
          <li>Hobby-based themed cakes (books, music, art)</li>
        </ul>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Perfect for Kids & Family Celebrations</h3>
        <p className="text-muted-foreground mb-8">
          Theme cakes are especially popular for children's birthdays and family celebrations. We bring favourite
          characters and themes to life in delicious cake form. All cakes available in kid-friendly flavours and eggless
          options.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Same-Day Theme Cake Delivery</h3>
        <p className="text-muted-foreground mb-8">
          Order your theme cake before 2 PM for same-day delivery. We deliver across all Central Mumbai locations
          including Dadar, Parel, Sewree, Wadala, Cotton Green, and Kalachowki.
        </p>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Order Your Theme Cake</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="More Cake Options"
          links={[
            { href: "/customised-cakes-mumbai", label: "Customised Cakes" },
            { href: "/birthday-cakes-mumbai", label: "Birthday Cakes" },
            { href: "/designer-cakes-mumbai", label: "Designer Cakes" },
            { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
            { href: "/theme-cakes-dadar", label: "Theme Cakes in Dadar" },
            { href: "/eggless-cakes-mumbai", label: "Eggless Cakes" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
