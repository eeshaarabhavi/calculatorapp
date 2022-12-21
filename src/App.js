import Background from "./components/Background"
import Display from "./components/Display"
import ButtonHolder from "./components/ButtonHolder"
import Button from "./components/Button"
import CalcProv from "./context/SimpleCalcContext";

const btVals = [
  ["C", "^", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];

function App() {
  return (
    <CalcProv>
      <Background>
        <Display />
        <ButtonHolder>
          {btVals.flat().map((btn, i) => (
            <Button 
              val = {btn}
              key = {i}
            />
          ))}
        </ButtonHolder>
      </Background>
    </CalcProv>
  );
}

export default App;
