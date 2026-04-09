import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { FrequencyBanner } from "@/components/frequency-banner"
import { FooterNav } from "@/components/footer-nav"

export const metadata: Metadata = {
  title: "MeshWest - Western Canada's MeshCore Community",
  description:
    "Western Canada's decentralized LoRa mesh network. Reliable, encrypted, off-grid communications across British Columbia and Alberta. No cell, internet, or power needed.",
  keywords: [
    "mesh networking",
    "LoRa",
    "decentralized communication",
    "off-grid messaging",
    "encrypted communications",
    "MeshWest",
    "MeshCore",
    "Western Canada",
    "British Columbia",
    "Alberta",
    "emergency communications",
    "peer-to-peer network",
  ],
  authors: [{ name: "MeshWest Community" }],
  creator: "MeshWest",
  publisher: "MeshWest",
  metadataBase: new URL("https://westmesh.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://westmesh.org",
    title: "MeshWest - Western Canada's MeshCore Community",
    description:
      "Western Canada's decentralized LoRa mesh network. Reliable, encrypted, off-grid communications across British Columbia and Alberta.",
    siteName: "MeshWest",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeshWest - Western Canada's MeshCore Community",
    description:
      "Western Canada's decentralized LoRa mesh network. Reliable, encrypted, off-grid communications across British Columbia and Alberta.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-mono antialiased">
        <FrequencyBanner />
        <div className="pt-12 sm:pt-14 pb-16">{children}</div>
        <FooterNav />
      </body>
    </html>
  )
}
