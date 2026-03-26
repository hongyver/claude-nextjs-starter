import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Palette,
  Blocks,
  Moon,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";

const features = [
  {
    icon: Zap,
    title: "Next.js 16",
    badge: "Latest",
    description:
      "App Router, Server Components, Turbopack 기본 탑재. 최신 웹 개발 패턴을 바로 사용하세요.",
  },
  {
    icon: Layers,
    title: "React 19",
    badge: "Stable",
    description:
      "React Compiler 지원, View Transitions, 향상된 Server Components로 더 빠른 앱을 만드세요.",
  },
  {
    icon: Palette,
    title: "TailwindCSS 4",
    badge: "New",
    description:
      "OKLch 색상 체계, CSS 변수 기반 테마, 유틸리티 우선 스타일링으로 빠르게 디자인하세요.",
  },
  {
    icon: Blocks,
    title: "ShadcnUI",
    badge: "Accessible",
    description:
      "Radix UI 기반의 접근성 우수한 컴포넌트. 복사하고 커스터마이즈하세요.",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    badge: "Built-in",
    description:
      "시스템 설정 연동 다크모드. Cookie 기반 SSR 지원으로 깜빡임 없는 전환.",
  },
  {
    icon: ShieldCheck,
    title: "TypeScript",
    badge: "Strict",
    description:
      "Strict 모드의 완전한 타입 안전성. 개발 시 오류를 미리 잡아내세요.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-4">
            Next.js 16 + React 19 + TailwindCSS 4
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Build Modern Web Apps{" "}
            <span className="text-muted-foreground">Faster</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            프로덕션 레디 스타터킷으로 웹 개발을 시작하세요. 최신 기술스택이
            사전 구성되어 있어 바로 빌드에 집중할 수 있습니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/features">
                Get Started
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Everything You Need
          </h2>
          <p className="mt-3 text-muted-foreground">
            모던 웹 개발에 필요한 모든 것이 준비되어 있습니다.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="size-5 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="mt-3">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Build?
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            이 스타터킷을 기반으로 여러분만의 프로젝트를 시작하세요.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/features">
              Explore Features
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
