import React, { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

export interface NavItemProps {
  label?: string;
  route?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export function NavItem({ label, route, onClick, children }: NavItemProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const active = pathname === route;
  const activeStyles = active ? "border-b-2" : "";

  const onNavClick = () => {
    if (route) {
      navigate(route);
    }

    onClick?.();
  };

  return (
    <div
      className={classNames(activeStyles, "cursor-pointer")}
      onClick={onNavClick}
      onKeyDown={onNavClick}
      role="menuitem"
      tabIndex={0}
    >
      {label || children}
    </div>
  );
}
