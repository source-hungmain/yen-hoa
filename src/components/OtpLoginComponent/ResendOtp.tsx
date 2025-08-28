'use client';

import { IFormLogin } from '@/interfaces/IResponseLogin';
import { authLogin } from '@/libs/csr/auth';
import React, { useEffect, useState } from 'react';

export default function ResendOtp({
  setIsShowInputOtp,
  phoneNumber,
  isRegister,
}: {
  setIsShowInputOtp: React.Dispatch<React.SetStateAction<boolean>>;
  phoneNumber: string;
  isRegister: boolean;
}) {
  const [counter, setCounter] = useState(60);

  const onResend = async () => {
    try {
      const res = await authLogin(phoneNumber);
      if (res && res?.success) {
        console.log('resend otp success');
      }
    } catch (error) {
      console.error('error', error);
    }
    setCounter(60);
  };

  const onChangePhone = () => {
    setIsShowInputOtp(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (counter > 0) {
      timer = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className='w-full flex justify-between items-center mt-[5px]'>
      <p className='text-gray-600 text-xs'>
        <span
          onClick={onChangePhone}
          className='text-[#3272DE] text-xs font-medium cursor-pointer hover:underline'
        >
          Đổi số điện thoại
        </span>
      </p>
      <p className='text-gray-600 text-xs'>
        {counter > 0 ? (
          <>Lấy mã OTP sau: {counter}s</>
        ) : (
          <span
            onClick={onResend}
            className='text-[#3272DE] text-xs font-medium cursor-pointer hover:underline'
          >
            Gửi lại mã OTP
          </span>
        )}
      </p>
    </div>
  );
}
