import React from 'react';
import Header from './Header';
import { ICategoriesResponse } from '@/interfaces/ICaterory';
import { getListCategoriesCached } from '@/libs/ssr/categories';

export default async function HeaderSSR() {
  const listCategories: ICategoriesResponse = await getListCategoriesCached();
  console.log('listCategories', listCategories);
  return <Header listCategories={listCategories.data} />;
}
