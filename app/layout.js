import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Noise } from "@/components/shared/Decorations";
// Page-switch transitions disabled per request — kept for easy re-enable:
// import PageTransition from "@/components/PageTransition";
// import StairTransition from "@/components/StairTransition";

/* Font pairing (loaded via next/font for zero layout shift + self-hosting):
   - Inter           → body text (high readability for long paragraphs)
   - Space Grotesk   → headings (modern, geometric, distinctive)
   - JetBrains Mono  → eyebrows, tags, numbers (developer accent) */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Mitz Mia Castillo — Web & WordPress Developer",
  description:
    "Portfolio of Mitz Mia Castillo, a Web Developer and WordPress Full-Stack Developer based in Davao City, Philippines. Specializing in custom WordPress development, WooCommerce solutions, and website optimization.",
  keywords: [
    "Mitz Mia Castillo",
    "WordPress Developer",
    "Web Developer",
    "WooCommerce Developer",
    "Davao City",
    "Freelance Developer",
  ],
  authors: [{ name: "Mitz Mia Castillo" }],
  openGraph: {
    title: "Mitz Mia Castillo — Web & WordPress Developer",
    description:
      "Web Developer & WordPress Full-Stack Developer building custom, high-performance websites and WooCommerce stores.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      >
        {/* Skip link for keyboard / screen-reader users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-primary"
        >
          Skip to content
        </a>

        {/* Subtle film-grain texture over the whole page */}
        <Noise />

        <Header />
        {/* <StairTransition /> */}

        {/* Transition removed: render children directly. To re-enable the
            page-switch animation, wrap with <PageTransition>{children}</PageTransition>
            and uncomment <StairTransition /> above + the imports. */}
        <main id="main">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
