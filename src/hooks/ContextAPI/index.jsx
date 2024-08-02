import { createContext } from "react";

// 1 step
export const BioContext = createContext();

// 2nd step
export const BioProvider = ({ children }) => {
  const myName = "vinod";
  const myAge = 30;
  console.log(children);

  return (
    <BioContext.Provider value={{ myName: myName, myAge: myAge }}>
      {children}
    </BioContext.Provider>
  );
};
