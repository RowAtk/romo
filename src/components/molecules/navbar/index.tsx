import React, { useState } from "react";
import { NavMenuButton } from "../../atoms/NavMenuButton";
import { NavSideMenu } from "../../atoms/NavSideMenu";
import { NavItemList } from "../navItemList";

export interface NavBarProps {
  height?: number;
}

export function Navbar({ height = 14 }: NavBarProps) {
  const [closed, setClosed] = useState(false);

  const onMenuButtonClick = () => {
    setClosed(!closed);
  };

  const heightClass = `h-${height}`;

  return (
    <>
      <nav className="fixed top-0 w-full">
        <div className="shadow bg-gradient-to-r from-orange-100 via-amber-100 to-orange-200 dark:bg-gray-800 w-full">
          <div
            className={`mx-auto container flex items-center ${heightClass} text-amber-800 px-4 sm:px-0 py-2`}
          >
            {/* logo & menu container */}
            <div className="flex-1 justify-start h-full">
              <div className="sm:hidden flex h-full w-6">
                {/* Mobile Menu Btn */}
                <NavMenuButton closed={closed} onClick={onMenuButtonClick} />
              </div>

              {/* Nav Items Desktop */}
              <div className="hidden sm:flex justify-start items-center h-full">
                <div className="grid grid-flow-col auto-cols-max gap-8">
                  <div>Logo</div>
                  <NavItemList />
                </div>
              </div>
            </div>

            {/* Logo for mobile */}
            <div className="sm:hidden flex-1 h-100">Logo</div>

            {/* action container */}
            <div className="flex-1 justify-end">
              <div className="text-right">Actions</div>
            </div>
          </div>
        </div>

        {/* Nav Items Mobile */}
        <div className="flex-1 w-1/2 left-0 origin-top-left sm:hidden -ml-[50%]">
          <NavSideMenu closed={closed} />
        </div>
      </nav>

      {/*  Padding placeholder */}
      {/* <div className="pt-14" /> */}
    </>
  );
}
