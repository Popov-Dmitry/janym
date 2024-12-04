import localFont from "next/font/local";
import "./styles/globals.scss";
import Header from "@/app/components/header/Header";

const sfPro = localFont({
  src: "./fonts/sf-pro.otf",
  variable: "--font-sf-pro",
  weight: "400 500 600",
});

const beVietnamPro = localFont({
    src: "./fonts/BeVietnamPro-Regular.ttf",
    variable: "--font-be-vietnam-pro",
    weight: "400",
});

export const metadata = {
  title: "Janym"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sfPro.variable} ${beVietnamPro.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
