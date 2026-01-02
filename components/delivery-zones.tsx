"use client"

import { MapPin } from "lucide-react"

const zones = ["Sewree", "Wadala", "Parel", "Cotton Green", "Dadar"]

export default function DeliveryZones() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="serif-display text-4xl md:text-5xl font-light mb-4 text-foreground">Delivery Zones</h2>
          <p className="text-foreground/70 font-light">We deliver fresh cakes to these areas</p>
        </div>

        {/* Location Chips */}
        <div className="flex flex-wrap justify-center gap-4">
          {zones.map((zone) => (
            <div
              key={zone}
              className="flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              <MapPin className="w-5 h-5 text-accent" />
              <span className="font-light">{zone}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/60 font-light text-sm">
            Can't find your area? Contact us via WhatsApp to discuss custom delivery options.
          </p>
        </div>
      </div>
    </section>
  )
}
