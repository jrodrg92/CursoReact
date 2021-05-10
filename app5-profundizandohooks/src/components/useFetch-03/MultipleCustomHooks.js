import React from 'react'
import UseFetch from '../../hooks/UseFetch'
import './fetch.css'

const MultipleCustomHooks = (props) => {

    const {data, loading, error} = UseFetch('https://api.coingecko.com/api/v3/coins/list');

    return (
        <>
          <h3>Multiples Hooks</h3>
          <hr/>
        </>
    )
}

export default MultipleCustomHooks;
