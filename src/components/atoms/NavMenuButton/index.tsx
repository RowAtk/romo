import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export interface NavMenuButtonProps {
  closed: boolean;
  onClick: () => void;
}

export function NavMenuButton({ closed, onClick }: NavMenuButtonProps) {
  const buttonIcon = closed ? faBars : faXmark;
  return (
    <button
      type="button"
      onClick={onClick}
      className="NavMenuButton w-full h-full"
    >
      <FontAwesomeIcon icon={buttonIcon} className="w-full h-full" />
    </button>
  );
}
