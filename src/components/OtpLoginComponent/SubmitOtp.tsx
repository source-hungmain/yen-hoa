'use client';
import React, { useEffect, useRef } from 'react';
import ResendOtp from './ResendOtp';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { authVerifyOtp } from '@/libs/csr/auth';

export default function SubmitOtp({
  setIsShowInputOtp,
  phoneNumber,
  userId,
  responseOtp,
}: {
  setIsShowInputOtp: React.Dispatch<React.SetStateAction<boolean>>;
  phoneNumber: string;
  userId: string;
  responseOtp: string;
}) {
  const [otpError, setOtpError] = React.useState<boolean>(false);
  const router = useRouter();
  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault();
      const paste = e.clipboardData?.getData('text') || '';
      const digits = paste.replace(/\D/g, '').slice(0, 6).split('');

      digits.forEach((digit, i) => {
        const input = inputsRef.current[i];
        if (input) {
          input.value = digit;
        }
      });

      // Focus next empty input
      for (let i = 0; i < inputsRef.current.length; i++) {
        if (!inputsRef.current[i].value) {
          inputsRef.current[i].focus();
          break;
        }
      }

      checkAndSubmit();
    };

    const container = document.getElementById('otp-input-container');
    container?.addEventListener('paste', handlePaste);

    return () => {
      container?.removeEventListener('paste', handlePaste);
    };
  }, []);

  const checkAndSubmit = async () => {
    const code = inputsRef.current.map((i) => i.value).join('');
    if (code.length == 6) {
      const res = await authVerifyOtp(userId, code);
      if (res.success) {
        router.push('/');
      } else {
        setOtpError(true);
        // console.log('Mã OTP không đúng');
      }
    }
  };

  return (
    <form className='w-full max-w-sm mx-auto ' id='otp-input-container'>
      <div className='flex mb-2 space-x-2 justify-center'>
        {Array.from({ length: 6 }).map((_, idx) => (
          <input
            key={idx}
            ref={(el) => {
              if (el) inputsRef.current[idx] = el;
            }}
            type='text'
            inputMode='numeric'
            pattern='[0-9]*'
            maxLength={1}
            id={`code-${idx + 1}`}
            onInput={(e) => {
              const input = e.currentTarget;
              input.value = input.value.replace(/[^0-9]/g, '');

              // Move to next input
              if (input.value && idx < 5) {
                inputsRef.current[idx + 1]?.focus();
              }

              checkAndSubmit();
            }}
            onKeyDown={(e) => {
              if (e.key === 'Backspace') {
                setOtpError(false);
                const input = e.currentTarget;
                if (!input.value && idx > 0) {
                  const prevInput = inputsRef.current[idx - 1];
                  prevInput.focus();
                  prevInput.value = '';
                }
              }
            }}
            className={clsx(
              'w-10 h-10 text-center text-sm font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3272DE]',
              otpError && 'border-red-500'
            )}
          />
        ))}
      </div>
      <p className='text-xs text-gray-500 text-center mt-[10px]'>
        Vui lòng nhập mã 6 chữ số được gửi đến email của bạn.
      </p>

      <ResendOtp
        setIsShowInputOtp={setIsShowInputOtp}
        phoneNumber={phoneNumber}
        isRegister={true}
      />
    </form>
  );
}
