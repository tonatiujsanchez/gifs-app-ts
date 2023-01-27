const { render, screen } = require("@testing-library/react")
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en el componente GifItem', () => {

    const title="Hola, soy Goku"
    const url="https://giphy.com/gifs/adultswim-adult-swim-toonami-l3vRlt8kty8KKeHni"
 

    test('Debe de hacer match con el snapshot', () => { 
        
        const { container } = render( 
            <GifItem 
                title={ title }
                url={url}
            /> )

        expect( container ).toMatchSnapshot()
    })


    test('Debe de mostrar la imageb con el URL y el ALT inidcado', () => {

        render(  <GifItem title={ title } url={url} /> )

        // screen.debug()

        // expect( screen.getByRole('img').src ).toBe( url )
        // expect( screen.getByRole('img').alt ).toBe( title )
                
        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( title )
    })


    test('Debe de mostrar el titulo en el componente', ()=> {
        render(  <GifItem title={ title } url={url} /> )
        expect( screen.getByText(title) ).toBeTruthy()
    })

})