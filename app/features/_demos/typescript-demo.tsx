export function TypeScriptDemo() {
  return (
    <div className="overflow-hidden rounded-xl border bg-zinc-950 text-[13px]">
      {/* Strict Type Safety */}
      <div className="border-b border-zinc-800">
        <div className="px-4 py-2 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
          Strict Type Safety
        </div>
        <pre className="overflow-x-auto px-4 pb-4 font-mono leading-relaxed">
          <code>
            <Line c="comment">{"// Strict 모드: 타입 오류를 컴파일 시 감지"}</Line>
            <Line>
              <K>interface</K> <T>ButtonProps</T> {"{"}
            </Line>
            <Line>
              {"  "}variant: <S>{'"default"'}</S> | <S>{'"outline"'}</S> | <S>{'"ghost"'}</S>
            </Line>
            <Line>
              {"  "}size: <S>{'"sm"'}</S> | <S>{'"md"'}</S> | <S>{'"lg"'}</S>
            </Line>
            <Line>
              {"  "}disabled?: <T>boolean</T>
            </Line>
            <Line>{"}"}</Line>
            <Line />
            <Line c="green">{"// ✅ 타입 안전"}</Line>
            <Line>
              {"<"}<J>Button</J> variant=<S>{'"outline"'}</S> size=<S>{'"sm"'}</S> {"/>"}
            </Line>
            <Line />
            <Line c="red">{"// ❌ 컴파일 에러"}</Line>
            <Line c="red-dim">
              {"<"}<J>Button</J> variant=<S>{'"invalid"'}</S> size={"{"}123{"}"} {"/>"}
            </Line>
          </code>
        </pre>
      </div>

      {/* Path Aliases */}
      <div className="border-b border-zinc-800">
        <div className="px-4 py-2 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
          Path Aliases
        </div>
        <pre className="overflow-x-auto px-4 pb-4 font-mono leading-relaxed">
          <code>
            <Line c="red">{"// ❌ 상대 경로 (복잡)"}</Line>
            <Line c="red-dim">
              <K>import</K> {"{ Button }"} <K>from</K> <S>{'"../../../components/ui/button"'}</S>
            </Line>
            <Line />
            <Line c="green">{"// ✅ 경로 별칭 (@/)"}</Line>
            <Line>
              <K>import</K> {"{ Button }"} <K>from</K> <S>{'"@/components/ui/button"'}</S>
            </Line>
          </code>
        </pre>
      </div>

      {/* Auto Types */}
      <div>
        <div className="px-4 py-2 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
          Next.js 16 Async Params
        </div>
        <pre className="overflow-x-auto px-4 pb-4 font-mono leading-relaxed">
          <code>
            <Line c="comment">{"// Next.js 16: params는 Promise"}</Line>
            <Line>
              <K>type</K> <T>PageProps</T> = {"{"}
            </Line>
            <Line>
              {"  "}params: <T>Promise</T>{"<{ slug: "}<T>string</T>{" }>"}
            </Line>
            <Line>
              {"  "}searchParams: <T>Promise</T>{"<{ q?: "}<T>string</T>{" }>"}
            </Line>
            <Line>{"}"}</Line>
            <Line />
            <Line>
              <K>export default</K> <K>async function</K> <T>Page</T>{"({ params }: "}<T>PageProps</T>{") {"}
            </Line>
            <Line>
              {"  "}<K>const</K> {"{ slug }"} = <K>await</K> params
            </Line>
            <Line>
              {"  "}<K>return</K> {"<"}<J>div</J>{">{slug}</"}<J>div</J>{">"}
            </Line>
            <Line>{"}"}</Line>
          </code>
        </pre>
      </div>
    </div>
  )
}

function Line({ children, c }: { children?: React.ReactNode; c?: string }) {
  const colorMap: Record<string, string> = {
    comment: "text-zinc-500",
    green: "text-green-400",
    red: "text-red-400",
    "red-dim": "text-red-400/60",
  }
  return (
    <div className={`min-h-[1.4em] ${c ? colorMap[c] || "" : "text-zinc-300"}`}>
      {children}
    </div>
  )
}

function K({ children }: { children: React.ReactNode }) {
  return <span className="text-purple-400">{children}</span>
}

function T({ children }: { children: React.ReactNode }) {
  return <span className="text-yellow-300">{children}</span>
}

function S({ children }: { children: React.ReactNode }) {
  return <span className="text-green-400">{children}</span>
}

function J({ children }: { children: React.ReactNode }) {
  return <span className="text-blue-400">{children}</span>
}
