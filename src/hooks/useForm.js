import { useState } from "react"

export const useForm = (initialFormValues = {}) => {
    
    const [formState, setFormState] = useState( initialFormValues );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialFormValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
