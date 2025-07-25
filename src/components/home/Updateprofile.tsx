'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

// TypeScript interfaces
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthYear: string;
  other: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ValidationErrors {
  email?: string;
  phone?: string;
  birthYear?: string;
}

export default function Updateprofile({
  modalUpdateProfile,
  modalRef,
  onClose,
}: {
  modalUpdateProfile: boolean;
  onClose: () => void;
  modalRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      firstName: 'TUAN ANH',
      lastName: 'NGUYEN',
      email: 'tuanlanh@gmail.com',
      phone: '',
      birthYear: '',
      other: '',
    },
  });

  // Validation rules
  const validationRules = {
    email: {
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Email không hợp lệ',
      },
    },
    phone: {
      pattern: {
        value: /^[0-9]{10}$/,
        message: 'Số điện thoại phải có 10 chữ số',
      },
    },
    birthYear: {
      pattern: {
        value: /^(19|20)\d{2}$/,
        message: 'Năm sinh phải từ 1900-2099',
      },
      validate: (value: string) => {
        const year = Number.parseInt(value);
        const currentYear = new Date().getFullYear();
        if (year > currentYear)
          return 'Năm sinh không thể lớn hơn năm hiện tại';
        if (year < 1900) return 'Năm sinh không thể nhỏ hơn 1900';
        return true;
      },
    },
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('Form data:', data);
      setSubmitMessage({
        type: 'success',
        text: 'Cập nhật thông tin thành công!',
      });
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Có lỗi xảy ra, vui lòng thử lại!',
      });
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    reset();
    setSubmitMessage(null);
    onClose();
  };
  if (!modalUpdateProfile) return null;

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50'>
      <div
        ref={modalRef}
        className='bg-white rounded-[5px] shadow-xl w-full max-w-md p-5 relative max-h-[90vh] overflow-y-auto'
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className='absolute top-4 right-4 text-[#757574] hover:text-[#2a2b2b] transition-colors p-1'
          type='button'
        >
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
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        {/* Header */}
        <div className='mb-6 pr-8'>
          <h2 className='text-[#2a2b2b] text-xl font-medium mb-2'>
            Cập nhật thông tin cá nhân
          </h2>
          <p className='text-[#757574] text-sm'>
            Vui lòng điền thông tin chính xác để YenhoaFun liên hệ trao quà cho
            bạn
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          {/* First Name - Read Only */}
          <div className='space-y-1'>
            <input
              {...register('firstName')}
              type='text'
              readOnly
              className='w-full px-3 text-sm py-2 bg-[#f0f0f0] border-0 rounded text-[#2a2b2b] font-medium focus:outline-none cursor-not-allowed'
            />
          </div>

          {/* Last Name - Read Only */}
          <div className='space-y-1'>
            <input
              {...register('lastName')}
              type='text'
              readOnly
              className='w-full px-3 text-sm py-2 bg-[#f0f0f0] border-0 rounded text-[#2a2b2b] font-medium focus:outline-none cursor-not-allowed'
            />
          </div>

          {/* Email */}
          <div className='space-y-1'>
            <input
              {...register('email', validationRules.email)}
              type='email'
              className={`w-full px-3 py-2 text-sm bg-[#efefef] border-0 rounded text-[#2a2b2b] focus:outline-none focus:ring-2 focus:ring-[#328bde] transition-all ${
                errors.email ? 'ring-2 ring-red-500' : ''
              }`}
              placeholder='Email'
            />
            {errors.email && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className='space-y-1'>
            <label className='block text-[#757574] text-sm mb-1'>
              Số điện thoại
            </label>
            <input
              {...register('phone', validationRules.phone)}
              type='tel'
              className={`w-full px-3 py-2 text-sm bg-[#f0f0f0] border-0 rounded text-[#2a2b2b] focus:outline-none focus:ring-2 focus:ring-[#328bde] transition-all ${
                errors.phone ? 'ring-2 ring-red-500' : ''
              }`}
              placeholder='Nhập số điện thoại'
            />
            {errors.phone && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Birth Year */}
          <div className='space-y-1'>
            <label className='block text-[#757574] text-sm mb-1'>
              Năm sinh
            </label>
            <input
              {...register('birthYear', validationRules.birthYear)}
              type='text'
              className={`w-full px-3 py-2 text-sm bg-[#f0f0f0] border-0 rounded text-[#2a2b2b] focus:outline-none focus:ring-2 focus:ring-[#328bde] transition-all ${
                errors.birthYear ? 'ring-2 ring-red-500' : ''
              }`}
              placeholder='Ví dụ: 1990'
            />
            {errors.birthYear && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.birthYear.message}
              </p>
            )}
          </div>

          {/* Other */}
          <div className='space-y-1'>
            <label className='block text-[#2a2b2b] text-sm font-medium mb-1'>
              Khác
            </label>
            <input
              {...register('other')}
              type='text'
              className='w-full px-3 text-sm py-2 bg-[#f0f0f0] border-0 rounded text-[#2a2b2b] focus:outline-none focus:ring-2 focus:ring-[#328bde] transition-all'
              placeholder='Thông tin khác'
            />
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <div
              className={`p-3 rounded text-sm ${
                submitMessage.type === 'success'
                  ? 'bg-green-100 text-green-700 border border-green-200'
                  : 'bg-red-100 text-red-700 border border-red-200'
              }`}
            >
              {submitMessage.text}
            </div>
          )}

          {/* Action Buttons */}
          <div className='flex gap-3 mt-8 justify-end'>
            <button
              type='button'
              onClick={handleClose}
              className='text-xs px-4 py-2  text-[#757574] rounded hover:bg-[#efefef] transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer'
            >
              Đóng
            </button>
            <button
              type='submit'
              disabled={isSubmitting}
              className='px-[28px] py-2 bg-[#328bde] text-white text-xs rounded hover:bg-[#2a7bc4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#328bde] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-center cursor-pointer'
            >
              {isSubmitting ? (
                <div className='flex items-center gap-2'>
                  <svg
                    className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                  Đang cập nhật...
                </div>
              ) : (
                'Cập nhật thông tin'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
