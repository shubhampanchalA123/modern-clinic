import "./globals.css";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";
import TopBar from "@/components/layout/header/Topbar";
import MainHeader from "@/components/layout/header/MainHeader";

export const metadata = { title: "Modern Clinic", description: "Rediscover Your Confidence" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <TopBar />
          <MainHeader />
          {/* <Navbar /> */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
