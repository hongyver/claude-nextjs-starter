import { Badge } from "@/components/ui/badge"
import { ClientCounter } from "./_client-counter"

export function ServerComponentDemo() {
  const now = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })
  const nodeVersion = process.version

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {/* Server Component Panel */}
      <div className="overflow-hidden rounded-xl border border-green-500/20 bg-card">
        <div className="border-b border-green-500/20 bg-green-500/5 px-4 py-2.5">
          <Badge className="bg-green-600 text-white">Server Component</Badge>
        </div>
        <div className="space-y-3 p-4">
          <div>
            <p className="text-xs text-muted-foreground">서버 렌더링 시각</p>
            <p className="font-mono text-sm font-medium">{now}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Node.js 버전</p>
            <p className="font-mono text-sm font-medium">{nodeVersion}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">클라이언트 JS</p>
            <p className="font-mono text-sm font-bold text-green-600">0 KB</p>
          </div>
          <p className="text-xs text-muted-foreground italic">
            이 데이터는 서버에서 렌더링됩니다. 새로고침하면 시각이 변경됩니다.
          </p>
        </div>
      </div>

      {/* Client Component Panel */}
      <div className="overflow-hidden rounded-xl border border-blue-500/20 bg-card">
        <div className="border-b border-blue-500/20 bg-blue-500/5 px-4 py-2.5">
          <Badge className="bg-blue-600 text-white">Client Component</Badge>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center p-6">
          <ClientCounter />
        </div>
      </div>
    </div>
  )
}
