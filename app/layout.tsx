import { Footer } from "@/components/Footer/footer.component";
import { Menu } from "@/components/Menu";
import { cn } from "@/lib/utils";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Única Mineração",
    default: "Única Mineração",
  },
  description: "Site em desenvolvimento",
};

export default function RootLayout({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          poppins.className,
          "bg-white relative overflow-x-hidden pt-20"
        )}
      >
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
