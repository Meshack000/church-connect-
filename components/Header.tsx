import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-ink/15">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center px-6">
        <Link
          href="/"
          className="font-display text-2xl font-semibold text-vesper"
          aria-label="Church Connect home"
        >
          Church Connect
        </Link>
      </div>
    </header>
  );
}