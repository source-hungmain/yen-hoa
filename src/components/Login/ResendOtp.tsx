"use client";

import React, { useEffect, useState } from "react";

export default function ResendOtp({ isRegister }: { isRegister: boolean }) {
  const [counter, setCounter] = useState(60);

  const onSubmit = () => {
    
    setCounter(60);
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
    <div className="w-full flex flex-col items-center mt-[5px]">
      <p className="text-gray-600 text-xs">
        {counter > 0 ? (
          <>Lấy mã OTP sau: {counter}s</>
        ) : (
          <span
            onClick={onSubmit}
            className="text-[#3272DE] text-xs font-medium cursor-pointer hover:underline"
          >
            Gửi lại mã OTP
          </span>
        )}
      </p>
    </div>
  );
}
