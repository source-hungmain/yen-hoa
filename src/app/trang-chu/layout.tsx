import { Inter } from 'next/font/google';
import Header from '@/components/header/Header';

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
        <Header />
        {children}
      </body>
    </html>
  );
}
