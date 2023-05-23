import React from "react";
import "./App.css";
import CompoundForm from "./CompoundComponent/Form/CompoundForm";

function App() {
  const onChangeCompoundInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = e.target;
    console.log(value);
  };

  return (
    <div className="App">
      <CompoundForm>
        <CompoundForm.Input onChange={onChangeCompoundInput} />
        <CompoundForm.Label title="테스트" />
      </CompoundForm>
    </div>
  );
}

export default App;
