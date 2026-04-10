"use client";

import { usePathname } from "next/navigation";
import TopBar from "@/components/layout/header/Topbar";
import MainHeader from "@/components/layout/header/MainHeader";
import Footer from "@/components/layout/Footer";

export default function RouteChrome({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    return children;
  }

  return (
    <>
      <TopBar />
      <MainHeader />
      {children}
      <Footer />
    </>
  );
}
