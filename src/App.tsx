import { useEffect, useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
    const [equation, setEquation] = useState<string | null>(null);
    const [result, setResult] = useState<string>("");
    const [currentValue, setCurrentValue] = useState<string>("0");
    const [display, setDisplay] = useState<string>("");

    const updateEquation = (val: string) => {
        let newEquation;

        if (val === "cancel") {
            if (equation === null) {
                setEquation(null);
                setCurrentValue("0");
                setDisplay("");
                setResult("");
                return;
            }

            newEquation = equation!.slice(0, -1);
            setEquation(newEquation);
            setCurrentValue(newEquation.slice(-1));
            return;
        }

        setCurrentValue(val);

        if (equation === null) {
            newEquation = val;
        } else {
            newEquation = equation + val;
        }

        // Removing first zero
        if (newEquation.substring(0, 1) === "0") {
            newEquation = newEquation.substring(1);
        }

        newEquation = newEquation.replaceAll("..", ".");

        setEquation(newEquation);
    };

    useEffect(() => {
        if (equation === null) {
            setDisplay("");
            return;
        }

        if (result === "") {
            setDisplay(equation);
            return;
        }

        setDisplay(equation + "=" + result);
    }, [equation, result]);

    const clearHandler = () => {
        setEquation(null);
        setResult("");
        setCurrentValue("0");
        setDisplay("0");
    };

    const resultHandler = () => {
        if (equation !== null) {
            try {
                const result = evaluate(equation);
                setResult(result.toString());
            } catch (error) {
                setResult("Error");
            }
        } else {
            setResult("Enter Number");
        }
    };

    return (
        <section className="h-screen flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl">Simple Calculator</h1>
            <div id="calculator-wrapper" className="w-11/12 sm:w-80">
                <div className="flex flex-col text-right">
                    <span className="h-6 text-yellow-300">{display}</span>
                    <span className="h-6">
                        {result === "" ? currentValue : result}
                    </span>
                </div>
                <div
                    className="grid grid-cols-4 text-center p-1"
                    id="calculator"
                >
                    <span
                        id="clear"
                        style={{ backgroundColor: "var(--red)" }}
                        onClick={clearHandler}
                    >
                        AC
                    </span>
                    <span
                        id="cancel"
                        className="text-2xl"
                        style={{ backgroundColor: "var(--red)" }}
                        onClick={() => updateEquation("cancel")}
                    >
                        &#8592;
                    </span>
                    <span
                        id="divide"
                        style={{ backgroundColor: "var(--gray)" }}
                        onClick={() => updateEquation("/")}
                    >
                        /
                    </span>
                    <span
                        id="multiply"
                        style={{ backgroundColor: "var(--gray)" }}
                        onClick={() => updateEquation("*")}
                    >
                        X
                    </span>
                    <span id="seven" onClick={() => updateEquation("7")}>
                        7
                    </span>
                    <span id="eight" onClick={() => updateEquation("8")}>
                        8
                    </span>
                    <span id="nine" onClick={() => updateEquation("9")}>
                        9
                    </span>
                    <span
                        id="subtract"
                        style={{ backgroundColor: "var(--gray)" }}
                        onClick={() => updateEquation("-")}
                    >
                        -
                    </span>
                    <span id="four" onClick={() => updateEquation("4")}>
                        4
                    </span>
                    <span id="five" onClick={() => updateEquation("5")}>
                        5
                    </span>
                    <span id="six" onClick={() => updateEquation("6")}>
                        6
                    </span>
                    <span
                        id="add"
                        style={{ backgroundColor: "var(--gray)" }}
                        onClick={() => updateEquation("+")}
                    >
                        +
                    </span>
                    <span id="one" onClick={() => updateEquation("1")}>
                        1
                    </span>
                    <span id="two" onClick={() => updateEquation("2")}>
                        2
                    </span>
                    <span id="three" onClick={() => updateEquation("3")}>
                        3
                    </span>
                    <span
                        className="row-span-2 flex justify-center items-center"
                        style={{ backgroundColor: "var(--blue)" }}
                        id="equals"
                        onClick={resultHandler}
                    >
                        =
                    </span>
                    <span
                        id="zero"
                        className="col-span-2"
                        onClick={() => updateEquation("0")}
                    >
                        0
                    </span>
                    <span id="decimal" onClick={() => updateEquation(".")}>
                        .
                    </span>
                </div>
            </div>
        </section>
    );
}

export default App;
