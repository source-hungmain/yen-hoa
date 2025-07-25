import React from 'react';
import IconQua from '../icons/IconQua';
import IconThe from '../icons/IconThe';
import Image from 'next/image';

export default function UserMenu({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  if (!show) return null;

  return (
    <div className='fixed top-15 w-[90%] right-[5%] md:absolute md:right-0 md:top-7 bg-white shadow-lg rounded-lg md:w-80 p-4 z-50 border border-gray-200'>
      <div className='flex justify-center mb-2'></div>

      <h3 className='font-bold text-center mb-2'>
        Cơ hội nhận quà với <br />{' '}
        <span className='text-blue-500'>YenhoaFun Points</span>
      </h3>

      <p className='text-sm text-center text-gray-600 mb-4'>
        Đăng nhập vào YenhoaFun, duyệt web và sử dụng các tính năng để tích
        điểm, đổi quà tại Cốc Cốc Points
      </p>

      <div className='flex justify-around mb-4'>
        <div className='flex flex-col items-center'>
          <IconQua />
          <span className='text-sm mt-1'>Quà tặng</span>
        </div>
        <div className='flex flex-col items-center'>
          <IconThe />
          <span className='text-sm mt-1'>Thẻ điện thoại</span>
        </div>
        <div className='flex flex-col items-center'>
          <Image src='/voucher.png' alt='Voucher' width={60} height={60} />
          <span className='text-sm mt-1'>Voucher</span>
        </div>
      </div>

      <button
        onClick={onClose}
        className='bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 cursor-pointer'
      >
        Đăng nhập
      </button>

      <div className='text-center mt-2'>
        <button className='text-blue-500 text-sm hover:underline cursor-pointer'>
          Tìm hiểu thêm
        </button>
      </div>
    </div>
  );
}
