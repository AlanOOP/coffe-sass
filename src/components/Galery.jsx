import React from 'react'
import { images } from '../data/data'

const Galery = () => {
    return (
        <section className='experience'>
            <h2>
                <span>Vive la</span>
                Experiencia
            </h2>

            <div className="galery">
                <div className="image">
                    <img src={images[0]} alt="Imagen Galería 1" loading='lazy' />
                </div>
                <div className="image">
                    <img src={images[1]} alt="Imagen Galería 2" loading='lazy' />
                </div>
                <div className="image">
                    <img src={images[2]} alt="Imagen Galería 3" loading='lazy' />
                </div>
                <div className="image">
                    <img src={images[3]} alt="Imagen Galería 4" loading='lazy' />
                </div>
                <div className="image">
                    <img src={images[4]} alt="Imagen Galería 5" loading='lazy' />
                </div>
                <div className="image">
                    <img src={images[5]} alt="Imagen Galería 6" loading='lazy' />
                </div>
                <div className="image">
                    <img src={images[6]} alt="Imagen Galería 7" loading='lazy' />
                </div>
                <div className="image">
                    <img src={images[7]} alt="Imagen Galería 8" loading='lazy' />
                </div>
                <div className="image">
                    <img src={images[8]} alt="Imagen Galería 9" loading='lazy' />
                </div>
                <div className="image">
                    <img src={images[9]} alt="Imagen Galería 10" loading='lazy' />
                </div>

            </div>
        </section>
    )
}

export default Galery