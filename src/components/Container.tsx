import classNames from "classnames";
import type { ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
  className?: string;
  noPadding?: boolean;
};

const Container = ({ children, className, noPadding = false }: ContainerProps) => {
  const containerClasses = classNames(`${className} rounded-lg bg-background-base`, { "px-4 py-2": !noPadding });

  return <div className={containerClasses}>{children}</div>;
};

export default Container;
