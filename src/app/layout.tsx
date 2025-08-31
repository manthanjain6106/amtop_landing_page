import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd, { OrganizationSchema, WebSiteSchema } from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "amTop - Intelligent AI Agents for Workflow Automation",
  description: "Transform your business with intelligent AI agents that automate workflows, optimize processes, and drive growth 24/7.",
  keywords: ["AI automation", "workflow automation", "AI agents", "business automation", "process optimization"],
  authors: [{ name: "amTop Team" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
  openGraph: {
    title: "amTop - Intelligent AI Agents for Workflow Automation",
    description: "Transform your business with intelligent AI agents that automate workflows, optimize processes, and drive growth 24/7.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "amTop - Intelligent AI Agents for Workflow Automation",
    description: "Transform your business with intelligent AI agents that automate workflows, optimize processes, and drive growth 24/7.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="amTop" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd type="organization" data={OrganizationSchema} />
        <JsonLd type="website" data={WebSiteSchema} />
        {children}
      </body>
    </html>
  );
}
