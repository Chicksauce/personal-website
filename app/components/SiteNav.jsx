"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/notes", label: "Notes" },
  { href: "/about", label: "About" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      <Link className="brand" href="/">
        Jill Ji
      </Link>
      <div className="nav-links">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              className={isActive ? "active" : undefined}
              aria-current={isActive ? "page" : undefined}
              href={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
