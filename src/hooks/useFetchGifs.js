import { useEffect, useState } from "react"

import { getGifs } from "../helpers"



export const useFetchGifs = ( category )=> {


    const [gifs, setGifs] = useState([])
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
