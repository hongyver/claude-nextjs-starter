"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

export function ClientCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCount((c) => c - 1)}
          aria-label="Decrease"
        >
          <Minus className="size-4" />
        </Button>
        <span className="w-12 text-center font-mono text-2xl font-bold tabular-nums">
          {count}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCount((c) => c + 1)}
          aria-label="Increase"
        >
          <Plus className="size-4" />
        </Button>
      </div>
      <p className="text-center text-xs text-muted-foreground">
        이 컴포넌트는 클라이언트에서 인터랙티브합니다.
      </p>
    </div>
  )
}
