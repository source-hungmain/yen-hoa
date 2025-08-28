'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type LoadingContextType = {
  loading: boolean;
  setLoading: (state: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType | null>(null);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && <LoadingOverlay setLoading={setLoading} />}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used inside LoadingProvider');
  }
  return context;
}

function LoadingOverlay({
  setLoading,
}: {
  setLoading: (state: boolean) => void;
}) {
  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black/40 z-50'
      onClick={() => setLoading(false)} // click ngoài tắt
    >
      <div
        className='bg-transparent rounded-full p-4'
        onClick={(e) => e.stopPropagation()} // chặn click vào icon không bị tắt
      >
        <svg
          className='animate-spin h-10 w-10 text-white'
          xmlns='http://www.w3.org/2000/svg'
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
          />
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8v8H4z'
          />
        </svg>
      </div>
    </div>
  );
}
