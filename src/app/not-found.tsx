import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl font-extrabold gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
