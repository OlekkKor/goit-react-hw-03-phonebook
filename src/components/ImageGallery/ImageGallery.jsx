import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import css from './ImageGallery.module.css';

export const ImageGallery = ({ img, onImageClick}) => {
    console.log(img);
    return(
        <ul className={css.gallery}>

        {img.map(({id, webformatURL, largeImageURL}) => {
            return (
         <ImageGalleryItem 
            key = {id} 
            webformatURL = {webformatURL}  
            largeImageURL = {largeImageURL}
            onImageClick={onImageClick}
             />
        )})}
        </ul>
    )}
    
