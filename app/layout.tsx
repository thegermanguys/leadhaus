import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leadhaus — CRM Built for Educational Consultancies",
  description:
    "Manage students, track applications, collect payments, and grow your consultancy — all from one powerful platform built specifically for education professionals. By TGG.",
  keywords: [
    "CRM",
    "educational consultancy",
    "student management",
    "application tracking",
    "Leadhaus",
    "TGG",
  ],
  authors: [{ name: "The German Guy (TGG)", url: "https://thegermanguy.org" }],
  openGraph: {
    title: "Leadhaus — CRM Built for Educational Consultancies",
    description:
      "The all-in-one CRM platform built exclusively for educational consultancies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
