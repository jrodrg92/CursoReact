import React, {useState} from 'react';
import PropTypes from 'prop-types';

//rafcp
const AddCategory = ({setCategories}) => {

    const [imputValue, setImputValue] = useState('');

    const handleImputChange = (e) => {
            setImputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(imputValue.length > 0){
            setCategories( categories => [imputValue, ...categories] );
        }

        setImputValue("");
        console.log('Submit realizado!')
    }

    return (
 
        <form onSubmit = {handleSubmit}>
            <input type='text' onChange= {handleImputChange} value={ imputValue } />
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;



