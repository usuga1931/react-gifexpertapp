import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas al hook useFetchGifs', () => {
    test('Debe de retornar el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Homero'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

    test('Debe de retornar un arreglo de imagenes y el loading en false', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Homero'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(9);
        expect(loading).toBe(false);

    });
});