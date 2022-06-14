import React, { useState } from "react";
import { NavMenuButton } from "../../atoms/NavMenuButton";
import { NavSideMenu } from "../../atoms/NavSideMenu";
import { NavItemList } from "../navItemList";

export interface NavBarProps {}

export function Navbar(/* props: NavBarProps */) {
  const [closed, setClosed] = useState(false);

  const onMenuButtonClick = () => {
    setClosed(!closed);
  };

  return (
    <nav className="fixed top-0 w-full shadow bg-gradient-to-r from-orange-100 via-amber-100 to-orange-200 dark:bg-gray-800">
      <div className="mx-auto container">
        <div className="flex items-center h-14 text-amber-800 px-4 sm:px-0 py-2">
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

            {/* Nav Items Mobile */}
            <div className="flex sm:hidden mt-2">
              <NavSideMenu />
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
    </nav>
  );
}
