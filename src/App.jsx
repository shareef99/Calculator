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
    ];

    // useState
    let [display, setDisplay] = useState([]);

    //Handle functions
    const handleNumber = (number) => {
        setDisplay((perState) => [...perState, number]);
    };

    const handleClear = () => {
        setDisplay([0]);
    };

    return (
        <>
            <section className="m-20">
                <button id="equals">=</button>
                {numbers.map((number) => {
                    return (
                        <button
                            id={number.id}
                            key={number.id}
                            onClick={() => handleNumber(number.num)}
                        >
                            {number.num}
                        </button>
                    );
                })}
                {operations.map((operation) => {
                    return (
                        <button id={operation.id} key={operation.id}>
                            {operation.value}
                        </button>
                    );
                })}
                <button id="decimal">.</button>
                <button id="clear" onClick={handleClear}>
                    AC
                </button>
                <div>
                    <p id="display">
                        {display.length === 0 ? 0 : display.map((num) => num)}
                    </p>
                </div>
            </section>
        </>
    );
}

export default App;
