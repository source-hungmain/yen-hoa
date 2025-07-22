import React from 'react';
import IconAddress from '../icons/IconAddress';
import IconSearch from '../icons/IconSearch';

export default function SearchHome() {
  return (
    <div className='relative flex items-center w-full md:w-[60%] mx-auto bg-white rounded-full shadow pl-4 pr-24 py-4 border border-gray-300'>
      <input
        type='text'
        placeholder='Khám phá Yên Hoà'
        className='flex-1 bg-transparent focus:outline-none text-[#757574] placeholder-gray-400 px-2'
      />
      <div className='flex gap-2 absolute top-[15px] right-6'>
        <button className='flex items-center flex-col mt-1'>
          <IconAddress />
          <span className='text-[#757574] text-[8px]'>Yen Hoa</span>
        </button>

        <div className='mt-1.5'>
          <IconSearch />
        </div>
      </div>
    </div>
  );
}
