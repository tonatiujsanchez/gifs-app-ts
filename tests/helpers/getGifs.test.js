import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs', () => {

    test('Debe de retornar un arreglo de gifs', async() => {

        const gifs = await getGifs('Goku')
        
        // Evaluar que sea mayor a cero
        expect( gifs.length ).toBeGreaterThan( 0 )
        // Evaluar que los campos del primer elemento
        expect( gifs[0] ).toEqual({
            id   : expect.any(String),
            title: expect.any(String),
            url  : expect.any(String),
        })
    })

})