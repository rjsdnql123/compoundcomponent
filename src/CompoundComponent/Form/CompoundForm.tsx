import React, { ReactNode, useState } from "react";
import CompoundFormContext from "@compoundCom/Form/CompoundFormContext";
import CompoundFormInput from "@compoundCom/Form/CompoundFormInput";
import CompoundFormLabel from "@compoundCom/Form/CompoundFormLabel";
import { CompoundComponentWrapper } from "@compoundCom/Form/CompoundFormStyle";

interface ICompoundFormProps {
  children: ReactNode;
}

type IFocusState = boolean;

function CompoundForm({ children }: ICompoundFormProps) {
  const [isFocus, setIsFocus] = useState<IFocusState>(false);

  return (
    <CompoundFormContext.Provider value={{ isFocus, setIsFocus }}>
      <CompoundComponentWrapper isFocus={isFocus}>
        {children}
      </CompoundComponentWrapper>
    </CompoundFormContext.Provider>
  );
}

CompoundForm.Input = CompoundFormInput;
CompoundForm.Label = CompoundFormLabel;

export default CompoundForm;
