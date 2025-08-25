import { getListCategories } from '@/libs/categories';
import React from 'react';
import Header from './Header';
import { ICategoriesResponse } from '@/interfaces/ICaterory';

export default async function HeaderSSR() {
  const listCategories: ICategoriesResponse = await getListCategories();

  return <Header listCategories={listCategories.data} />;
}
