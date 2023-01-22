import { FC} from 'react';

import { useFetchGifs } from '../hooks'

import { GifItem } from './GifItem';





interface Props {
    category: string
}

export const GifGrid:FC<Props> = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category )
    



    return (
        <>
        <h3>{category}</h3>
        {
            isLoading 
                ?(
                    <div>Cargando...</div>
                ):(
                    <div className='card-grid'>
                        {
                            images.map( ( image  )=> (
                                <GifItem key={image.id} { ...image } />
                            ))
                        }
                    </div>
                )
        }
        </>
    )
}
