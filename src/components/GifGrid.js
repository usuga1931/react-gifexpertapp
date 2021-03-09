import React from 'react';
import { useFetchGif } from '../hooks/useFetchGifs';
import { GifGrifItem } from '../components/GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGif(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p>Cargando</p>}
            <div className="card-grid animate__animated animate__flash">
                {
                    images.map(img => (
                        <GifGrifItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
