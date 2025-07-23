import Image from 'next/image';
import IconCrown from '../icons/IconCrown';
import IconBoxStar from '../icons/IconBoxStar';
import IconArrowRight from '../icons/IconArrowRight';

export default function ProfileMenu({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div className='fixed top-15 w-[90%] md:w-80 right-[5%] md:absolute md:right-0 md:top-7 z-50'>
      <div className='max-w-md mx-auto bg-[#F9F9F9] shadow-lg rounded-[10px]  border border-gray-200'>
        {/* Header Profile Section */}
        <div className='px-[18px] pt-[17px] pb-[13px] flex items-center justify-between border-b border-[#D9D9D9]'>
          <div className='flex items-center gap-2.5'>
            <div className='w-[35px] h-[35px] rounded-full overflow-hidden relative shadow '>
              <Image
                fill
                sizes='100vw'
                quality={100}
                src='/avatar.png'
                alt='Avatar'
                className='object-cover'
              />
            </div>
            <div>
              <h2 className='font-semibold text-gray-900 leading-[20px] text-[13px] uppercase'>
                NGUYỄN TUẤN ANH
              </h2>
              <div className='flex items-center gap-3'>
                <div className='flex items-center gap-1'>
                  <span className='font-medium text-xs leading-[20px]'>50</span>
                  <IconCrown />
                </div>
                <div className='flex items-center gap-1'>
                  <span className='font-medium text-xs leading-[20px]'>1</span>
                  <IconBoxStar />
                </div>
              </div>
            </div>
          </div>
          <div className='border border-[#FF8100] text-[#FF8100] hover:bg-orange-50 rounded-full px-[14px] py-1 bg-transparent transition-colors text-xs font-medium leading-[20px]'>
            Sử dụng
          </div>
        </div>

        {/* Daily Rewards Section */}
        <div className='px-[18px] pt-[14px] pb-[13px]'>
          <div className=''>
            <div className=''>
              <div className='flex items-center justify-between mb-4'>
                <h3 className='font-semibold text-[#2A2B2B] text-xs leading-5'>
                  Nhận thưởng mỗi ngày
                </h3>
                <div className='flex items-center gap-1 text-[#FF8100]'>
                  <span className='text-xs leading-5 font-medium'>
                    Chi tiết
                  </span>
                  <IconArrowRight />
                </div>
              </div>

              {/* Progress Bar */}
              <div className='bg-white shadow-sm px-[7px] py-[6px] rounded-[10px]'>
                <div className='relative mb-4 '>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-medium'>
                      7
                    </div>
                    <div className='flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-600 rounded-full text-sm font-medium'>
                      14
                    </div>
                    <div className='flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-600 rounded-full text-sm font-medium'>
                      21
                    </div>
                    <div className='flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-600 rounded-full text-sm font-medium'>
                      28
                    </div>
                  </div>
                  <div className='absolute top-4 left-4 right-4 h-0.5 bg-gray-300 -z-10'>
                    <div className='h-full w-1/4 bg-blue-500'></div>
                  </div>
                </div>

                <div className='text-sm text-gray-600 mb-4'>
                  <span>Ngày đầu tiên của chuỗi</span>
                  <div className='flex items-center gap-3 mt-1'>
                    <div className='flex items-center gap-1'>
                      <span className='font-medium'>+50</span>
                      <svg
                        className='w-4 h-4 text-[#FF8100]'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 2c1.1 0 2 .9 2 2 0 .74-.4 1.39-1 1.73v1.93l7 3.5c.31.16.5.5.5.84v8c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-8c0-.34.19-.68.5-.84l7-3.5V5.73c-.6-.34-1-.99-1-1.73 0-1.1.9-2 2-2z' />
                      </svg>
                    </div>
                    <div className='flex items-center gap-1'>
                      <span className='font-medium'>+1</span>
                      <svg
                        className='w-4 h-4 text-blue-500 fill-blue-500'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                      </svg>
                    </div>
                  </div>
                </div>

                <button className='w-full bg-[#FF8100] hover:bg-orange-600 text-white rounded-lg py-3 font-medium transition-colors'>
                  Đã điểm danh
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Tasks Section */}
        <div className='px-4'>
          <h3 className='font-medium text-gray-900 mb-3'>
            Nhiệm vụ trong ngày
          </h3>

          <div className='bg-white rounded-lg shadow-sm border'>
            <div className='p-4'>
              <div className='flex items-start gap-3'>
                <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                  <svg
                    className='w-5 h-5 text-purple-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <div className='flex-1'>
                  <div className='flex items-center justify-between mb-2'>
                    <h4 className='font-medium text-gray-900'>Chơi vui cùng</h4>
                    <div className='flex items-center gap-2'>
                      <div className='flex items-center gap-1'>
                        <span className='font-medium text-[#FF8100]'>+50</span>
                        <svg
                          className='w-4 h-4 text-[#FF8100]'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M12 2c1.1 0 2 .9 2 2 0 .74-.4 1.39-1 1.73v1.93l7 3.5c.31.16.5.5.5.84v8c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-8c0-.34.19-.68.5-.84l7-3.5V5.73c-.6-.34-1-.99-1-1.73 0-1.1.9-2 2-2z' />
                        </svg>
                      </div>
                      <svg
                        className='w-4 h-4 text-gray-400'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </div>
                  </div>
                  <p className='text-sm text-gray-900 font-medium mb-1'>
                    Trochoi24
                  </p>
                  <p className='text-sm text-gray-600'>
                    Trải nghiệm niềm vui cùng trò chơi
                  </p>
                  <p className='text-sm text-gray-600'>Bản tia 3D</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Menu */}
        <div className='p-4 mt-6'>
          <div className='space-y-3'>
            <div className='flex items-center gap-3 text-blue-500 cursor-pointer hover:text-blue-600 transition-colors'>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
              <span className='text-sm'>Thông tin tài khoản</span>
            </div>
            <div className='flex items-center gap-3 text-blue-500 cursor-pointer hover:text-blue-600 transition-colors'>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                />
              </svg>
              <span className='text-sm'>Đăng xuất</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
