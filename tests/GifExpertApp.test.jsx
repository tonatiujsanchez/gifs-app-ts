import { fireEvent, render, screen } from "@testing-library/react"
import GifExpertApp from "../src/GifExpertApp"

describe('Pruebas en GifExpertApp', () => {


    test('No se debe insertar si la categoria ya existe', () => {
        
        

        render( <GifExpertApp /> )

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        
        expect( screen.getAllByRole('heading', {level: 3}).length ).toBe(3)

        fireEvent.input( input, { target: { value: 'One Punch' } } )
        fireEvent.submit( form )
        
        expect( screen.getAllByRole('heading', {level: 3}).length ).toBe(3)

        screen.debug()


    })

    test('debe de insetar una nueva categoria si no es repetida', () => {

        render( <GifExpertApp /> )

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        expect( screen.getAllByRole('heading', { level: 3 }).length ).toBe(3)

        fireEvent.input( input, { target:{ value: 'One pice' } } )
        fireEvent.submit( form )

        expect( screen.getAllByRole('heading', { level: 3 }).length ).toBe(4)

    })
    
    
    test('debe de tener un h1 con el texto GifExpertApp', () => {
        render( <GifExpertApp /> )
        
        expect( screen.getByText('GifExpertApp')).toBeTruthy()

        const h1Text =screen.getByRole('heading',{ level: 1 }).innerHTML

        expect( h1Text ).toContain('GifExpertApp')
        expect( h1Text ).toBe('GifExpertApp')
        
    })

})