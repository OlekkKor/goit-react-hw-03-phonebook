import PropTypes from 'prop-types';
import css from './ContactList.module.css';


export const ContactList = ({  data, deleteToDo }) => {

  return (
    <ul className={css.list}>
      {data.map(({ name, number ,id }) => (
        <li className={css.item} key={id}>
            {name}: {number} 
          <button type="button" onClick={() => deleteToDo(id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}


ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteToDo: PropTypes.func.isRequired,
};