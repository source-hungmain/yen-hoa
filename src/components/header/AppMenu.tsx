import React from 'react';
import IconCoQuan from '../icons/IconCoQuan';
import IconWeather from '../icons/IconWeather';
import IconFood from '../icons/IconFood';
import IconTienTich from '../icons/IconTienTich';
import IconHome from '../icons/IconHome';
import Image from 'next/image';
import IconDropDownBlue from '../icons/IconDropDownBlue';

export default function AppMenu({
  show,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  if (!show) return null;

  return (
    <div className='fixed top-15 w-[90%] right-[5%] md:absolute md:right-0 md:top-7 bg-white shadow-lg rounded-lg md:w-80 p-4 z-50 border border-gray-200'>
      <div className='mb-4'>
        <h3 className='font-bold mb-2'>Của YenhoaFun</h3>
        <div className='grid grid-cols-3 gap-4 text-center'>
          <div className='flex flex-col items-center'>
            <div className='w-12 h-12 bg-[#C1E1FF] rounded-full flex items-center justify-center'>
              <IconCoQuan />
            </div>
            <span className='text-sm mt-1'>Cơ quan</span>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-12 h-12 bg-[#C1E1FF] rounded-full flex items-center justify-center'>
              <IconWeather />
            </div>
            <span className='text-sm mt-1'>Thời tiết</span>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-12 h-12 bg-[#C1E1FF] rounded-full flex items-center justify-center'>
              <IconFood />
            </div>
            <span className='text-sm mt-1'>Ẩm thực</span>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-12 h-12 bg-[#C1E1FF] rounded-full flex items-center justify-center'>
              <IconHome />
            </div>

            <span className='text-sm mt-1'>Nhà đất</span>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-12 h-12 bg-[#C1E1FF] rounded-full flex items-center justify-center'>
              <IconTienTich />
            </div>
            <span className='text-sm mt-1'>Tiện ích</span>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-200 pt-4'>
        <h3 className='font-bold mb-2'>Dịch vụ khác</h3>
        <div className='grid grid-cols-3 gap-4 text-center'>
          <div className='flex flex-col items-center'>
            <Image src='/ytb.png' alt='YTB' width={43} height={30} />
            <span className='text-sm mt-1'>Youtube</span>
          </div>
          <div className='flex flex-col items-center '>
            <Image src='/map.png' alt='YTB' width={23} height={34} />
            <span className='text-sm mt-1'>Maps</span>
          </div>
          <div className='flex flex-col items-center'>
            <Image src='/gmail.png' alt='YTB' width={40} height={40} />
            <span className='text-sm mt-1'>Gmail</span>
          </div>
          <div className='flex flex-col items-center'>
            <Image src='/drive.png' alt='YTB' width={40} height={40} />
            <span className='text-sm mt-1'>Drive</span>
          </div>
          <div className='flex flex-col items-center'>
            <Image src='/trans.png' alt='YTB' width={40} height={40} />
            <span className='text-sm mt-1'>Dịch</span>
          </div>
          <div className='flex flex-col items-center'>
            <Image src='/cale.png' alt='YTB' width={40} height={40} />
            <span className='text-sm mt-1'>Lịch</span>
          </div>
        </div>

        <div className=' flex gap-1.5 mt-3 text-center justify-center items-center'>
          <p className='text-blue-500 text-sm'>Xem thêm</p>
          <IconDropDownBlue />
        </div>
      </div>
    </div>
  );
}
