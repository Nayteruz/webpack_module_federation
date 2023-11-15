import {useState} from "react";
import "./App.scss"


export const App = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter((prev) => prev + 1);
    }

    const decrement = () => {
        setCounter((prev) => prev - 1);
    }

    return (
        <div className="counter">
            <button onClick={decrement}>-</button>
            <span>{counter}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};
