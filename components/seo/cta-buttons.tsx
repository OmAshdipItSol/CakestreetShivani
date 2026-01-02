"use client"

import { Phone, MessageCircle, ShoppingCart } from "lucide-react"

export default function CTAButtons() {
  const phoneNumber = "9136540141"
  const whatsappMessage = "Hi! I would like to place an order."

  const handleCall = () => {
    window.location.href = `tel:+91${phoneNumber}`
  }

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <button
        onClick={handleCall}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </button>
      <button
        onClick={handleWhatsApp}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp Order
      </button>
      <button
        onClick={handleWhatsApp}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-foreground rounded-lg font-medium transition-colors"
      >
        <ShoppingCart className="w-5 h-5" />
        Order Custom Cake
      </button>
    </div>
  )
}
