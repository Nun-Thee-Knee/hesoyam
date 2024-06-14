import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/trpc/react";
import HomePage from "./_components/HomePage";
import Footer from "./_components/Footer/page";

export const metadata = {
  title: "Vigilant Vision - Your 24/7 smart survellance system",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} bg-black text-white`}>
      <body>
        <TRPCReactProvider>{children}
        
        </TRPCReactProvider>
      </body>
    </html>
  );
}
