import React, { useState, useEffect } from 'react'
import UseFetch from '../../hooks/UseFetch'
import './fetch.css'
import IcoItemGrid from './IcoItemGrid';
import UseCounter from '../../hooks/UseCounter';
import PaginationGrid from './PaginationGrid';

const MultipleCustomHooks = (props) => {

    const {data, loading, error} = UseFetch('https://api.coingecko.com/api/v3/coins/list');

    const {count, increment, decrement, reset} = UseCounter(5);

    const {counter, countInit, countEnd} = count;

    const pagIcos = !!data && data.slice(countInit, countEnd);

    useEffect(() => {
      console.log(pagIcos)
    },[pagIcos]);
    
    return (
        <>
          <h3>Multiples Hooks</h3>
          <hr/>

          {
            loading ? (
              <div className="alert alert-info text-center">Loading...</div>
            )
            :
            (
              pagIcos.map( (ico) => {
                return <IcoItemGrid key={ico.id} ico={ico}/>
              })
            )
          }

          {
            error && <div className="alert alert-danger text-center">Error cargando los datos</div>
          }

          <PaginationGrid count = {counter} increment = { increment } decrement = { decrement } reset = { reset }/>

        </>
    )
}

export default MultipleCustomHooks;
