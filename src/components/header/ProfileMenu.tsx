import Image from 'next/image';
import IconCrown from '../icons/IconCrown';
import IconBoxStar from '../icons/IconBoxStar';
import IconArrowRight from '../icons/IconArrowRight';
import IconUser from '../icons/IconUser';
import IconLogout from '../icons/IconLogout';

export default function ProfileMenu({
  show,
  openModalUpdateProfile,
}: {
  show: boolean;
  openModalUpdateProfile: () => void;
}) {
  if (!show) return null;
  return (
    <div className='fixed top-15 w-[90%] md:w-80 right-[5%] md:absolute md:right-0 md:top-7 z-50'>
      <div className='max-w-md mx-auto bg-[#F9F9F9] shadow-lg rounded-[10px] border border-gray-200'>
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
                  <IconCrown width={8} height={8} />
                </div>
                <div className='flex items-center gap-1'>
                  <span className='font-medium text-xs leading-[20px]'>1</span>
                  <IconBoxStar width={9} height={8} />
                </div>
              </div>
            </div>
          </div>
          <div className='border border-[#FF8100] text-[#FF8100] hover:bg-orange-50 rounded-full px-[14px] py-1 bg-transparent transition-colors text-xs font-medium leading-[20px]'>
            Sử dụng
          </div>
        </div>

        {/* Daily Rewards Section */}
        <div className='px-[18px] mt-[14px] mb-2'>
          <div className=''>
            <div className=''>
              <div className='flex justify-between mb-4'>
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

                <div className='flex items-center justify-between mb-2'>
                  <span className='font-medium text-[#444545] text-xs leading-5 text-left'>
                    Ngày đầu tiên của chuỗi
                  </span>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-1'>
                      <span className='font-medium text-xs text-[#757574]'>
                        +50
                      </span>
                      <div className='mb-1'>
                        <IconCrown width={14} height={13} />
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <span className='font-medium text-xs text-[#757574]'>
                        +1
                      </span>
                      <IconBoxStar width={13} height={12} />
                    </div>
                  </div>
                </div>

                <button className='w-full bg-[#FF8100] hover:bg-orange-600 text-white text-xs rounded-[5px] py-1.5 font-medium transition-colors cursor-pointer'>
                  Đã điểm danh
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Tasks Section */}
        <div className='px-4'>
          <h3 className='font-medium text-[#444545] text-xs leading-5 text-left mb-1.5'>
            Nhiệm vụ trong ngày
          </h3>

          <div className='bg-white rounded-[10px] shadow-sm'>
            <div className='px-3 py-4'>
              <div className='flex items-start gap-3'>
                <div className='w-[30px] h-[23px] relative mt-1'>
                  <Image
                    alt=''
                    src={'/game-controller.png'}
                    fill
                    sizes='100vw'
                    quality={100}
                    className='object-cover'
                  />
                </div>
                <div className='flex-1'>
                  <div className='flex items-center justify-between mb-2'>
                    <h4 className='text-left font-semibold text-[#2A2B2B] text-xs leading-[18px]'>
                      Chơi vui cùng
                      <br />
                      Trochoi24
                    </h4>
                    <div className='flex items-center gap-2'>
                      <div className='flex items-center gap-1 bg-[#f2f2f2] rounded-[100px] px-1'>
                        <span className='font-medium text-[#2A2B2B] text-xs leading-5'>
                          +50
                        </span>
                        <div className='mb-1'>
                          <IconCrown width={10} height={9} />
                        </div>
                      </div>
                      <div className='mb-1'>
                        <IconArrowRight />
                      </div>
                    </div>
                  </div>
                  <p className='text-left text-xs text-[#444545] font-medium leading-[18px]'>
                    Trải nghiệm niềm vui cùng trò chơi
                    <br />
                    Bản tia 3D
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Menu */}
        <div className='px-[18px] my-[11px]'>
          <div className='space-y-3'>
            <div className='flex items-center gap-3 text-blue-500 cursor-pointer hover:text-blue-600 transition-colors'>
              <div onClick={openModalUpdateProfile}>
                <IconUser />
              </div>
              <span
                onClick={openModalUpdateProfile}
                className='text-xs text-[#2A2B2B] font-medium leading-[18px]'
              >
                Thông tin tài khoản
              </span>
            </div>
            <div className='flex items-center gap-3 text-blue-500 cursor-pointer hover:text-blue-600 transition-colors'>
              <IconLogout />
              <span className='text-xs text-[#2A2B2B] font-medium leading-[18px]'>
                Đăng xuất
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
