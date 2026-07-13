import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="orb left-1/2 top-10 h-96 w-96 -translate-x-1/2 bg-navy-100/70" />
      <div className="container-x relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
        <p className="font-display text-7xl font-extrabold text-gradient sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-navy-900 sm:text-3xl">
          This page couldn&apos;t be found
        </h1>
        <p className="mt-3 max-w-md text-slate-soft">
          The page you&apos;re looking for may have moved. Let&apos;s get you back to something useful.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            <Home className="h-4 w-4" /> Back to home
          </Link>
          <Link href="/products" className="btn btn-ghost">
            <ArrowLeft className="h-4 w-4" /> Browse products
          </Link>
        </div>
      </div>
    </section>
  );
}
