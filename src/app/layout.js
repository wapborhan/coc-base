import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import TopLoader from "@/components/shared/TopLoader";
import { Suspense } from "react";
import Loading from "./loading";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "COC Base",
  description: "Clash of Clans Base Layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Header />
        <Toaster position="top-center" reverseOrder={false} />
        {/* <Suspense fallback={<Loading />}>  */}
        {children}
        {/* </Suspense> */}
        <Footer />
      </body>
    </html>
  );
}
