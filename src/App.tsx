import { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
    // useState
    const [equation, setEquation] = useState<string | null>(null);
    const [result, setResult] = useState<string>("0");

    // Handle functions
    const updateEquation = (val: string) => {
        let updatedEquation;
        updatedEquation = [equation, val].join().replaceAll(",", "");

        if (updatedEquation.substring(0, 1) === "0") {
            updatedEquation = updatedEquation.substring(1);
        }

        updatedEquation = updatedEquation.replaceAll("..", ".");

        setEquation(updatedEquation);
    };

    const clearHandler = () => {
        setEquation("0");
    };

    const resultHandler = () => {
        const result = evaluate(equation!);
        setEquation(null);
        setResult(result);
    };

    return (
        <section className="h-screen flex justify-center items-center">
            <div id="calculator-wrapper" className="w-11/12 sm:w-80">
                <div className="flex flex-col text-right">
                    <span
                        id="display"
                        className={`${!Boolean(equation) && "h-6"}`}
                    >
                        {equation !== null ? equation : result}
                    </span>
                </div>
                <div
                    className="grid grid-cols-4 text-center p-1"
                    id="calculator"
                >
                    <span
                        id="clear"
                        className="col-span-2"
                        style={{ backgroundColor: "var(--red)" }}
                        onClick={clearHandler}
                    >
                        AC
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
