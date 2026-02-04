import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ConditionalThreads from "@/components/ConditionalThreads";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlackLetter | The Operating System for Modern Law",
  description: "Experience the future of legal workflows with BlackLetter. AI-powered, secure, and synchronised.",
};

import { ThemeProvider } from "@/components/ui/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >


        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConditionalThreads />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

