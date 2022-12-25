import css from './ImageGalleryItem.module.css';


export const ImageGalleryItem = ({ webformatURL, largeImageURL, onImageClick}) => {
    console.log(largeImageURL)
    return (
        <li className={css.item}>
            <img src={webformatURL} alt="img from query"  onClick={() => onImageClick(largeImageURL)}  />
        </li>
    )
}