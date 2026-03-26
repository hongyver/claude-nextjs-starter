"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Heart } from "lucide-react"

const buttonVariants = ["default", "outline", "secondary", "ghost", "destructive", "link"] as const
const badgeVariants = ["default", "secondary", "outline", "destructive", "ghost"] as const

export function ShadcnDemo() {
  const [likes, setLikes] = useState(0)

  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      {/* Button Variants */}
      <div className="border-b p-4">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Button Variants
        </p>
        <div className="flex flex-wrap gap-2">
          {buttonVariants.map((v) => (
            <Button key={v} variant={v} size="sm">
              {v}
            </Button>
          ))}
        </div>
      </div>

      {/* Button Sizes */}
      <div className="border-b p-4">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Button Sizes
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {(["xs", "sm", "default", "lg"] as const).map((s) => (
            <Button key={s} size={s} variant="outline">
              {s}
            </Button>
          ))}
        </div>
      </div>

      {/* Badge Variants */}
      <div className="border-b p-4">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Badge Variants
        </p>
        <div className="flex flex-wrap gap-2">
          {badgeVariants.map((v) => (
            <Badge key={v} variant={v}>
              {v}
            </Badge>
          ))}
        </div>
      </div>

      {/* Card + Interactive */}
      <div className="p-4">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Interactive Card
        </p>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>예제 카드</CardTitle>
            <CardDescription>ShadcnUI 카드 컴포넌트 데모</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Radix UI 기반의 접근성 우수한 컴포넌트입니다. 키보드 내비게이션과
              스크린 리더를 완벽하게 지원합니다.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLikes((l) => l + 1)}
            >
              <Heart
                className={`size-4 ${likes > 0 ? "fill-red-500 text-red-500" : ""}`}
              />
              좋아요 {likes > 0 && likes}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
