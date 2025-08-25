import React from 'react';
import IconTienTich from '../icons/IconTienTich';
import IconHome from '../icons/IconHome';
import IconFood from '../icons/IconFood';
import IconWeather from '../icons/IconWeather';
import IconCoQuan from '../icons/IconCoQuan';
import { getBaseUrl } from '@/utils';
import { getCurrentWeather, getForecastWeather } from '@/libs/weather';
import dataMap from '@/data/subadmin2.json';

export interface SectionItem {
  title: string;
  subtitle: string;
  contents: string[];
  hiddenOnMobile?: boolean;
}

export default async function CategoriesHome() {
  const baseUrl = await getBaseUrl();

  const iconList = [
    {
      icon: <IconCoQuan />,
    },
    {
      icon: <IconWeather />,
    },
    {
      icon: <IconFood />,
    },
    {
      icon: <IconHome />,
    },
    {
      icon: <IconTienTich />,
    },
  ];
  const location = dataMap.data.filter(
    (item) => item?.slug === baseUrl.split('.')[0]
  );
  const forecastWeather = await getForecastWeather(
    location.length > 0 ? location[0].coordinates : '21.028511,105.804817'
  );

  const sectionList: SectionItem[] = [
    {
      title: 'CƠ QUAN',
      subtitle: 'Yên Hòa',
      contents: [
        'Trụ sở Uỷ ban Yên Hoà',
        'Trụ sở HDND Yên Hoà',
        'Trụ sở Công An Yên Hoà',
        'Trụ sở Trạm Y tế Yên Hoà',
        'Trường tiểu học Yên Hoà',
      ],
    },
    {
      title: 'THỜI TIẾT',
      subtitle: 'Yên Hòa',
      contents: forecastWeather?.weather
        ? forecastWeather.weather.map(
            (day: {
              date: string;
              day: {
                condition: {
                  text: string;
                };
                avgtemp_c: number;
              };
            }) =>
              `${day.date}: ${day.day.condition.text}, ${day.day.avgtemp_c}°C`
          )
        : 'N/A',
      hiddenOnMobile: true,
    },
    {
      title: 'ẨM THỰC',
      subtitle: 'Yên Hòa',
      contents: [
        'Nhà hàng Yên Hoà',
        'Đặc sản Yên Hoà',
        'Quán ngon Yên Hoà',
        'Quán ăn sáng Yên Hoà',
      ],
    },
    {
      title: 'NHÀ ĐẤT',
      subtitle: 'Yên Hòa',
      contents: [
        'Cần bán nhà Yên Hoà',
        'Cần bán đất Yên Hoà',
        'Cho thuê nhà Yên Hoà',
        'Cho thuê phòng trọ',
        'Yên Hoà',
      ],
    },
    {
      title: 'TIỆN ÍCH',
      subtitle: 'Yên Hòa',
      contents: [
        'Ngân hàng, cây ATM',
        'Quán cafe tại Yên Hoà',
        'Quán spa tại Yên Hoà',
        'Cứu hộ ô tô Yên Hoà',
        'Taxi tại Yên Hoà',
      ],
    },
  ];
  return (
    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
      {sectionList.map((section, index) => (
        <div
          key={index}
          className={`p-4 bg-white ${
            section.hiddenOnMobile ? 'hidden md:block' : ''
          }`}
        >
          <div className='flex items-center gap-3'>
            <div className='min-w-[49px] max-w-[49px] min-h-[49px] max-h-[49px] bg-[#C1E1FF] rounded-full flex items-center justify-center'>
              {iconList[index].icon}
            </div>

            <div className='text-[#328BDE] font-semibold leading-[20px] '>
              <div className='text-[16px] uppercase'>
                {section.title} {section.subtitle}{' '}
                {baseUrl === 'yenhoa1.aneed.io'
                  ? '1'
                  : baseUrl === 'yenhoa2.aneed.io'
                  ? '2'
                  : ''}
              </div>
              {/* <div className='text-[16px] uppercase'>{section.subtitle}</div> */}
            </div>
          </div>

          <div className='mt-4'>
            {section.contents.map((text, i) => (
              <p
                key={i}
                className='text-[13px] text-black font-thin leading-[25px]'
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
