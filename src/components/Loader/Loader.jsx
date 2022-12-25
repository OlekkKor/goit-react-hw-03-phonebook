import css from './Loader.module.css';

export const Loader = () => {
    console.log('loader work');
    return ( 
        <div className={css.ldsRipple}><div></div><div></div></div>
    )
}