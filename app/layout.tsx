import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Advanced Product Reviews",
  description: "Explore our wide range of products with advanced search and filtering",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">Advanced Product Reviews</h1>
            </div>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="bg-white shadow-sm mt-8">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
              © 2024 Advanced Product Reviews. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

