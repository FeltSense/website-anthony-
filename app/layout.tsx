import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anthony L Law Offices',
  description: 'Trusted legal representation in Miami Beach with personalized attention and proven results for your case',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
