import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'OpenMotor | Industrial Propulsion Systems',
    description: 'High-Voltage Brushless Motors for Heavy Lift Drones and Aviation. Open Source Hardware.',
    metadataBase: new URL('https://openmotor.org'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
      },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://openmotor.org',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CTK0RXP0TM"
        />
        <Script
          id="google-analytics-runner"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CTK0RXP0TM');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
