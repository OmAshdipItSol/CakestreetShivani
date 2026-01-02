"use client"

import { AlertCircle } from "lucide-react"

export default function ImportantNotice() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="bg-secondary rounded-3xl p-8 md:p-12 border border-accent/20">
          <div className="flex gap-4 items-start">
            <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="serif-display text-2xl font-light text-foreground mb-3">Important Notice</h3>
              <p className="text-foreground/80 font-light leading-relaxed">
                We do NOT provide Wedding Cakes, Anniversary Cakes, or Fondant Cakes at the moment. We focus on creating
                beautiful bento cakes, truffle creations, and other specialty items that celebrate the artistry of
                home-baking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
