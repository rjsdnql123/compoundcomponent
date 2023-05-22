import React from "react";

interface ICompoundFormLabelProps {
  title: string;
}

function CompoundFormLabel({ title }: ICompoundFormLabelProps) {
  return <div>{title}</div>;
}

export default CompoundFormLabel;
