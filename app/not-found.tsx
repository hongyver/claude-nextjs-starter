import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold tracking-tight">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Page not found. The page you are looking for does not exist.
      </p>
      <Button asChild variant="outline" className="mt-6">
        <Link href="/">
          <ArrowLeft />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}
