import "./globals.css";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";
import TopBar from "@/components/layout/header/Topbar";
import MainHeader from "@/components/layout/header/MainHeader";
import ScrollToTop from "./scroll-reset";
import { Providers } from "./providers";   // <-- IMPORTANT

export const metadata = {
  title: "Hair Growth Clinic - Expert Hair Treatment & Consultation | Modern Clinic",
  description: "Get professional hair growth treatment, consultation, and personalized care plans. Book online appointments with certified doctors. Hair fall treatment, scalp care, and wellness programs.",
  keywords: "hair growth, hair treatment, hair loss, scalp care, hair clinic, dermatology, trichology, hair consultation, hair fall treatment, hair regrowth",
  authors: [{ name: "Modern Clinic" }],
  creator: "Modern Clinic",
  publisher: "Modern Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'), // Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Hair Growth Clinic - Expert Hair Treatment & Consultation",
    description: "Professional hair growth treatment and consultation services. Book online appointments with certified doctors for hair fall treatment and scalp care.",
    url: "https://your-domain.com",
    siteName: "Modern Clinic",
    images: [
      {
        url: "/og-image.jpg", // Add this image to public folder
        width: 1200,
        height: 630,
        alt: "Hair Growth Clinic - Modern Treatment Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hair Growth Clinic - Expert Hair Treatment & Consultation",
    description: "Professional hair growth treatment and consultation services. Book online appointments with certified doctors.",
    images: ["/og-image.jpg"],
    creator: "@modernclinic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Add actual verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
         <Providers>   {/* <-- REDUX WRAPPER START */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <ScrollToTop />
          <TopBar />
          <MainHeader />
          {/* <Navbar /> */}
          {children}
          <Footer />
        </ThemeProvider>
        </Providers>   {/* <-- REDUX WRAPPER END */}
      </body>
    </html>
  );
}
