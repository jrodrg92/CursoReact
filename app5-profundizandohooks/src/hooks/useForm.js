import {useState, useEffect} from 'react'

const useForm = (initalState) => {

    const [stateForm, setstateForm] = useState(initalState);

    useEffect(() => {
        console.log('form ha cambiado')
    }, [stateForm]);

    useEffect(() => {
        console.log('el email ha cambiado')
    }, [stateForm.email]);

    const handleInputChange = (e) => {

        e.preventDefault();

        setstateForm({
            ...stateForm,
            [e.target.name] : e.target.value
        })

    }

    const handleReset = (e) => {

        const user = stateForm;

        setstateForm({
            name:'',
            email:'',
            password:''
        });

        console.log(user);
    }

    return {
        stateForm,
        handleInputChange,
        handleReset
    }

}

export default useForm;
