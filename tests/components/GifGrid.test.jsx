
import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks"

jest.mock('../../src/hooks')


describe('Pruebas en GifGrid', () => {

    const category = 'Bleach'

    test('debe de mostrar el loading inicial mente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={ category } /> )

        expect( screen.getByText('Cargando...') )
        expect( screen.getByText( category ))

    })

    test('debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs', () => {

        const gifs = [
            {
                id: '1',
                title: 'abc',
                url: 'http://localhost/goku.jpg'
            },
            {
                id: '2',
                title: 'def',
                url: 'http://localhost/saitama.jpg'
            },
            {
                id: '3',
                title: 'ghi',
                url: 'http://localhost/onepice.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={ category } /> )

        expect( screen.getAllByRole('img').length ).toBe(3)
        expect( screen.getAllByRole('img').length ).toBe(gifs.length)
        
    })

})