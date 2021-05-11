//rafcp
import { useState } from 'react';

const UseCounter = (numItems=5) => {

    
    const [count, setCounter] = useState({
        counter:0,
        countInit:0,
        countEnd:numItems
    });

    const increment = () => {
        setCounter ({
            counter: count.counter + 1,
            countInit: count.countInit + numItems,
            countEnd: count.countEnd + numItems
        });
    }

    const decrement = () => {
        setCounter({
            counter: count.counter - 1,
            countInit: count.countInit - numItems,
            countEnd: count.countEnd - numItems
        })
    }

    const reset = () => {
        setCounter( {
            counter:0,
            countInit:0,
            countEnd:numItems
        } )
    }

    return {
        count,
        increment,
        decrement,
        reset
    }

}

export default UseCounter;
