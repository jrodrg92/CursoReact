//rafcp
import React from 'react';
import useCounter from '../../hooks/useCounter';
import './counter.css';

const CounterWithCustomHook = (props) => {

    const {count, increment, decrement, reset} = useCounter(100);

    return (
        <>
            <br/>
            <h1>Counter with Hook: { count }</h1>
            <hr/>
            <button className="btn btn-primary" onClick={increment}>+1</button>
            <button className="btn" onClick= { reset }>Reset</button>
            <button className="btn btn-primary" onClick={decrement}>-1</button>
        </>
    )
}

export default CounterWithCustomHook;
