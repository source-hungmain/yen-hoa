'use client';
import IconDanhBa from '../Icons/IconDanhBa';
import IconKhamPha from '../Icons/IconKhamPha';
import IconPeople from '../Icons/IconPeople';
import IconRaoVat from '../Icons/IconRaoVat';

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/60 bg-opacity-30 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed left-0 top-0 h-full w-72 bg-white shadow-xl p-5 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()} // Không đóng khi click vào menu
      >
        <div className='flex justify-center items-center mb-6 '>
          <img
            src='/logo.png'
            alt='Logo'
            className='w-[126px] h-[57px] aspect-[42/19]'
          />
        </div>

        <div className='space-y-6 text-sm text-gray-800'>
          <div>
            <div className='flex gap-2.5'>
              <IconKhamPha />
              <p className='font-semibold mb-3'> Khám phá</p>
            </div>

            <ul className='pl-3 space-y-1 text-[13px] text-[#757574] leading-5 font-medium'>
              <li>Địa điểm nổi bật</li>
              <li>Nhà hàng & Cafe</li>
              <li>Điểm tâm linh</li>
              <li>Lưu trú</li>
            </ul>
          </div>
          <div>
            <div className='flex gap-2.5'>
              <IconRaoVat />
              <p className='font-semibold mb-3'> Rao Vặt </p>
            </div>
            <ul className='pl-3 space-y-1 text-[13px] text-[#757574] leading-5 font-medium'>
              <li>Nhà đất</li>
              <li>Việc làm</li>
              <li>Hàng hoá</li>
              <li>Dịch vụ</li>
            </ul>
          </div>
          <div>
            <div className='flex gap-2.5'>
              <IconDanhBa />
              <p className='font-semibold mb-3'> Danh bạ </p>
            </div>
            <ul className='pl-3 space-y-1 text-[13px] text-[#757574] leading-5 font-medium'>
              <li>Doanh nghiệp</li>
              <li>Cơ quan - Đơn vị hành chính</li>
              <li>Dịch vụ địa phương</li>
            </ul>
          </div>
          <div>
            <div className='flex gap-2.5'>
              <IconPeople />
              <p className='font-semiboldmb-3'> Cộng đồng</p>
            </div>
            <ul className='pl-3 space-y-1 text-[13px] text-[#757574] leading-5 font-medium'>
              <li>Câu chuyện địa phương</li>
              <li>Tin tức Yên Hoà</li>
              <li>Khoảnh khắc Fun</li>
            </ul>
          </div>

          <div className='absolute bottom-5 left-5 text-xs text-gray-500'>
            <ul className='space-x-2 flex text-[13px] text-[#757574] leading-5 font-medium'>
              <li>Về YenhoaFun</li>
              <li>Chính sách</li>
              <li>Điều khoản</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
