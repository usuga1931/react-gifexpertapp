import React from 'react';
import { shallow } from 'enzyme';
import { GifGrifItem } from '../../components/GifGridItem';

describe('Pruebas con el componente GifGridItem', () => {

    const title = 'One Punch';
    const url = 'https://media1.giphy.com/media/6IkjQmpaRwIabJ2G3C/giphy-downsized-medium.gif?cid=8379dea4yjtir9dbixckxxqvsb2k14dm2t0ucsfb39oi87q7&rid=giphy-downsized-medium.gif';
    const wrapper = shallow(<GifGrifItem title={title} url={url} />);

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un párrafo con el title', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    });

    test('Debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

    test('Debe de tener animate__fadeIn', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);

    });
});
