import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  robots: "follow, index",
  title: "DevApps",
  description: "collection of favourite apps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body>
        <main className="w-[100vw] h-[100vh] bg-transparent p-8 font-plex">
          {children}
        </main>
      </body>
    </html>
  );
}
