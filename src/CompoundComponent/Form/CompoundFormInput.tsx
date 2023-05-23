import React from "react";
import { useCompoundFormContext } from "./CompoundFormContext";

interface ICompoundFormInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CompoundFormInput({ onChange }: ICompoundFormInputProps) {
  const { setIsFocus } = useCompoundFormContext();

  const onClickInFoucs = () => {
    setIsFocus(true);
  };
  const onClickOutFocus = () => {
    setIsFocus(false);
  };

  return (
    <input
      onChange={onChange}
      onFocus={onClickInFoucs}
      onBlur={onClickOutFocus}
    />
  );
}

export default CompoundFormInput;
