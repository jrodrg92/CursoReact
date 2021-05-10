import React, { useEffect, useState } from 'react'
import './effects.css'
import Message from './Message';

const SimpleForm = (props) => {

    const [stateForm, setstateForm] = useState({
        name:'',
        email:''
    })

    const {name, email} = stateForm;

    useEffect(() => {
        console.log('form ha cambiado')
    }, [stateForm]);

    useEffect(() => {
        console.log('el email ha cambiado')
    }, [email]);

    const handleInputChange = (e) => {

        e.preventDefault();

        setstateForm({
            ...stateForm,
            [e.target.name] : e.target.value
        })

    }

    const handleReset = () => {
        setstateForm({
            name:'',
            email:''
        });
    }

    return (
        <>
            <h1>Use effects</h1>
            <hr/>
            <div className="form-group">
                <p>Name:</p><input type="text" className="form-control" name="name" value={ name } onChange= { handleInputChange } />
                <p>Email:</p><input type="text" className="form-control" name="email" value={ email } onChange= { handleInputChange } />
                <button className="btn" onClick={ handleReset }>Reset</button>
            </div>

            { name===123 && <Message/> }
        </>
    )
}

export default SimpleForm;
