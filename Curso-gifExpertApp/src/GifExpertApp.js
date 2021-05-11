import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid'

//rafcp
const GifExpertApp = (props) => {
    
    //const categories = ['Dragon Ball Z', 'Dragon Ball Super', 'Singueki no kioyin', 'Saint seiya'];
    
    const [categories, setCategories] = useState(['Dragon Ball Z', 'Dragon Ball Super', 'Shingeki no Kyojin', 'Saint seiya']);

    return (
        <>  
            {/**GifExpertApp */}
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories }/>
            <hr/>
            
            <ol>
                {
                   categories.map( categorie => <li key={categorie}><GifGrid categorie={categorie}/></li>)
                }
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp;
