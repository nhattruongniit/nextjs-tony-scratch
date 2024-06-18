import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Contact with me",
  publisher: "Tony"
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>this is header</header>
        <main>
          {children}
        </main>

        <footer>this is footer</footer>
      </body>
    </html>
  );
}
