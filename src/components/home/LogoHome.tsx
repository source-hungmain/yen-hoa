import Image from 'next/image';
import React from 'react';

export default function LogoHome() {
  return (
    <div className='w-full flex items-center justify-center'>
      <Image
        src='/logo.png'
        alt='logo'
        width={1000}
        height={1000}
        sizes='100vw'
        className='w-full max-w-[265px]'
      />
    </div>
  );
}
