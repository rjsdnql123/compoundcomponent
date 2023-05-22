import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CompoundForm from "./CompoundComponent/Form/CompoundForm";

function App() {
  return (
    <div className="App">
      <CompoundForm>
        <CompoundForm.Input onChange={() => {}} />
        <CompoundForm.Label title="테스트" />
      </CompoundForm>
    </div>
  );
}

export default App;
