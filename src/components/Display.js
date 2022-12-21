import {useContext} from "react"
import { CalcCont } from "../context/SimpleCalcContext"
import { Textfit } from 'react-textfit'

const Display = () => {
    const { calc } = useContext(CalcCont);

    return (
        <Textfit className = "display" max = {70} mode ="single"> {calc.num ? calc.num : calc.res} </Textfit>

    )
}

export default Display