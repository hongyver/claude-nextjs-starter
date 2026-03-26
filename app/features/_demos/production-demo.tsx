import { Badge } from "@/components/ui/badge"

export function ProductionDemo() {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      {/* Turbopack */}
      <div className="border-b p-4">
        <div className="mb-3 flex items-center gap-2">
          <Badge className="bg-emerald-600 text-white">Turbopack</Badge>
          <span className="text-xs text-muted-foreground">
            Next.js 16 기본 번들러
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="w-20 shrink-0 text-right text-xs text-muted-foreground">
              Webpack
            </span>
            <div className="h-3 flex-1 rounded-full bg-muted">
              <div className="h-3 w-[20%] rounded-full bg-zinc-400" />
            </div>
            <span className="text-xs text-muted-foreground">1x</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-20 shrink-0 text-right text-xs font-medium">
              Turbopack
            </span>
            <div className="h-3 flex-1 rounded-full bg-muted">
              <div className="h-3 w-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" />
            </div>
            <span className="text-xs font-medium text-emerald-600">~5x</span>
          </div>
        </div>
      </div>

      {/* ESLint */}
      <div className="border-b p-4">
        <div className="mb-3 flex items-center gap-2">
          <Badge variant="outline">ESLint</Badge>
          <span className="text-xs text-muted-foreground">사전 구성된 규칙</span>
        </div>
        <div className="space-y-1.5">
          {[
            "Core Web Vitals 규칙",
            "TypeScript 엄격 검사",
            "접근성 (a11y) 검사",
          ].map((rule) => (
            <div key={rule} className="flex items-center gap-2 text-sm">
              <span className="text-emerald-500">✓</span>
              <span>{rule}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Font Optimization */}
      <div className="border-b p-4">
        <div className="mb-3 flex items-center gap-2">
          <Badge variant="outline">Font</Badge>
          <span className="text-xs text-muted-foreground">
            next/font · Zero Layout Shift
          </span>
        </div>
        <div className="space-y-2 rounded-lg bg-muted/50 p-3">
          <div>
            <p className="text-[10px] text-muted-foreground">Geist Sans</p>
            <p className="font-sans text-sm">
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground">Geist Mono</p>
            <p className="font-mono text-sm">
              {"const greeting = \"Hello, World!\""}
            </p>
          </div>
        </div>
      </div>

      {/* Bundle */}
      <div className="p-4">
        <div className="mb-3 flex items-center gap-2">
          <Badge variant="outline">Bundle</Badge>
          <span className="text-xs text-muted-foreground">
            Server Components 기본
          </span>
        </div>
        <div className="flex gap-2">
          <div className="flex-[3] rounded-lg bg-emerald-500/10 p-3 text-center">
            <p className="text-lg font-bold text-emerald-600">~90%</p>
            <p className="text-[10px] text-muted-foreground">Server (0KB JS)</p>
          </div>
          <div className="flex-1 rounded-lg bg-blue-500/10 p-3 text-center">
            <p className="text-lg font-bold text-blue-600">~10%</p>
            <p className="text-[10px] text-muted-foreground">Client</p>
          </div>
        </div>
      </div>
    </div>
  )
}
