import { Inter } from 'next/font/google';
import './globals.css';
import ReduxProvider from '../store/ReduxProvider';
import { LoadingProvider } from '@/store/useLoading';

const interFont = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${interFont.variable} antialiased`}>
        <ReduxProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
