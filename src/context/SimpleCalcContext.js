import { createContext, useState } from "react"

export const CalcCont = createContext()
const CalcProv = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  });

  const provValue = {
    calc, setCalc
  }

  return (
    <CalcCont.Provider value = {provValue}>
      {children}
    </CalcCont.Provider>
  )
}

export default CalcProv