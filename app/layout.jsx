import "./globals.css";
import { Poppins, Raleway } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Wedesigner",
  description: "Agence Digital Web & Print",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className + raleway.className}>{children}</body>
    </html>
  );
}
