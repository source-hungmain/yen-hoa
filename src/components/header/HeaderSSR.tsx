import React from 'react';
import Header from './Header';
import { ICategoriesResponse } from '@/interfaces/ICaterory';
import { getListCategoriesCached } from '@/libs/ssr/categories';

export default async function HeaderSSR() {
  const listCategories: ICategoriesResponse = await getListCategoriesCached();
  console.log(1);
  console.log('listCategories', listCategories);
  console.log(2);

  return (
    <>
      {/* {listCategories.data && <Header listCategories={listCategories.data} />} */}
    </>
  );
}
