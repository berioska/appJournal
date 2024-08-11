import { useEffect, useMemo, useState } from "react"


export const useForm = (initialForm = {}, formValidations = {}) => { //recibe un objeto vacio que sera mi estado inicial del form

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {

        createValidators();

    }, [formState])// se llamara cada vez que cambie el estado de mi formulario, es decir, los valores

    useEffect(() => {

        setFormState(initialForm);

    },[initialForm])

    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        }
        );
    }

    const isFormValid = useMemo(() => {

        for (const formValue of Object.keys(formValidation)) {

            if (formValidation[formValue] == !null) return false;
        }
        return true;
    }, [formValidation]); //cada vez que el formulario de validacion cambie los valores esto se dispara memorizando el nuevo valor del formValidation




    const createValidators = () => {

        const formCheckValues = {};//este sera el objeto de mensajes de error

        for (const formFields of Object.keys(formValidations)) { //estoy obteniendo la key (emai, displayName) de cada llave del formulario de validadcion 
            const [fn, errorMessage] = formValidations[formFields]; // formValidations.email, formValidations.displaynName...

            formCheckValues[`${formFields}Valid`] = fn(formState[formFields]) ? null : errorMessage;
            //estoy mandando el valor de cada campo de mi formulario a la funcion de validacion del formValidations
            //formCheckValues{
            //displayNameValid: 'el nombre es requerido'
            //email: 'debe tener un @'
            //}

            setFormValidation(formCheckValues);

        };


    }


    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid //esto puede ser true o false 
    }
}