import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edwin Selorm Mottey | Software Engineer",
  description: "Software Engineer & Frontend Developer based in Ghana. CS student at UENR, building AI-powered tools and immersive web experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
