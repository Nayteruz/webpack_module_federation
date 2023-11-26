import {useState} from "react";
import s from "./App.module.scss"
import {Link, Outlet} from "react-router-dom";
import i1 from '@/assets/img1.webp';
import i2 from '@/assets/img2.jpg';
import i3 from '@/assets/img3.png';
import Android from '@/assets/img4.svg';

function FOO() {
    FOO2()
}

function FOO2() {
    throw new Error();
}

export const App = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        FOO();
    }

    const decrement = () => {
        setCounter((prev) => prev - 1);
    }

    // if(__PLATFORM__ === 'mobile') {
    //     return <div>Plaform mobile</div>
    // }
    //
    // if (__ENV__ === 'development') {
    //     // addDevtools()
    // }

    return (
        <div data-testid="App">
            <h1 className={s.value}>{counter}</h1>
            <div data-testid="Platform">platform: {__PLATFORM__}</div>
            <div>
                <img width={100} height={100} src={i1} alt=""/>
                <img width={100} height={100} src={i2} alt=""/>
                <img width={100} height={100} src={i3} alt=""/>
            </div>
            <div>
                <Android className={'clc'} width={50} height={50} stroke={'red'}/>
            </div>
            <Link to="/about" >About</Link>
            <Link to="/shop" >Shop</Link>
            <div className={s.counter}>
                <button onClick={decrement}>-</button>
                <span>{counter}</span>
                <button onClick={increment}>+</button>
            </div>
            <Outlet/>
        </div>
    );
};
