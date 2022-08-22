import classNames from "classnames";
import { FCProps } from "contracts/general-contracts";
import React from "react";

export interface PageContentProps extends FCProps {
  position?: "start" | "center" | "end" | "baseline" | "stretch";
}

export function PageContent({
  position = "start",
  className,
  children,
}: PageContentProps) {
  const positionClass = `items-${position}`;

  return (
    <div
      className={classNames(
        "flex w-full h-full pt-0",
        positionClass,
        className
      )}
    >
      {children || ""}
    </div>
  );
}
