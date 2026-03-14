import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Our Bread | Schnitz Bakery',
  description:
    'Partner with Schnitz Bakery for fresh wholesale bread delivery across West Michigan. Perfect for restaurants, apartment communities, senior living, churches, and group meal programs.',
};

export default function GetOurBreadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
