import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://schnitzbakery.com'),
  title: {
    template: '%s | Schnitz Bakery',
    default: 'Schnitz Bakery | Artisan Bread in Grand Rapids',
  },
  description:
    'Schnitz Bakery crafts artisan bread with care in Grand Rapids, Michigan. Fresh daily deliveries and wholesale available.',
  icons: {
    icon: '/logos/schnitz-favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Schnitz Bakery',
    images: [
      {
        url: '/logos/SCHNITZ-LOGO-TYPE-WHITE.png',
        width: 800,
        height: 240,
        alt: 'Schnitz Bakery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <StructuredData
          breadcrumbs={[{ name: 'Home', href: '/' }]}
        />
        <AnnouncementBanner />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
