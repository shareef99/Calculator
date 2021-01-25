import { useState } from "react";
import "./App.css";

function App() {
    //Constant
    const numbers = [
        { id: "zero", num: 0 },
        { id: "one", num: 1 },
        { id: "two", num: 2 },
        { id: "three", num: 3 },
        { id: "four", num: 4 },
        { id: "five", num: 5 },
        { id: "six", num: 6 },
        { id: "seven", num: 7 },
        { id: "eight", num: 8 },
        { id: "nine", num: 9 },
    ];
    const operations = [
        { id: "add", value: "+" },
        { id: "subtract", value: "-" },
        { id: "multiply", value: "*" },
        { id: "divide", value: "/" },
        { id: "decimal", value: "." },
    ];

    // useState
    let [display, setDisplay] = useState([]);

    //Handle functions
    const handleNumber = (number) => {
        setDisplay((preState) => [...preState, number]);
    };

    const handleOperations = (operation) => {
        setDisplay((preState) => [...preState, operation]);
    };

    const handleClear = () => {
        setDisplay([]);
    };

    const handleDot = () => {
        setDisplay((preState) => [...preState, "."]);
    };

    const twoArrays = (operation) => {
        const operationLocation = display.indexOf(operations);
        const arrBeforeOperation = display.slice(0, operationLocation);
        const arrAfterOperation = display.slice(
            operationLocation + 1,
            display.length
        );
        const firstStringValue = arrAfterOperation.join("");
        const secondStringValue = arrBeforeOperation.join("");
        const firstNumber = parseInt(firstStringValue, 10);
        const secondNumber = parseInt(secondStringValue, 10);
        return [firstNumber, secondNumber];
    };

    const handleCalculations = () => {
        if (display.includes("/")) {
            const [firstValue, secondValue] = twoArrays("/");
            const Result = firstValue / secondValue;
            setDisplay([Result]);
        }
        if (display.includes("*")) {
            const [firstValue, secondValue] = twoArrays("*");
            const Result = firstValue * secondValue;
            setDisplay([Result]);
        }
        if (display.includes("-")) {
            const [firstValue, secondValue] = twoArrays("-");
            const Result = firstValue - secondValue;
            setDisplay([Result]);
        }
        if (display.includes("+")) {
            const addLocation = display.indexOf("+");
            const arrBeforeAdd = display.slice(0, addLocation);
            const arrAfterAdd = display.slice(addLocation + 1, display.length);
            const Result =
                parseFloat(arrBeforeAdd.join(""), 10) +
                parseFloat(arrAfterAdd.join(""), 10);
            setDisplay([Result]);
        }
    };

    return (
        <>
            <section className="m-20">
                <button
                    id="equals"
                    className="m-2 p-2"
                    onClick={handleCalculations}
                >
                    =
                </button>
                {numbers.map((number) => {
                    return (
                        <button
                            id={number.id}
                            key={number.id}
                            onClick={() => handleNumber(number.num)}
                            className="m-2 p-2"
                        >
                            {number.num}
                        </button>
                    );
                })}
                {operations.map((operation) => {
                    return (
                        <button
                            id={operation.id}
                            key={operation.id}
                            onClick={() => {
                                handleOperations(operation.value);
                            }}
                            className="m-2 p-2"
                        >
                            {operation.value}
                        </button>
                    );
                })}
                <button id="clear" onClick={handleClear} className="m-2 p-2">
                    AC
                </button>
                <div>
                    <p id="display" className="m-2 p-2" onClick={handleDot}>
                        {display.length === 0 ? 0 : display.map((num) => num)}
                    </p>
                </div>
            </section>
        </>
    );
}

export default App;
