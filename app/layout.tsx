import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Mona_Sans as FontSans } from "next/font/google"

const inter = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Gatas-Shi - Moda Feminina",
  description: "Descubra peças únicas que realçam sua feminilidade com sofisticação e estilo moderno. Calças, blazers, shorts e muito mais.",
  generator: "",
  openGraph: {
    title: "Gatas-Shi - Moda Feminina Elegante",
    description: "Descubra peças únicas que realçam sua feminilidade com sofisticação e estilo moderno.",
    url: "https://gatasshi.netlify.app/",
    siteName: "Gatas-Shi",
    images: [
      {
        url: "/logogataedit.png",
        width: 1200,
        height: 630,
        alt: "Gatas-Shi - Moda Feminina",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CartProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  )
}
