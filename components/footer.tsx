"use client"

import { Instagram, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="serif-display text-3xl font-light mb-2">CakeStreet</h3>
            <p className="text-background/70 font-light">Handcrafted cakes for every celebration and moment</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-light text-lg mb-4">Contact</h4>
            <a
              href="tel:9136540141"
              className="flex items-center gap-2 text-background/80 hover:text-background transition-colors font-light"
            >
              <Phone className="w-5 h-5" />
              9136540141
            </a>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-light text-lg mb-4">Follow Us</h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/80 hover:text-background transition-all group"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110" />
              <span className="font-light">@cakestreet2023</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/20 my-8" />

        {/* Copyright */}
        <div className="text-center text-background/60 font-light text-sm">
          <p>&copy; 2026 Artisan Cakes. All rights reserved. Handcrafted with passion.</p>
        </div>
      </div>
    </footer>
  )
}
