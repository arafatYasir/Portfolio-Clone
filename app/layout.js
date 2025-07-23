import "./globals.css";
export const metadata = {
  title: "Zonayed Ahmed | Full Stack Developer",
  description: "Hello! I'm Zonayed Ahmed, a passionate software engineer. I develop web applications, mobile applications, and desktop applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[#111a28] antialiased max-w-[1200px] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
