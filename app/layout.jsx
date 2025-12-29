import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import SiteNav from "./components/SiteNav";

export const metadata = {
  title: "Jill Ji",
  description: "A calm, editorial personal brand and lifestyle space.",
};

export default function RootLayout({ children }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <SiteNav />
        </header>
        <main className="page">{children}</main>
        <footer className="site-footer">
          <p>© {currentYear} Jill Ji</p>
          <a
            className="footer-link"
            href="https://www.instagram.com/_jill.ji_/"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow Jill Ji on Instagram"
          >
            Instagram
          </a>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
