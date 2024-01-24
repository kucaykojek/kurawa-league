import type { Metadata } from 'next';

import Header from '@/components/common/header';
import { Toaster } from '@/components/ui/toaster';
import { fontSans } from '@/libs/fonts';
import { cn } from '@/libs/utils';

import './globals.css';

export const metadata: Metadata = {
  title: 'Kurawa League',
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
        suppressHydrationWarning
      >
        <div className="container">
          <Header />
          <main>{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
