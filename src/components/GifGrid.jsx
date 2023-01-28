import PropTypes from 'prop-types'

import { useFetchGifs } from '../hooks'

import { GifItem } from './GifItem'




export const GifGrid= ({ category }) => {

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


GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
