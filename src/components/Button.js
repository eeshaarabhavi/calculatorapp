import { useContext } from "react"
import { CalcCont } from "../context/SimpleCalcContext"

const getStyleName = btn => {

    const className = {
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '/': 'opt',
        '^': 'opt',
        'C': 'clear'
    }
    return className[btn]
}

const Button = ({ val }) => {
    const { calc, setCalc } = useContext(CalcCont);

    // User Click Period
    const periodClick  = () => {
        setCalc({
            ...calc, 
            num: !calc.num.toString().includes('.') ? calc.num + val : calc.num
        })
    }

    //  User Clicks C
    const resetInput = () => {
        setCalc({
            sign: '',
            num: 0,
            res: 0
        })
    }

    // user clicks number button
    const clickBtnHandle = () => {
        const numString = val.toString()

        let numVal;

        if (numString === '0' && calc.num === 0) {
            numVal = "0"
        } else {
            numVal = Number(calc.num + numString)
        }

        setCalc({
            ...calc, // prev value in calc
            num: numVal
        })
    }

    // user clicks operation
    const opClick = () => {
        setCalc({
            sign: val,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }

    // user clicks equals
    const eqClick = () => {
        if (calc.res && calc.num) {
            const Math = (a, b, sign) => {
                const result = {
                    '+': (a, b) => a + b,
                    '-': (a, b) => a - b, 
                    'x': (a, b) => a * b, 
                    '/': (a, b) => a / b,
                    '^': (a, b) => a ** b, 
                }
                return result[sign](a, b)
            }
            setCalc({
                res: Math(calc.res, calc.num, calc.sign), 
                sign: '',
                num: 0
            })
        }

    }

    const handleClick = () => {
        const results = {
            '.': periodClick,
            'C': resetInput,
            '/': opClick,
            'x': opClick,
            '-': opClick,
            '+': opClick,
            '^': opClick,
            '=': eqClick,
        }
        if ( results[val] ) {
            return results[val]()
        } else {
            return clickBtnHandle()
        } 
    }

    return (
        <button onClick = {handleClick} className = {`${getStyleName(val)} button`}>{ val }</button>
    )
}

export default Button