import type { Metadata } from "next"
import LocationHeader from "@/components/seo/location-header"
import CTAButtons from "@/components/seo/cta-buttons"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "FAQ - CAKE STREET | Common Questions About Our Cakes",
  description: "Frequently asked questions about CAKE STREET cakes, delivery, customisation, and ordering process.",
  keywords: "FAQ cakes, cake ordering questions, cake delivery FAQ, customised cake questions",
}

export default function FAQ() {
  const faqs = [
    {
      question: "How do I order a customised cake from CAKE STREET?",
      answer:
        "You can order via WhatsApp at +91 9136540141. Share your cake ideas, flavours, colours, and delivery preferences. We'll confirm details and prepare your custom cake.",
    },
    {
      question: "Do you offer same-day cake delivery?",
      answer:
        "Yes! Order before 2 PM for same-day delivery by evening. Midnight delivery also available for special occasions. Delivery available across Dadar, Parel, Sewree, Wadala, Cotton Green, and Kalachowki.",
    },
    {
      question: "What cake flavours are available?",
      answer:
        "We offer chocolate, vanilla, red velvet, carrot, black forest, and more. All available in eggless variants. Custom flavour combinations also possible.",
    },
    {
      question: "Are eggless cakes available?",
      answer:
        "All our cakes can be prepared eggless without any quality compromise. Premium egg substitutes ensure same delicious taste and texture.",
    },
    {
      question: "What's the minimum order size for customised cakes?",
      answer:
        "We create customised cakes for all occasions and sizes. Even small celebrations get full customisation attention. Pricing varies based on size and design complexity.",
    },
    {
      question: "Can I get a wedding cake customised?",
      answer:
        "Yes! We specialise in wedding cakes. Multi-tier designs, custom flavours per tier, intricate sugar work, fresh flowers, personalised toppers – all possible. Discuss your wedding cake ideas via WhatsApp.",
    },
    {
      question: "How much do customised cakes cost?",
      answer:
        "Pricing depends on size, design complexity, and flavour choices. Small customised cakes start from ₹500. Wedding and large cakes priced accordingly. WhatsApp us for exact quotes.",
    },
    {
      question: "Do you deliver outside Dadar?",
      answer:
        "Yes, we deliver across Central Mumbai including Parel, Sewree, Wadala, Cotton Green, and Kalachowki. Same-day delivery available in all these areas.",
    },
    {
      question: "Can I see previous cake designs?",
      answer:
        "Follow us on Instagram or WhatsApp us for design references. We can show you previous work and help you choose or customise a design for your occasion.",
    },
    {
      question: "What's the order-to-delivery timeline?",
      answer:
        "For same-day delivery: Order before 2 PM, get delivery by 6-7 PM. For planned orders: Discuss timeline based on design complexity. Midnight delivery also available.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <LocationHeader heading="Frequently Asked Questions" subheading="Everything you need to know about CAKE STREET" />

      <section className="py-12 md:py-16 max-w-4xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center">How Can We Help?</h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-border"
            >
              <summary className="font-bold text-foreground text-lg flex items-center justify-between">
                {faq.question}
                <span className="ml-4 text-accent">+</span>
              </summary>
              <p className="text-muted-foreground mt-4">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 bg-primary/20 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our friendly team is happy to help! Reach out via WhatsApp or call us anytime.
          </p>
          <CTAButtons />
        </div>
      </section>

      <Footer />
    </main>
  )
}
