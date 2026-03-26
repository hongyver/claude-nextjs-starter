export function AppRouterDemo() {
  const files = [
    { name: "app/", indent: 0, type: "dir" as const },
    { name: "├── layout.tsx", indent: 1, type: "layout" as const, note: "Root Layout" },
    { name: "├── page.tsx", indent: 1, type: "page" as const, route: "/" },
    { name: "├── loading.tsx", indent: 1, type: "loading" as const, note: "Loading UI" },
    { name: "├── not-found.tsx", indent: 1, type: "notfound" as const, note: "404 Page" },
    { name: "├── globals.css", indent: 1, type: "file" as const },
    { name: "└── features/", indent: 1, type: "dir" as const },
    { name: "    └── page.tsx", indent: 1, type: "page" as const, route: "/features" },
  ]

  const colors: Record<string, string> = {
    dir: "text-blue-400",
    layout: "text-violet-400",
    page: "text-green-400",
    loading: "text-yellow-400",
    notfound: "text-orange-400",
    file: "text-zinc-400",
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-zinc-950 text-sm">
      {/* Terminal header */}
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-red-500/80" />
          <div className="size-3 rounded-full bg-yellow-500/80" />
          <div className="size-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-xs text-zinc-500">File-based Routing</span>
      </div>

      {/* Tree */}
      <div className="p-4 font-mono text-[13px] leading-relaxed">
        {files.map((f, i) => (
          <div key={i} className="flex items-baseline gap-3">
            <span className={colors[f.type]}>{f.name}</span>
            {"route" in f && (
              <span className="text-emerald-300/80">
                → <span className="underline decoration-emerald-500/40">{f.route}</span>
              </span>
            )}
            {"note" in f && (
              <span className="text-zinc-600 italic">({f.note})</span>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-zinc-800 px-4 py-2.5 text-[11px]">
        <span className="flex items-center gap-1.5">
          <span className="inline-block size-2 rounded-full bg-violet-400" />
          <span className="text-zinc-500">Layout</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block size-2 rounded-full bg-green-400" />
          <span className="text-zinc-500">Page (Route)</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block size-2 rounded-full bg-yellow-400" />
          <span className="text-zinc-500">Loading</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block size-2 rounded-full bg-orange-400" />
          <span className="text-zinc-500">Not Found</span>
        </span>
      </div>
    </div>
  )
}
