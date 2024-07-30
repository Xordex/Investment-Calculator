import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment"
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [isData, setData] = useState({ initialInvestment: 10000, annualInvestment: 300, expectedReturn: 5.5, duration: 12 });
  const [inputisValid, setinputisValid] = useState(true);

  function changeInitial(inputName, newValue) {
    { newValue >= 1 ? setinputisValid(true) : setinputisValid(false) }
    { newValue >= 1 && setData(prevData => { return { ...prevData, [inputName]: newValue } }) }
  }

  return (
    <>
      <Header />
      <UserInput change={changeInitial} />
      {!inputisValid && <p className="center">Popraw dane wejściowe</p>}
      {inputisValid && <Result data={isData} />}
    </>
  )
}

export default App