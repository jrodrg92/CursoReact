//rafcp
import {useState, useEffect} from 'react';

import {getGifs} from '../helpers/getGifs'

const useFetchGifs = (categorie) => {

    const [stateGifs, setstateGifs] = useState({
        data: [],
        loading:true
    })

    useEffect(() => {
        getGifs(categorie).then( imgs => {
           console.log(imgs);
           setTimeout(() => {
            setstateGifs({
                data:imgs,
                loading:false
            })
           }, 1500)
       })
    }, [ categorie ] );

    return stateGifs;
}

export { useFetchGifs }

