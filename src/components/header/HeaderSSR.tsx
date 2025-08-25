import { getListCategories } from '@/libs/categories';
import React from 'react';
import Header from './Header';

export default async function HeaderSSR() {
    const data = await getListCategories();
    
  return <Header />;
}