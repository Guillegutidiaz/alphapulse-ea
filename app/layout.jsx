import "./globals.css";

export const metadata = {
  title: "AlphaPulse EA",
  description: "Rule-based expert advisor for consistent trading",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
