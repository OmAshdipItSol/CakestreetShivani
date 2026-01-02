import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import InternalLinks from "@/components/seo/internal-links"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Birthday Cakes in Dadar - CAKE STREET | Custom Cake Delivery",
  description:
    "Best birthday cakes in Dadar. Custom designs, same-day delivery. Order now for your special celebration.",
  keywords: "birthday cakes Dadar, custom birthday cake Dadar, birthday cake delivery Dadar",
}

export default function BirthdayCakesDadar() {
  return (
    <main className="min-h-screen bg-background">
      <LocationHeader
        location="Dadar"
        heading="Birthday Cakes in Dadar – Custom Theme & Design Options"
        subheading="Make your birthday special with CAKE STREET"
      />

      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-6">Birthday Cakes for Every Age in Dadar</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Celebrate birthdays in Dadar with CAKE STREET's custom birthday cakes. From kids' themed cakes to elegant
          adult designs, we create birthday cakes that bring joy to your celebration. Every birthday cake is fully
          customised to match your theme, colours, and preferences. Same-day delivery available across Dadar.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Birthday Cake Options in Dadar</h3>
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
          <li>Character and themed birthday cakes for kids</li>
          <li>Number cakes for milestone birthdays</li>
          <li>Photo birthday cakes with personalized images</li>
          <li>Elegant and minimalist birthday designs</li>
          <li>Multi-tier and luxury birthday cakes</li>
          <li>Surprise and midnight delivery options</li>
          <li>All flavours and eggless options available</li>
        </ul>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Quick Dadar Cake Ordering</h3>
        <p className="text-muted-foreground mb-8">
          Order your birthday cake via WhatsApp for instant confirmation. Discuss your cake ideas, select flavours and
          designs. We'll create exactly what you envision for the birthday celebration.
        </p>

        <h3 className="text-xl font-serif font-bold mb-4 mt-8">Same-Day Birthday Cake Delivery</h3>
        <p className="text-muted-foreground mb-8">
          Order before 2 PM for same-day delivery in Dadar. Evening delivery by 6-7 PM or midnight delivery available
          for surprise celebrations. Fresh, beautiful, delivered on time.
        </p>

        <div className="my-12">
          <h3 className="text-xl font-serif font-bold mb-6">Order Your Birthday Cake Now</h3>
          <CTAButtons />
        </div>

        <InternalLinks
          title="More Cake Services"
          links={[
            { href: "/customised-cakes-dadar", label: "Customised Cakes in Dadar" },
            { href: "/designer-cakes-dadar", label: "Designer Cakes in Dadar" },
            { href: "/theme-cakes-dadar", label: "Theme Cakes in Dadar" },
            { href: "/cake-shop-dadar", label: "Cake Shop in Dadar" },
            { href: "/birthday-cakes-mumbai", label: "Birthday Cakes Mumbai" },
            { href: "/cake-shop-parel", label: "Cake Shop in Parel" },
          ]}
        />
      </section>

      <Footer />
    </main>
  )
}
