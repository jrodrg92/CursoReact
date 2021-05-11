//rafcp
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem'

const GifGrid = ({categorie}) => {

    //const [counter, setCount] = useState(0);

    const { data:images , loading } = useFetchGifs(categorie);

    //llamada a funciones asincronas fuera del render
    //getGifs();

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{categorie}</h3> 

            {/** Forma de comprobar que loading es true */}
            { loading && <p className='animate__animated animate__flash'>Loading</p> }
            {<div className ="card-grid">
                <ul>
                    {
                        images.map( (img) => {
                            return (
                                <li key={img.id}><GifGridItem key ={ img.id } img={ img } /></li>
                            )
                        })
                    }
                </ul>
                </div>
            }
        </>
    )
}

GifGrid.propTypes = {

}

export default GifGrid
