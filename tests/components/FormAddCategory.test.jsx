import { fireEvent, render, screen } from "@testing-library/react"
import { FormAddCategory } from "../../src/components/FormAddCategory"


describe('Pruebas en FormAddCategory', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        const newValue = 'Dragon ball'
    
        render( <FormAddCategory onAddCategory={ ()=>{} } /> )

        const input = screen.getByRole('textbox')
        fireEvent.input( input, { target: { value: newValue } } )

        expect( input.value ).toBe( newValue )
 
    })


    test('debe de llamar onAddCategory si el imput tiene un valor', () => {

        const newValue = 'Dragon ball'
        const onAddCategory = jest.fn()
        
        render( <FormAddCategory onAddCategory={ onAddCategory } /> )
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: newValue } } )
        fireEvent.submit( form )

        expect( input.value ).toBe('')


        // Comprueba que la funcion sea llamada
        expect( onAddCategory ).toHaveBeenCalled()
        
        // Comprueba que la funcion sea llamada una vez
        expect( onAddCategory ).toHaveBeenCalledTimes(1)

        // Comprueba que la funcion se llamada con el valor de newValue
        expect( onAddCategory ).toHaveBeenCalledWith( newValue )
        
    })


    test('No se debe de llamar el onAddCategory si el input esta vacio', () => {

        const onAddCategory = jest.fn()

        render( <FormAddCategory onAddCategory={ onAddCategory } /> )

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: '' } } )
        fireEvent.submit( form )

        expect( onAddCategory ).toHaveBeenCalledTimes(0)
        expect( onAddCategory ).not.toHaveBeenCalled()

    })

})