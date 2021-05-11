import { useEffect, useState } from 'react'

const UseFetch = (url) => {

    const [icos, seticos] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        fetch(url).then(resp => resp.json()).then(data => {
            seticos({
                data:data,
                loading:false,
                error:null
            })
        })
    }, [url])

    return icos;

}

export default UseFetch;
