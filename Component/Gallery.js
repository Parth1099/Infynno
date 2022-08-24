import ImageGallery from 'react-image-gallery';
import React from 'react';
const Gallery = ({ photos }) => {
    const images = photos.map((data) => {

        return {
            original: data,
            thumbnail: data,
        }
    })
    console.log("Gallery", photos)
    return (
        <div> <ImageGallery showPlayButton={false} items={images} /></div>
    )
}

export default Gallery

