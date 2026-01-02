import Link from "next/link"

interface InternalLinksProps {
  title: string
  links: Array<{
    href: string
    label: string
  }>
}

export default function InternalLinks({ title, links }: InternalLinksProps) {
  return (
    <div className="bg-muted/30 rounded-lg p-6 md:p-8">
      <h2 className="text-xl font-serif font-bold text-foreground mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-accent hover:text-accent/80 underline transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
