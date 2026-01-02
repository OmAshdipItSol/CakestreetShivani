import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import BackButton from "./BackButton"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CAKE STREET - Best Customised Cakes in Dadar, Mumbai | Same-Day Delivery",
  description:
    "CAKE STREET offers premium customised & designer cakes in Dadar, Parel, Sewree, Wadala. Same-day delivery available. Order now via WhatsApp for birthday, wedding & theme cakes.",
  keywords: "Cake Street, customised cakes, designer cakes, birthday cakes, wedding cakes, cake shop near me, Dadar, Mumbai",
  openGraph: {
    title: "CAKE STREET - Premium Customised Cakes in Central Mumbai",
    description: "Best customised cake shop in Dadar. Same-day delivery, premium ingredients, custom designs.",
    url: "https://cakestreet.com",
    siteName: "CAKE STREET",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "CAKE STREET",
              description: "Premium customised cake shop in Central Mumbai",
              url: "https://cakestreet.com",
              telephone: "+919136540141",
              areaServed: ["Dadar", "Sewree", "Parel", "Wadala", "Cotton Green", "Kalachowki"],
              serviceType: "Bakery",
              priceRange: "₹500-₹5000",
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <BackButton />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
