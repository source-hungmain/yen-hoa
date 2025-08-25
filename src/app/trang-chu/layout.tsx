import HeaderSSR from '@/components/header/HeaderSSR';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderSSR />
      {children}
    </>
  );
}
