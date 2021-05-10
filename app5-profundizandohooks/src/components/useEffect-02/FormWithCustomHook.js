import React from 'react';
import useForm from '../../hooks/useForm';
import Message from './Message';

import './effects.css';

const FormWithCustomHook = (props) => {

    const { stateForm, handleInputChange, handleReset } = useForm({
        name:'',
        email:'',
        password:''
    });

    const {name, email, password} = stateForm;

    return (
        <>
            <h1>Form with custom hook</h1>
            <hr/>
            <div className="form-group">
                <p>Name:</p><input type="text" className="form-control" name="name" value={ name } onChange= { handleInputChange } />
                <p>Email:</p><input type="text" className="form-control" name="email" value={ email } onChange= { handleInputChange } />
                <p>Password:</p><input type="password" className="form-control" name="password" value={ password } onChange= { handleInputChange } />
                <br/>
                <button className="btn btn-primary" onClick={ handleReset }>Guardar</button>
            </div>

            { ( name === '123' ) && <Message/> }
        </>
    )
}


export default FormWithCustomHook;
