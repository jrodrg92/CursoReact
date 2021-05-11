import React, { useEffect } from 'react';

const PaginationGrid = ({count, increment, decrement, reset}) => {

    useEffect(()=>{

    },[count]);

    return (
        <>
            <hr/>
            <p>Gestion de paginas</p>
            <button className= "btn btn-primary" onClick={reset}> inicio </button>
            {  
                count.counter > 0 && <button className= "btn btn-primary" onClick= {decrement}>Anterior</button>
            }
            <br/>
            <p>{count}</p>
            <button className= "btn btn-primary" onClick= {increment}>Siguiente</button>
            <button className= "btn btn-primary"> Final </button>
        </>
    );
};

export default PaginationGrid;