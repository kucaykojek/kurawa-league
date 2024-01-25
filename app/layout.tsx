import type { Metadata } from 'next';

import Auth from '@/components/auth';
import { Toaster } from '@/components/ui/toaster';
import { fontSans } from '@/libs/fonts';
import { cn } from '@/libs/utils';
import '@/styles/components.css';
import '@/styles/globals.css';
import '@/styles/override.css';

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
        {children}
        <Toaster />
        <Auth />
      </body>
    </html>
  );
}
