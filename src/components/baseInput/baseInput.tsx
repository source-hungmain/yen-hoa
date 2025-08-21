"use client"
import React, { useState } from "react";

interface BaseInputProps {
    label?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    leftIcon?: React.ReactNode;
    width?: string | number;
    height?: string | number;
    disabled?: boolean;
    type?: string;
    error?: string;
    isPassword?: boolean;
    inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
    className?: string;
    maxLength?: number;
}

const BaseInput: React.FC<BaseInputProps> = ({
    label,
    type = "text",
    value,
    onChange,
    onBlur,
    placeholder = "",
    leftIcon,
    width,
    height = 48,
    disabled = false,
    error,
    isPassword = false,
    inputMode,
    className,
    maxLength
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    const style: React.CSSProperties = {
        width: typeof width === "number" ? `${width}px` : width || "100%",
        height: typeof height === "number" ? `${height}px` : height,
        minWidth: "100px",
    };

    return (
        <div className="flex flex-col gap-[6px] w-full">
            {label && (
                <label className="block text-sm text-black">
                    {label}
                </label>
            )}

            <div
                className={`relative border rounded-[5px] flex items-center px-3 bg-white ${className} ${error ? "border-[#DFDFDF]" : "border-[#DFDFDF] hover:border-[#DFDFDF]"
                    } ${disabled ? "opacity-50 cursor-not-allowed" : ""} w-full`}
                style={style}
            >
                {leftIcon && (
                    <div className="mr-2 text-pink-fe2c55 flex-shrink-0">
                        {leftIcon}
                    </div>
                )}

                <input
                    type={inputType}
                    value={value !== undefined && value !== null ? String(value) : ""}
                    onChange={(e) => {
                        const input = e.currentTarget;
                        input.value = input.value.replace(/[^0-9]/g, "");
                        onChange(e)
                    }
                    }
                    onBlur={onBlur}
                    placeholder={placeholder}
                    disabled={disabled}
                    inputMode={inputMode}
                    maxLength={maxLength}
                    pattern="[0-9]*"
                    className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 no-spinner w-full pr-6 text-[12px]"
                />

                {/* Mắt ẩn/hiện password */}
                {isPassword && (
                    <span
                        className="absolute right-3 cursor-pointer text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            // 👁 mở
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 12"
                                fill="none"
                            >
                                <path
                                    d="M1 7C4.6 -1 15.4 -1 19 7"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10 11C9.6 11 9.2 10.9 8.85 10.77C8.49 10.62 8.16 10.4 7.88 10.12C7.6 9.84 7.38 9.51 7.23 9.15C7.08 8.78 7 8.39 7 8C7 7.61 7.08 7.22 7.23 6.85C7.38 6.49 7.6 6.16 7.88 5.88C8.16 5.6 8.49 5.38 8.85 5.23C9.22 5.08 9.61 5 10 5C10.8 5 11.56 5.32 12.12 5.88C12.68 6.44 13 7.2 13 8C13 8.8 12.68 9.56 12.12 10.12C11.56 10.68 10.8 11 10 11Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ) : (
                            // 👁 ẩn
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m15 18-.722-3.25" />
                                <path d="M2 8a10.645 10.645 0 0 0 20 0" />
                                <path d="m20 15-1.726-2.05" />
                                <path d="m4 15 1.726-2.05" />
                                <path d="m9 18 .722-3.25" />
                            </svg>
                        )}
                    </span>
                )}
            </div>

            {error && (
                <p className="text-[10px] text-red-500 px-1 text-left">{error}</p>
            )}
        </div>
    );
};

export default BaseInput;
