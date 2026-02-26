import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-surface/50 to-transparent">
      <div className="text-center px-6">
        <p className="text-[100px] font-bold bg-gradient-to-b from-border to-border-light bg-clip-text text-transparent leading-none mb-4">404</p>
        <h1 className="text-2xl font-bold mb-3">Page not found</h1>
        <p className="text-[15px] text-muted mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-8 py-3 bg-foreground text-white text-[14px] font-semibold rounded-full hover:bg-foreground/90 transition-all hover:shadow-lg hover:shadow-foreground/10 hover:-translate-y-0.5"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
