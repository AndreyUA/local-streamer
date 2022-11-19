import { FC, ReactNode } from "react";
import Header from "./Header";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Wrapper;
