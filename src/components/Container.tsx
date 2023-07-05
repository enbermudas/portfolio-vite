import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = (props: ContainerProps) => {
  return <div className="rounded-lg bg-background-base px-4 py-2">{props.children}</div>;
};

export default Container;
