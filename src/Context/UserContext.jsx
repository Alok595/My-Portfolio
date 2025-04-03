import { createContext, useState } from "react";

export const dataContext = createContext();

const UserContext = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const value = {isOpen, setIsOpen,index, setIndex};
  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export default UserContext;
