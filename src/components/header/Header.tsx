'use client';
import React, { useState } from 'react';
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

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const userMenuRef = useClickOutside<HTMLDivElement>(
    () => setShowUserMenu(false),
    showUserMenu
  );

  const menuRef = useClickOutside<HTMLDivElement>(
    () => setShowMenu(false),
    showMenu
  );

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
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
                <UserMenu
                  show={showUserMenu}
                  onClose={() => setShowUserMenu(false)}
                />
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
