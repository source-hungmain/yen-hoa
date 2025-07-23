import { Inter } from 'next/font/google';
import './globals.css';

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
      <body className={`${interFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
