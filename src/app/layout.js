import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pratistha",
  description: "Pratistha Banquet, Ranchi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <SideNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
