import type { FC, PropsWithChildren } from "react";

export const App: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};
