import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGifs', () => {
    test('Debe traer 9 elementos', async () => {

        const gifs = await getGifs('Homero');
        expect(gifs.length).toBe(9);

    });

    test('Debe traer 0 elementos', async () => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    });
});
