import HeaderSSR from '@/components/header/HeaderSSR';
import { ICategoriesResponse } from '@/interfaces/ICaterory';
import { getListCategoriesCached } from '@/libs/ssr/categories';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const listCategories: ICategoriesResponse = await getListCategoriesCached();
  console.log(1);
  console.log('listCategories', listCategories);
  console.log(2);
  return (
    <>
      <HeaderSSR />
      {children}
    </>
  );
}
