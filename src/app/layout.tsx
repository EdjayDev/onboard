import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stackapply.edjaydev.workers.dev"),
  title: {
    default: "StackApply — Track Your Job Applications, Effortlessly",
    template: "%s | StackApply",
  },
  description:
    "StackApply is a personal job application tracker and analytics dashboard. Log every application, track your pipeline from Applied to Offer, and see real insights into your job search — built by EdjayDev.",
  keywords: [
    "StackApply",
    "job application tracker",
    "job search tracker",
    "application pipeline",
    "job hunt organizer",
    "job tracking app",
    "EdjayDev",
  ],
  authors: [{ name: "EdjayDev", url: "https://stackapply.com" }],
  creator: "EdjayDev",
  publisher: "EdjayDev",
  applicationName: "StackApply",
  openGraph: {
    title: "StackApply — Track Your Job Applications, Effortlessly",
    description:
      "Log every job you apply for, track each stage from Applied to Offer, and see real insights into your job search — all in one place.",
    url: "https://stackapply.com",
    siteName: "StackApply",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StackApply — Job Application Tracker by EdjayDev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StackApply — Track Your Job Applications, Effortlessly",
    description:
      "A personal job application tracker and analytics dashboard, built by EdjayDev.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}