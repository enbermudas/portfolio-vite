import type { ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`${className} rounded-lg bg-background-base px-4 py-2`}>{children}</div>;
};

export default Container;
