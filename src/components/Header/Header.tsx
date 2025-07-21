import React from 'react'
import IconHamburger from '../Icons/IconHamburger'
import IconNavbar from '../Icons/IconNavbar'
import IconDropdown from '../Icons/IconDropdown'

export default function Header() {
  return (
      <div className="flex justify-between items-center text-center container-header py-[27px]">
          <IconHamburger />
          <div className="flex gap-[5.846px] items-center ">
              <IconNavbar />
              <IconDropdown />
          </div>
      </div>

  )
}
