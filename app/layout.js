import Header from "@/componnets/Header";
import "./globals.css";

import { Lato } from 'next/font/google';
import Footer from "@/componnets/Footer";

// Load the Lato font (you can choose weights and subsets as needed)
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'], // customize weights
  display: 'swap', // optional: improves font swap experience
});

export const metadata = {
  title: "Zonayed Ahmed | Full Stack Developer",
  description: "Hello! I'm Zonayed Ahmed, a passionate software engineer. I develop web applications, mobile applications, and desktop applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[#111a28] antialiased ${lato.className}`}
      >
        <Header />
        <main className="max-w-[1200px] mx-auto">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
