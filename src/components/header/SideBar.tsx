'use client';
import Image from 'next/image';
import IconDanhBa from '../icons/IconDanhBa';
import IconKhamPha from '../icons/IconKhamPha';
import IconPeople from '../icons/IconPeople';
import IconRaoVat from '../icons/IconRaoVat';
import { useEffect } from 'react';

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const MENU_DATA = [
    {
      icon: <IconKhamPha />,
      title: 'Khám phá',
      items: [
        'Địa điểm nổi bật',
        'Nhà hàng & Cafe',
        'Điểm tâm linh',
        'Lưu trú',
      ],
    },
    {
      icon: <IconRaoVat />,
      title: 'Rao Vặt',
      items: ['Nhà đất', 'Việc làm', 'Hàng hoá', 'Dịch vụ'],
    },
    {
      icon: <IconDanhBa />,
      title: 'Danh bạ',
      items: [
        'Doanh nghiệp',
        'Cơ quan - Đơn vị hành chính',
        'Dịch vụ địa phương',
      ],
    },
    {
      icon: <IconPeople />,
      title: 'Cộng đồng',
      items: ['Câu chuyện địa phương', 'Tin tức Yên Hoà', 'Khoảnh khắc Fun'],
    },
  ];

  const FOOTER_LINKS = ['Về YenhoaFun', 'Chính sách', 'Điều khoản'];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpen]);

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
          <div className='relative h-[57px] aspect-[126/57]'>
            <Image
              src='/logo.png'
              alt='Logo'
              fill
              quality={100}
              sizes='100vw'
              className='object-cover'
            />
          </div>
        </div>

        <div className='space-y-6 text-sm text-gray-800 relative'>
          {MENU_DATA.map((section, idx) => (
            <div key={idx}>
              <div className='flex gap-2.5 mb-3 items-center'>
                {section.icon}
                <p className='font-semibold'>{section.title}</p>
              </div>
              <ul className='pl-10 space-y-1 text-[13px] text-[#757574] leading-5 font-medium'>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='absolute bottom-5 left-5 text-xs text-gray-500'>
          <ul className='space-x-2 flex text-[13px] text-[#757574] leading-5 font-medium'>
            {FOOTER_LINKS.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
