interface LocationHeaderProps {
  location: string
  heading: string
  subheading?: string
}

export default function LocationHeader({ location, heading, subheading }: LocationHeaderProps) {
  return (
    <div className="w-full bg-gradient-to-b from-primary/50 to-background py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">{heading}</h1>
        {subheading && <p className="text-lg text-muted-foreground">{subheading}</p>}
      </div>
    </div>
  )
}
