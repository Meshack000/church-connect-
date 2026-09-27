export default function Footer() {
  const links = [
    { label: "Events", href: "#events" },
    { label: "Sermons", href: "#sermons" },
    { label: "Give", href: "#give" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <span className="font-display text-xl italic text-vesper">
            Grace Assembly
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/70">
            123 Liberation Road, Accra
            <br />
            Sundays at 9am &amp; 11am
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/80 transition-colors hover:text-vesper"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-ink/10 px-6 py-6 text-center text-xs text-ink/60">
        &copy; {new Date().getFullYear()} Grace Assembly. All rights reserved.
      </div>
    </footer>
  );
}