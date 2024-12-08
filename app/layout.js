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
  title: "RALOC TRAVELS",
  description: "Travel far, live fully!",
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
