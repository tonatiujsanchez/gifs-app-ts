import { useState } from 'react';
import PropTypes from 'prop-types'



export const FormAddCategory= ({ onAddCategory }) => {


    const [ inputValue, setInputValue ] = useState('')

    
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
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text"
                value={ inputValue }
                onChange={ onInputChange }
                placeholder="Buscar Gif"
            />
        </form>
    )
}

FormAddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}

