import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-[80px] font-bold text-border leading-none mb-4">404</p>
        <h1 className="text-xl font-semibold mb-2">Page not found</h1>
        <p className="text-[14px] text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="px-5 py-2 bg-foreground text-background text-[13px] font-medium rounded-full hover:bg-foreground/90 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
