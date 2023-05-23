import React, { ReactNode, useState } from "react";
import CompoundFormContext from "@compoundCom/Form/CompoundFormContext";
import CompoundFormInput from "@compoundCom/Form/CompoundFormInput";
import CompoundFormLabel from "@compoundCom/Form/CompoundFormLabel";

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
CompoundForm.Label = CompoundFormLabel;
export default CompoundForm;
