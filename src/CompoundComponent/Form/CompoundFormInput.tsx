import React from "react";
import { useCompoundFormContext } from "./CompoundFormContext";

function CompoundFormInput({ onChange }: any) {
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
