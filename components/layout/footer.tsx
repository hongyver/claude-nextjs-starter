import { Container } from "@/components/layout/container"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col items-center gap-4 py-8 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Next.js Starter. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Next.js
            </a>
            <Separator orientation="vertical" className="h-4" />
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              ShadcnUI
            </a>
            <Separator orientation="vertical" className="h-4" />
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              TailwindCSS
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
