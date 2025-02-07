import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Pruebas en <GifItem.jsx/>', () => {

    const title = 'Saitama';
    const url = 'https://one-ponch.com/saitama.jpg';

    test('Debe hacer Match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    })

    test('Debe de mostrar la imagen con el URL y ALT indicado', () => {

        render(<GifItem title={title} url={url} />);
        //screen.debug();//para mostrar nuestro objeto de prueba.

        //expect(screen.getByRole('img').src).toBe(url);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });
    
    test('debe mostrar el titulo del componente', () => { 

        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

     })

})