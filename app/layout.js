
import "./globals.css";
import { Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";

export const metadata = {
  title: {
    default: "Learn Web Development",
    template: "%s | Full Stack",
  },
  description:
    "React.js, Next.js, and web development by sakshi.",
  keywords: ["React", "Next.js", "Web Development"],
  icons: {
    icon: "/images/panda.jpeg",
  },
  metadataBase: new URL("https://thapatechical.com"),
  openGraph: {
    title: "Sakshi Bisht",
    description: "Join the best web dev tutorials!",
    url: "https://yourdomain.com",
    siteName: "Sakshi Bisht",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakshi Bisht",
    description: "Learn Web Dev!",
    creator: "@sakshi",
    images: ["/og-image.png"],
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${workSans.className}`}>
        {children}
      </body>
    </html>
  );
}
