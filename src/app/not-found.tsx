import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 text-center">
      <div className="space-y-2">
        <h1 className="text-8xl font-bold tracking-tighter text-zinc-800/80">
          404
        </h1>
        <p className="text-xl font-medium text-zinc-400">Page not found</p>
      </div>
      <p className="max-w-md text-sm leading-6 text-zinc-500">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="group flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-orange-400 hover:bg-zinc-800 hover:text-orange-300"
      >
        <MoveLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
        Back to Home
      </Link>
    </div>
  );
}
