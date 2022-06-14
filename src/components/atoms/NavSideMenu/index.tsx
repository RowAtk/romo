import React from "react";
import { FCProps } from "contracts/general-contracts";
import { NavItemList } from "../../molecules/navItemList";

export interface NavSideMenuProps extends FCProps {}

export function NavSideMenu() {
  return (
    <div className="NavSideMenu absolute min-h-screen left-0 origin-top-left -translate-x-full transition-transform duration-500 ease-in-out bg-slate-200">
      <div className="p-4 text-left flex flex-col justify-between">
        <NavItemList itemClassNames="py-3" />
      </div>
    </div>
  );
}
