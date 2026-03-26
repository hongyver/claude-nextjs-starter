"use client"

const colorTokens = [
  { name: "primary", var: "--primary" },
  { name: "secondary", var: "--secondary" },
  { name: "accent", var: "--accent" },
  { name: "muted", var: "--muted" },
  { name: "destructive", var: "--destructive" },
  { name: "background", var: "--background" },
  { name: "foreground", var: "--foreground" },
  { name: "card", var: "--card" },
  { name: "border", var: "--border" },
]

export function TailwindDemo() {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      {/* Color Palette */}
      <div className="border-b p-4">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          OKLch Color Palette
        </p>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
          {colorTokens.map((token) => (
            <div key={token.name} className="flex flex-col items-center gap-1.5">
              <div
                className="size-10 rounded-lg ring-1 ring-border"
                style={{ backgroundColor: `var(${token.var})` }}
              />
              <span className="text-[10px] text-muted-foreground">{token.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Utility Classes */}
      <div className="p-4">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Utility Classes
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {/* Responsive */}
          <div className="rounded-lg border p-3 text-center">
            <div className="mb-2 rounded-md bg-blue-500 py-2 text-xs font-medium text-white sm:bg-green-500 md:bg-violet-500 lg:bg-orange-500">
              Responsive
            </div>
            <p className="text-[10px] text-muted-foreground">
              sm:green md:violet lg:orange
            </p>
          </div>

          {/* Hover */}
          <div className="rounded-lg border p-3 text-center">
            <div className="mb-2 cursor-pointer rounded-md bg-secondary py-2 text-xs font-medium transition-colors hover:bg-primary hover:text-primary-foreground">
              Hover me
            </div>
            <p className="text-[10px] text-muted-foreground">
              hover:bg-primary
            </p>
          </div>

          {/* Transition */}
          <div className="rounded-lg border p-3 text-center">
            <div className="mb-2 cursor-pointer rounded-md bg-secondary py-2 text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Transition
            </div>
            <p className="text-[10px] text-muted-foreground">
              hover:scale-105 hover:shadow-lg
            </p>
          </div>

          {/* Dark Mode */}
          <div className="rounded-lg border p-3 text-center">
            <div className="mb-2 rounded-md bg-zinc-900 py-2 text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
              다크모드 자동 지원
            </div>
            <p className="text-[10px] text-muted-foreground">
              dark:bg-zinc-100
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
