import "./globals.css";
import SiteNav from "./components/SiteNav";

export const metadata = {
  title: "Jill Ji",
  description: "A calm, editorial personal brand and lifestyle space.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <SiteNav />
        </header>
        <main className="page">{children}</main>
        <footer className="site-footer">
          <p>© 2024 Jill Ji</p>
        </footer>
      </body>
    </html>
  );
}
