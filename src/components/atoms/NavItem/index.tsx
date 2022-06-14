import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { FCProps } from "../../../contracts/general-contracts";

export interface NavItemProps extends FCProps {
  label?: string;
  route?: string;
  onClick?: () => void;
}

export function NavItem({
  label,
  route,
  onClick,
  className,
  children,
}: NavItemProps) {
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
      className={classNames(
        "NavItem",
        className,
        activeStyles,
        "cursor-pointer"
      )}
      onClick={onNavClick}
      onKeyDown={onNavClick}
      role="menuitem"
      tabIndex={0}
    >
      {label || children}
    </div>
  );
}
