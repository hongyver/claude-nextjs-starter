import Link from "next/link"
import { Code2 } from "lucide-react"
import { Container } from "@/components/layout/container"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/layout/mobile-nav"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Code2 className="size-5" />
            <span>Next.js Starter</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  )
}
