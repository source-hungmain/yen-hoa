import React from 'react';
import ArticlesList from './ArticlesList';
import LogoHome from './LogoHome';
import SearchHome from './SearchHome';
import CategoriesHome from './CategoriesHome';

export default function HomeMain() {
  return (
    <div className='flex flex-col gap-7 mb-[80px]'>
      <LogoHome />
      <SearchHome />
      <CategoriesHome />
      <div className='h-[1px] w-full bg-[#F1F1F1]'></div>
      <ArticlesList />
    </div>
  );
}
