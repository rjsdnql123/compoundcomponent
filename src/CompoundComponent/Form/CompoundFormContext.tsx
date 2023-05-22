import React, { createContext, useContext } from "react";

interface ICompoundFormContext {
  isFocus: boolean;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompoundFormContext = createContext<ICompoundFormContext | null>(null);

export const useCompoundFormContext = () => {
  const context = useContext(CompoundFormContext);

  if (!context) {
    throw new Error("CompoundForm.* 컴포넌트만 사용 가능합니다.");
  }
  return context;
};

export default CompoundFormContext;
