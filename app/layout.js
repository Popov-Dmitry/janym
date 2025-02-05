import localFont from "next/font/local";
import "@/styles/globals.scss";
import Header from "@/components/header/Header";
import { CartProvider } from "@/providers/cart-provider";

const sfPro = localFont({
  src: [
    {
      path: "../fonts/SFProDisplay-Regular.eot",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/SFProDisplay-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/SFProDisplay-Regular.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/SFProDisplay-Regular.ttf",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-sf-pro"
});

const beVietnamPro = localFont({
  src: [
    {
      path: "../fonts/BeVietnamPro-Regular.eot",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/BeVietnamPro-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/BeVietnamPro-Regular.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/BeVietnamPro-Regular.ttf",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-be-vietnam-pro"
});

const generalSans = localFont({
  src: [
    {
      path: "../fonts/GeneralSans-Medium.eot",
      weight: "500",
      style: "normal"
    },
    {
      path: "../fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../fonts/GeneralSans-Medium.woff",
      weight: "500",
      style: "normal"
    },
    {
      path: "../fonts/GeneralSans-Medium.ttf",
      weight: "500",
      style: "normal"
    }
  ],
  variable: "--font-general-sans"
});

export const metadata = {
  title: "Janym"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sfPro.variable} ${beVietnamPro.variable} ${generalSans.variable} antialiased`}
      >
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
