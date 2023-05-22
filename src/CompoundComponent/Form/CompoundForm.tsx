import React, { ReactNode, useState } from "react";
import CompoundFormContext from "./CompoundFormContext";
import CompoundFormInput from "./CompoundFormInput";

interface ICompoundFormProps {
  children: ReactNode;
}

type IFocusState = boolean;

function CompoundForm({ children }: ICompoundFormProps) {
  const [isFocus, setIsFocus] = useState<IFocusState>(false);

  return (
    <CompoundFormContext.Provider value={{ isFocus, setIsFocus }}>
      <div>{children}</div>
    </CompoundFormContext.Provider>
  );
}

CompoundForm.Input = CompoundFormInput;
export default CompoundForm;
