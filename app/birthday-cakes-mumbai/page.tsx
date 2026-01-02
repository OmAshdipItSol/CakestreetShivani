import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Birthday Cakes in Mumbai - CAKE STREET | Custom Birthday Cake Delivery",
  description:
    "Best custom birthday cakes in Mumbai. Premium designs, same-day delivery available. Order now for your birthday celebration.",
  keywords: "birthday cakes Mumbai, custom birthday cake, birthday cake delivery, themed birthday cakes",
}

export default function BirthdayCakesMumbai() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Mumbai"
        heading="Birthday Cakes in Mumbai – Custom & Theme Designs"
        subheading="Make birthdays special with handcrafted cakes"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Birthday Cakes for Every Age</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Celebrate birthdays with CAKE STREET's premium custom birthday cakes. We create themed cakes for kids, elegant
          designs for adults, and milestone cakes for special celebrations. Every birthday cake is customised to match
          your theme, colour preference, and personality. Available in all flavours with same-day delivery across
          Mumbai.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Birthday Cake Themes We Create</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Character cakes (Disney, superhero, cartoon themes)</li>
          <li>Number and age milestone cakes</li>
          <li>Professional and corporate birthday cakes</li>
          <li>Sports and hobby-themed birthday cakes</li>
          <li>Photo cakes with printed images</li>
          <li>Elegant minimalist birthday cake designs</li>
          <li>Bento cake and aesthetic designs</li>
        </ul>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Customised Birthday Cake Flavours</h3>
        <p className="text-muted-foreground mb-8">
          Choose from chocolate, vanilla, red velvet, carrot, black forest, and more. All available in eggless options.
          We also offer customised fillings and toppings to create your perfect birthday cake.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Birthday Cake Delivery Options</h3>
        <p className="text-muted-foreground mb-8">
          Order before 2 PM for same-day delivery. Evening delivery by 7 PM or midnight delivery available for special
          celebrations. We deliver across Dadar, Parel, Sewree, Wadala, Cotton Green, and Kalachowki.
        </p>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Order Your Birthday Cake Now</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="More Cake Options"
          links={[
            { href: "/customised-cakes-mumbai", label: "Customised Cakes" },
            { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
            { href: "/birthday-cakes-dadar", label: "Birthday Cakes in Dadar" },
            { href: "/anniversary-cakes-mumbai", label: "Anniversary Cakes" },
            { href: "/wedding-cakes-mumbai", label: "Wedding Cakes" },
            { href: "/theme-cakes-mumbai", label: "Theme Cakes" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
