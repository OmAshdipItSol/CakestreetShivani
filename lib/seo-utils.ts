export interface SEOMetadata {
  title: string
  description: string
  keywords?: string
  canonical?: string
}

export const generatePageSEO = (
  baseTitle: string,
  baseDescription: string,
  location?: string,
  service?: string,
): SEOMetadata => {
  let title = baseTitle
  let description = baseDescription

  if (location) {
    title = `${title} in ${location} - CAKE STREET`
    description = `${description} in ${location}. Same-day delivery available.`
  }

  return {
    title,
    description,
    keywords: generateKeywords(location, service),
  }
}

export const generateKeywords = (location?: string, service?: string): string => {
  const baseKeywords = ["customised cakes", "designer cakes", "cake shop", "Mumbai"]

  if (service) {
    baseKeywords.push(service, `${service} cakes`)
  }

  if (location) {
    baseKeywords.push(location, `cake shop in ${location}`, `cakes near ${location}`)
  }

  return baseKeywords.join(", ")
}

export const locations = [
  { slug: "dadar", name: "Dadar" },
  { slug: "sewree", name: "Sewree" },
  { slug: "parel", name: "Parel" },
  { slug: "wadala", name: "Wadala" },
  { slug: "cotton-green", name: "Cotton Green" },
  { slug: "kalachowki", name: "Kalachowki" },
]

export const services = [
  { slug: "customised-cakes", name: "Customised Cakes" },
  { slug: "birthday-cakes", name: "Birthday Cakes" },
  { slug: "wedding-cakes", name: "Wedding Cakes" },
  { slug: "anniversary-cakes", name: "Anniversary Cakes" },
  { slug: "designer-cakes", name: "Designer Cakes" },
  { slug: "theme-cakes", name: "Theme Cakes" },
  { slug: "eggless-cakes", name: "Eggless Cakes" },
]
