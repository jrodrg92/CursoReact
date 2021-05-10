import React, {useState} from 'react'

import './counter.css'

//rafcp
const CounterApp = (props) => {

    const [state, setcounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
        counter4:40,
        counter5:50
    });

    const {counter1, counter2} = state;

    /**Ha que seguir este modelo por que a estas alturas de el curso todavia no podemos renderizar objetos completos */
    const handleCount1Plus = () => {
        setcounter( {
            ...state,
            counter1: counter1+1
        } );
    }

    const handleCount2Plus = () => {
        setcounter( {
            ...state,
            counter2: counter2+1
        } );
    }
    /**asi se actualizarian los estados modificando todos los atributos incluso los que no cambian */

    return (
        <div className="counter">
            <h1>Counter1 { counter1 }</h1>
            <h1>Counter2 { counter2 }</h1>
            <h1>Counter3 { state.counter3 }</h1>
            <h1>Counter4 { state.counter4 }</h1>
            <h1>Counter5 { state.counter5 }</h1>



            <hr/>
            <button className="btn btn-primary" onClick={ handleCount1Plus }>Counter1 + 1</button>
            <button className="btn btn-primary" onClick={ handleCount2Plus }>Counter2 + 2</button>
        </div>
    )
}

export default CounterApp;
