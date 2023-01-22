import { useEffect, useState } from "react"

import { getGifs } from "../helpers"
import { IGif } from "../interfaces"



export const useFetchGifs = ( category:string ):{ images:IGif[], isLoading: boolean } => {


    const [gifs, setGifs] = useState<IGif[]>([])
    const [loading, setLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs( category )
        setGifs( newImages )
        setLoading(false)
    }

    useEffect(()=>{
        getImages()
    },[category])

    
    return {
        images: gifs,
        isLoading: loading
    }
}
