import { useState } from 'react';
import { FormAddCategory, GifGrid } from './components';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Gragón Ball', 'Naruto'])


    const onAddCategory = (value) => {

        if( categories.includes( value ) ){
            return console.log('La categoría ya existe')
        }
        
        setCategories([ value, ...categories ])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <FormAddCategory onAddCategory={onAddCategory} />
            {
                categories.map( category => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>

    )
}

export default GifExpertApp