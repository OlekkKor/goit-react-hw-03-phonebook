import css from './button.module.css';


export const Button = ({ onButtonClick }) => {
    return(
    <div className={css.divbtn}>
    <button className={css.button} onClick={onButtonClick} >Load More</button>
    </div>
    )
}