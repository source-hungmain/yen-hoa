import { updateListCategoriesCached } from '@/libs/ssr/categories';
import React from 'react';

export default async function page() {
  const res = await updateListCategoriesCached();
  return (
    <>
      {res
        ? '✅ Cập nhật cache categories thành công'
        : '❌ Cập nhật cache categories thất bại'}
    </>
  );
}
