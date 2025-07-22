'use client'
import React, { useState } from 'react'
import IconHamburger from '../icons/IconHamburger'
import IconDropdown from '../icons/IconDropdown'
import Sidebar from './SideBar'
import IconMess from '../icons/IconMess'
import IconApp from '../icons/IconApp'
import IconHuman from '../icons/IconHuman'
import IconFlag from '../icons/IconFlag'
import AppMenu from './AppMenu'
import UserMenu from './UserMenu'

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [showUserMenu, setShowUserMenu] = useState(false)

    return (
        <>
            <div className="flex justify-between items-center text-center container-header py-[27px] px-4">
                <button onClick={() => setIsSidebarOpen(true)}>
                    <IconHamburger />
                </button>

                <div className="flex gap-[5.846px] items-center">
                    <div className='flex gap-6'>
                        <IconMess />
                        <button
                            onClick={() => setShowMenu(true)}
                        >
                            <IconApp />
                        </button>
                        <AppMenu show={showMenu} onClose={() => setShowMenu(false)} />

                        <button onClick={() => setShowUserMenu(true)}>
                            <IconHuman />
                        </button>
                        <UserMenu show={showUserMenu} onClose={() => setShowUserMenu(false)} />

                        <IconFlag />
                    </div>

                    <IconDropdown />
                </div>
            </div>

            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </>
    )
}
