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

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [modalUpdateProfile, setModalUpdateProfile] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const isLogin = true;
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

      <div className='container-header'>
        <div className='flex justify-between items-center text-center py-[27px] px-4'>
          <div
            onClick={() => setIsSidebarOpen(true)}
            className='cursor-pointer'
          >
            <IconHamburger />
          </div>

          <div className='flex gap-[5.846px] items-center'>
            <div className='flex gap-6 items-center'>
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
    </>
  );
}
