import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  FileCode2,
  FolderTree,
  Paintbrush,
  Component,
  Terminal,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { AppRouterDemo } from "./_demos/app-router-demo";
import { ServerComponentDemo } from "./_demos/server-component-demo";
import { TailwindDemo } from "./_demos/tailwind-demo";
import { ShadcnDemo } from "./_demos/shadcn-demo";
import { TypeScriptDemo } from "./_demos/typescript-demo";
import { ProductionDemo } from "./_demos/production-demo";

export const metadata: Metadata = {
  title: "Features",
  description: "Next.js 스타터킷의 주요 기능과 포함된 기술스택을 확인하세요.",
};

const details = [
  {
    icon: FolderTree,
    title: "App Router",
    category: "Routing",
    description:
      "Next.js 16의 App Router를 사용합니다. 파일 기반 라우팅, 레이아웃 중첩, 로딩/에러 상태가 기본 제공됩니다.",
    highlights: ["Nested Layouts", "Loading States", "Error Boundaries"],
    demo: AppRouterDemo,
  },
  {
    icon: FileCode2,
    title: "Server Components",
    category: "Rendering",
    description:
      "기본적으로 모든 컴포넌트는 Server Component입니다. 클라이언트 JavaScript를 최소화하여 성능을 극대화합니다.",
    highlights: ["Zero Client JS", "Direct DB Access", "Streaming SSR"],
    demo: ServerComponentDemo,
  },
  {
    icon: Paintbrush,
    title: "TailwindCSS 4",
    category: "Styling",
    description:
      "OKLch 색상 체계와 CSS 변수 기반의 테마 시스템으로 일관된 디자인을 빠르게 구현합니다.",
    highlights: ["OKLch Colors", "CSS Variables", "Dark Mode"],
    demo: TailwindDemo,
  },
  {
    icon: Component,
    title: "ShadcnUI Components",
    category: "UI",
    description:
      "Radix UI 기반의 접근성 우수한 컴포넌트 라이브러리. 프로젝트에 직접 복사되어 완전한 커스터마이즈가 가능합니다.",
    highlights: ["Accessible", "Customizable", "Copy & Paste"],
    demo: ShadcnDemo,
  },
  {
    icon: Terminal,
    title: "TypeScript Strict",
    category: "DX",
    description:
      "Strict 모드의 TypeScript로 개발 시 타입 오류를 잡아냅니다. 경로 별칭(@/)으로 깔끔한 import를 지원합니다.",
    highlights: ["Strict Mode", "Path Aliases", "Auto Types"],
    demo: TypeScriptDemo,
  },
  {
    icon: Globe,
    title: "Production Ready",
    category: "Deploy",
    description:
      "Turbopack 기반 빌드, ESLint 설정, 최적화된 폰트 로딩이 포함되어 바로 배포할 수 있습니다.",
    highlights: ["Turbopack", "ESLint", "Optimized Fonts"],
    demo: ProductionDemo,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Section>
        <div className="mb-12">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft />
              Back to Home
            </Link>
          </Button>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Features</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            이 스타터킷에 포함된 기술스택과 패턴을 자세히 살펴보세요.
          </p>
        </div>
      </Section>

      {details.map((item, index) => (
        <Section
          key={item.title}
          className={index % 2 === 1 ? "bg-muted/30" : ""}
        >
          {/* Header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <item.icon className="size-5 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <Badge variant="outline">{item.category}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6 flex flex-wrap gap-2">
            {item.highlights.map((h) => (
              <Badge key={h} variant="secondary">
                {h}
              </Badge>
            ))}
          </div>

          {/* Demo */}
          <item.demo />
        </Section>
      ))}
    </>
  );
}
