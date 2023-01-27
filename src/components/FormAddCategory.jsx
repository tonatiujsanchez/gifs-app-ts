import { useState } from 'react';



export const FormAddCategory= ({ onAddCategory }) => {


    const [ inputValue, setInputValue ] = useState('Valorant')

    
    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    }


    const onSubmit = ( e) => {
        e.preventDefault()

        if(inputValue.trim() === ''){ return }

        onAddCategory(inputValue.trim())
        setInputValue('')
        
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ onInputChange }
                placeholder="Buscar Gif"
            />
        </form>
    )
}
