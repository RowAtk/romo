import React from "react";
import { NavItem } from "../../atoms/NavItem";

export type INavItem = {
  label: string;
  route: string;
};

export interface NavItemListProps {
  itemClassNames?: string;
}

export function NavItemList({ itemClassNames }: NavItemListProps) {
  const items: INavItem[] = [
    { label: "Item 1", route: "route" },
    { label: "Longer Item 2", route: "route" },
    { label: "Item 3", route: "route" },
    { label: "Fourth Item", route: "route" },
  ];

  return (
    <>
      {items.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          route={item.route}
          className={itemClassNames}
        />
      ))}
    </>
  );
}
