import "./globals.css";
import { Inter } from "next/font/google";
import NavMenu from "./NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Myspace",
  description: "Social Networking clone for learning Next 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
