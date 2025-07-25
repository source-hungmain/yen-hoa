'use client';
import React, { useEffect, useState } from 'react';
import IconHamburger from '../icons/IconHamburger';
import IconDropdown from '../icons/IconDropdown';
import IconMess from '../icons/IconMess';
import IconApp from '../icons/IconApp';
import IconHuman from '../icons/IconHuman';
import IconFlag from '../icons/IconFlag';
import Sidebar from './SideBar';
import AppMenu from './AppMenu';
import UserMenu from './UserMenu';
import { useClickOutside } from '@/hooks/useClickOutside';
import ProfileMenu from './ProfileMenu';
import Updateprofile from '../home/Updateprofile';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import IconSearch from '../icons/IconSearch';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [modalUpdateProfile, setModalUpdateProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const isLogin = true;
  const pathName = usePathname();
  const isHome = pathName === '/';

  const userMenuRef = useClickOutside<HTMLDivElement>(
    () => setShowUserMenu(false),
    showUserMenu
  );

  const menuRef = useClickOutside<HTMLDivElement>(
    () => setShowMenu(false),
    showMenu
  );

  const modalUpdateProfileRef = useClickOutside<HTMLDivElement>(
    () => setModalUpdateProfile(false),
    modalUpdateProfile
  );

  useEffect(() => {
    if (modalUpdateProfile) {
      setShowUserMenu(false);
    }
  }, [modalUpdateProfile]);

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Updateprofile
        modalUpdateProfile={modalUpdateProfile}
        modalRef={modalUpdateProfileRef}
        onClose={() => setModalUpdateProfile(false)}
      />

      <div className={isHome ? '' : 'border-b border-[#d4d4d4]'}>
        <div className={'container-header'}>
          <div
            className={clsx(
              'flex justify-between items-center text-center',
              isHome ? 'py-[27px]' : 'pt-[19px] pb-4'
            )}
          >
            <div
              onClick={() => setIsSidebarOpen(true)}
              className={clsx(
                'cursor-pointer',
                isHome ? '' : 'block md:hidden'
              )}
            >
              <IconHamburger />
            </div>
            <div
              className={clsx(
                'items-center gap-[29px]',
                isHome ? 'hidden' : 'md:flex'
              )}
            >
              <Link
                href={process.env.NEXT_PUBLIC_DOMAIN || '/'}
                className='relative w-[100px] md:w-[134px] md:h-[55px] aspect-[134/55]'
              >
                <Image
                  fill
                  quality={100}
                  sizes='100vw'
                  className='object-cover'
                  src='/logo.png'
                  alt='logo'
                />
              </Link>
              <div className='relative w-[381px] md:block hidden'>
                <input
                  className='py-[11px] text-[15px] pl-[17px] pr-[50px] w-full border border-[#b8b8b8] rounded-[100px] outline-0'
                  type='text'
                  placeholder='Khám phá Yên Hoà'
                />
                <div className='absolute right-[20px] top-[15px] cursor-pointer'>
                  <IconSearch />
                </div>
              </div>
            </div>

            <div className='flex gap-[5.846px] items-center'>
              <div
                className={clsx(
                  'flex items-center',
                  isHome ? 'gap-6' : 'gap-4'
                )}
              >
                <div className='cursor-pointer relative'>
                  <IconMess />
                </div>
                <div
                  ref={menuRef}
                  onClick={() => setShowMenu(true)}
                  className='cursor-pointer relative'
                >
                  <IconApp />
                  <AppMenu show={showMenu} />
                </div>

                <div
                  ref={userMenuRef}
                  onClick={() => setShowUserMenu(true)}
                  className='cursor-pointer relative'
                >
                  <IconHuman />
                  {isLogin ? (
                    <ProfileMenu
                      show={showUserMenu}
                      openModalUpdateProfile={() => {
                        // setShowUserMenu(false);
                        setModalUpdateProfile(true);
                      }}
                    />
                  ) : (
                    <UserMenu
                      show={showUserMenu}
                      onClose={() => setShowUserMenu(false)}
                    />
                  )}
                </div>

                <div className='cursor-pointer'>
                  <IconFlag />
                </div>
              </div>

              <IconDropdown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
