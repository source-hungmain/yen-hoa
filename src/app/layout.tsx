import { Inter } from 'next/font/google';
import './globals.css';
import ReduxProvider from '../store/ReduxProvider';
import { LoadingProvider } from '@/store/useLoading';

const interFont = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: [
    '100', // Thin
    '200', // Extra Light
    '300', // Light
    '400', // Regular
    '500', // Medium
    '600', // Semi Bold
    '700', // Bold
    '800', // Extra Bold
    '900', // Black
  ],
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
