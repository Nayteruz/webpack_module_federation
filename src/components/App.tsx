import {useState} from "react";
import s from "./App.module.scss"
import {Link, Outlet} from "react-router-dom";


export const App = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter((prev) => prev + 1);
    }

    const decrement = () => {
        setCounter((prev) => prev - 1);
    }

    return (
        <>
            <h1 className={s.value}>{counter}</h1>
            <Link to="/about" >About</Link>
            <Link to="/shop" >Shop</Link>
            <div className={s.counter}>
                <button onClick={decrement}>-</button>
                <span>{counter}</span>
                <button onClick={increment}>+</button>
            </div>
            <Outlet/>
        </>
    );
};
