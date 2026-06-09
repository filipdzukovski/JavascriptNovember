import React,{useContext} from 'react';
import { Popup } from './Popup';
import { GalleryContext } from '../utils/GalleryContext';

export const Gallery = ({ listOfPhotos, 
    // setImage, selektiranaSlika,closeImage
 }) => {
    console.log(listOfPhotos)

    const {selectedImage,setSelectedImage} = useContext(GalleryContext)
    return (
        <div id='gallery'>
            {listOfPhotos.map(photo => {
                return (
                    <div
                        className='image-holder'
                        key={photo.id}
                        onClick={() => { setSelectedImage(photo) }}
                    >
                        <img
                            src={photo.download_url}
                            alt={photo.author}
                            height={150}
                            width={150} />
                    </div>
                )
            })}

            {selectedImage &&
                <Popup
                // zatvoriSlika={closeImage}
                // izbranaSlika={selektiranaSlika} 
                />
            }
        </div>
    )
}