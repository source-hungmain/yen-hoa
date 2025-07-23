import {
  ChevronRight,
  Flame,
  Star,
  User,
  LogOut,
  Gamepad2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function ProfileMenu() {
  return (
    <div className='max-w-md mx-auto bg-gray-50 min-h-screen'>
      {/* Header Profile Section */}
      <div className='bg-white p-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-12 h-12 rounded-full overflow-hidden'>
            <Image
              src='/placeholder.svg?height=48&width=48'
              alt='Profile'
              width={48}
              height={48}
              className='w-full h-full object-cover'
            />
          </div>
          <div>
            <h2 className='font-semibold text-gray-900'>NGUYỄN TUẤN ANH</h2>
            <div className='flex items-center gap-3 mt-1'>
              <div className='flex items-center gap-1'>
                <span className='font-medium'>50</span>
                <Flame className='w-4 h-4 text-orange-500' />
              </div>
              <div className='flex items-center gap-1'>
                <span className='font-medium'>1</span>
                <Star className='w-4 h-4 text-blue-500 fill-blue-500' />
              </div>
            </div>
          </div>
        </div>
        <Button
          variant='outline'
          className='border-orange-500 text-orange-500 hover:bg-orange-50 rounded-full px-6 bg-transparent'
        >
          Sử dụng
        </Button>
      </div>

      {/* Daily Rewards Section */}
      <div className='p-4'>
        <Card className='bg-white'>
          <CardContent className='p-4'>
            <div className='flex items-center justify-between mb-4'>
              <h3 className='font-medium text-gray-900'>
                Nhận thưởng mỗi ngày
              </h3>
              <div className='flex items-center gap-1 text-orange-500'>
                <span className='text-sm'>Chi tiết</span>
                <ChevronRight className='w-4 h-4' />
              </div>
            </div>

            {/* Progress Bar */}
            <div className='relative mb-4'>
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
                  <Flame className='w-4 h-4 text-orange-500' />
                </div>
                <div className='flex items-center gap-1'>
                  <span className='font-medium'>+1</span>
                  <Star className='w-4 h-4 text-blue-500 fill-blue-500' />
                </div>
              </div>
            </div>

            <Button className='w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg'>
              Đã điểm danh
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Daily Tasks Section */}
      <div className='px-4'>
        <h3 className='font-medium text-gray-900 mb-3'>Nhiệm vụ trong ngày</h3>

        <Card className='bg-white'>
          <CardContent className='p-4'>
            <div className='flex items-start gap-3'>
              <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                <Gamepad2 className='w-5 h-5 text-purple-600' />
              </div>
              <div className='flex-1'>
                <div className='flex items-center justify-between mb-2'>
                  <h4 className='font-medium text-gray-900'>Chơi vui cùng</h4>
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-1'>
                      <span className='font-medium text-orange-500'>+50</span>
                      <Flame className='w-4 h-4 text-orange-500' />
                    </div>
                    <ChevronRight className='w-4 h-4 text-gray-400' />
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
          </CardContent>
        </Card>
      </div>

      {/* Bottom Menu */}
      <div className='p-4 mt-6'>
        <div className='space-y-3'>
          <div className='flex items-center gap-3 text-blue-500'>
            <User className='w-5 h-5' />
            <span className='text-sm'>Thông tin tài khoản</span>
          </div>
          <div className='flex items-center gap-3 text-blue-500'>
            <LogOut className='w-5 h-5' />
            <span className='text-sm'>Đăng xuất</span>
          </div>
        </div>
      </div>
    </div>
  );
}
