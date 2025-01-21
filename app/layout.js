import localFont from "next/font/local";
import "@/styles/globals.scss";
import Header from "@/components/header/Header";
import { CartProvider } from "@/providers/cart-provider";

const sfPro = localFont({
  src: "../fonts/sf-pro.otf",
  variable: "--font-sf-pro",
  weight: "400 500 600"
});

const beVietnamPro = localFont({
  src: "../fonts/BeVietnamPro-Regular.ttf",
  variable: "--font-be-vietnam-pro",
  weight: "400"
});

const generalSans = localFont({
  src: "../fonts/GeneralSans-Medium.otf",
  variable: "--font-general-sans",
  weight: "500"
});

export const metadata = {
  title: "Janym"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sfPro.variable} ${beVietnamPro.variable} ${generalSans.variable} antialiased`}>
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
