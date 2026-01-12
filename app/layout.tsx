import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://motresres.com'),
  title: {
    default: "OpenMotor | Industrial Propulsion Systems",
    template: "%s | OpenMotor"
  },
  description: "High and Low Voltage Brushless Motors for Heavy Lift Drones, Agriculture, Logistics, and Manned Aviation. Open Source Hardware Project.",
  keywords: [
    "OpenMotor", "Industrial Propulsion", "BLDC Motor", "Drone Motor", 
    "UAV Propulsion", "Heavy Lift Drone", "Electric Aviation", 
    "Open Source Hardware", "High Voltage Motor", "eVTOL",
    "Agricultural Drone", "Logistics Drone", "Large BLDC","Robotics Motor"
  ],
  authors: [{ name: "OpenMotor Engineering Bureau" }],
  creator: "OpenMotor",
  publisher: "OpenMotor",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://emotres.com',
    title: 'OpenMotor | Industrial Propulsion Systems',
    description: 'High-Voltage Brushless Motors for Heavy Lift Drones and Aviation. Open Source Hardware.',
    siteName: 'OpenMotor',
    images: [
      {
        url: '/CIAG_300.jpg',
        width: 800,
        height: 600,
        alt: 'OpenMotor CIAG 300 Propulsion System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenMotor | Industrial Propulsion',
    description: 'High-Voltage Brushless Motors for Heavy Lift Drones and Aviation.',
    images: ['/CIAG_300.jpg'],
    creator: '@OpenMotor',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased bg-white text-brand-navy`}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1G1E2JZGCJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1G1E2JZGCJ');
          `}
        </Script>
      </body>
    </html>
  );
}
