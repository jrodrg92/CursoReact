//rafcp
import { useState } from 'react';

const useCounter = (initialState) => {
    
    const [count, setCounter] = useState(initialState);

    const increment = () => {
        setCounter ( count + 1 )
    }

    const decrement = () => {
        setCounter( count - 1 )
    }

    const reset = () => {
        setCounter( initialState )
    }

    return {
        count,
        increment,
        decrement,
        reset
    }

}

export default useCounter
