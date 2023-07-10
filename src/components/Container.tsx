import classNames from "classnames";
import type { ReactNode } from "react";

type ContainerProps = {
  id: string;
  children?: ReactNode;
  className?: string;
  noPadding?: boolean;
};

const Container = ({ id, children, className, noPadding = false }: ContainerProps) => {
  const containerClasses = classNames(`${className} rounded-lg bg-background-base`, { "px-4 py-2": !noPadding });

  return (
    <div data-testid={`container-${id}`} className={containerClasses}>
      {children}
    </div>
  );
};

export default Container;
