import React from "react";
import { FCProps } from "contracts/general-contracts";
import { NavItemList } from "../../molecules/navItemList";

export interface NavSideMenuProps extends FCProps {
  closed: boolean;
}

export function NavSideMenu({ closed }: NavSideMenuProps) {
  const inTransition: string = "translate-x-full";
  const outTransition: string = `-${inTransition}`;

  const transitionClass: string = closed ? outTransition : inTransition;

  return (
    <div
      className={`NavSideMenu shadow min-h-screen left-0 origin-top-left ${transitionClass} transition-transform duration-500 ease-in-out bg-slate-200`}
    >
      <div className="p-4 text-left flex flex-col justify-between">
        <NavItemList itemClassNames="py-3" />
      </div>
    </div>
  );
}
