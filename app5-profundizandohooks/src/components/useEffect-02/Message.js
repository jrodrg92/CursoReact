//rafcp
import React, {useEffect} from 'react'

const Message = props => {

    useEffect(() => {
        console.log("componente montado")
        return () => {
            console.log('Componente desmontado')
        }
    }, [])

    return (
        <>
            <h3>Eres Genial</h3>
        </>
    )
}


export default Message;
