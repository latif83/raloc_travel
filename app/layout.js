import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "RALOC TRAVELS | Work, Study, and Tour Opportunities",
  description: "Discover global opportunities to work, study, and tour with RALOC Travels. Your adventure starts here!",
  openGraph: {
    title: "RALOC TRAVELS | Work, Study, and Tour",
    description:
      "Find exciting travel opportunities with RALOC Travels. Work abroad, study in top universities, or tour breathtaking destinations.",
    url: "https://raloctravels.com",
    siteName: "RALOC Travels",
    images: [
      {
        url: "https://raloctravels.com/logo.png", // Logo or preferred Open Graph image
        width: 1200,
        height: 630,
        alt: "RALOC Travels - Work, Study, Tour",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RALOC TRAVELS | Work, Study, and Tour Opportunities",
    description:
      "Explore the best travel opportunities to work, study, and tour with RALOC Travels. Your journey starts here.",
    images: ["https://raloctravels.com/logo.png"], // Logo or preferred Twitter card image
  },
  keywords: [
    "Travel opportunities",
    "Work abroad",
    "Study abroad",
    "Tour packages",
    "RALOC Travels",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://raloctravels.com",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <ToastContainer
          position="top-right"
          newestOnTop={true}
          pauseOnHover
          theme="light"
          autoClose={5000}
          hideProgressBar={false}
          stacked
        />
        {children}
      </body>
    </html>
  );
}
