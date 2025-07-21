'use client'
import React, { useState } from 'react'
import IconHamburger from '../Icons/IconHamburger'
import IconNavbar from '../Icons/IconNavbar'
import IconDropdown from '../Icons/IconDropdown'
import Sidebar from './SideBar'

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <>
            <div className="flex justify-between items-center text-center container-header py-[27px] px-4">
                <button onClick={() => setIsSidebarOpen(true)}>
                    <IconHamburger />
                </button>

                <div className="flex gap-[5.846px] items-center">
                    <IconNavbar />
                    <IconDropdown />
                </div>
            </div>

            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </>
    )
}
