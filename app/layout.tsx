import type { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';

import Auth from '@/components/auth';
import { Toaster } from '@/components/ui/toaster';
import authOptions from '@/libs/auth-options';
import { fontSans } from '@/libs/fonts';
import { cn } from '@/libs/utils';
import '@/styles/components.css';
import '@/styles/globals.css';
import '@/styles/override.css';

import AuthProvider from './auth-provider';

export const metadata: Metadata = {
  title: 'Kurawa League',
  manifest: '/site.webmanifest'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
        suppressHydrationWarning
      >
        <AuthProvider session={session}>{children}</AuthProvider>
        <Toaster />
        <Auth />
      </body>
    </html>
  );
}
