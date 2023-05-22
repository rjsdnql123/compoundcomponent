import React, { ReactNode, useState } from "react";
import CompoundFormContext from "./CompoundFormContext";
import CompoundFormInput from "./CompoundFormInput";
import CompoundFormLabel from "./CompoundFormLabel";
import "./CompoundForm.css";

interface ICompoundFormProps {
  children: ReactNode;
}

type IFocusState = boolean;

function CompoundForm({ children }: ICompoundFormProps) {
  const [isFocus, setIsFocus] = useState<IFocusState>(false);

  return (
    <CompoundFormContext.Provider value={{ isFocus, setIsFocus }}>
      <div className={isFocus ? "in-focus-input" : "out-focus-input"}>
        {children}
      </div>
    </CompoundFormContext.Provider>
  );
}

CompoundForm.Input = CompoundFormInput;
CompoundForm.Label = CompoundFormLabel;
export default CompoundForm;
