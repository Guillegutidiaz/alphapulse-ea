import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "AlphaPulse EA",
  description: "Rule-based algorithmic trading system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F1A] text-white font-sans">

        {/* NAVBAR */}
        <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            AlphaPulse EA
          </Link>

          <nav className="flex gap-8 text-gray-300">
            <Link href="/trading-course"scode  className="hover:text-white">
              Trading Course
            </Link>
            <Link href="/#pricing" className="hover:text-white">
              Pricing
            </Link>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        {children}

      </body>
    </html>
  );
}
