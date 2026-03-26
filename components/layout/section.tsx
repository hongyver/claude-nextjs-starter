import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/container"

export function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <Container>{children}</Container>
    </section>
  )
}
