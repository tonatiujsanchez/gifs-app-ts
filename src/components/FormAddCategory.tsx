import { ChangeEvent, FC, FormEvent, useState } from 'react';


interface Props {
    onAddCategory: ( value:string )=> void
}

export const FormAddCategory: FC<Props> = ({ onAddCategory }) => {


    const [ inputValue, setInputValue ] = useState<string>('Valorant')

    
    const onInputChange = ({ target }:ChangeEvent<HTMLInputElement>) => {
        setInputValue( target.value )
    }


    const onSubmit = ( e:FormEvent<HTMLFormElement>) => {
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
