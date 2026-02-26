import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Version2",
  description: "Premium Modern Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black scroll-smooth">
        <Navbar />
        {children}
      </body>
    </html>
  );
}