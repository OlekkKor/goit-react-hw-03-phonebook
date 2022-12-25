import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

import { Component } from 'react';

export class ContactForm extends Component {
  
  state = {
    name: '',
    number: ''
  }


  inputChange = event => {
    this.setState({  [event.target.name] : event.target.value  });    
  };
  

    handleSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.reset();
    event.target[0].value = "";
    event.target[1].value = "";
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

 
  render() {
    return (
      <form className = {css.form}  onSubmit={  this.handleSubmit }>
        <h3>Name</h3>
        <input
        className={css.input}
        type="text"
        name="name"
        onChange={this.inputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required />

        <h3>Number</h3>
        <input
        className={css.input}
        type="tel"
        name="number"
        onChange={this.inputChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required />
      <button className={css.button} type="submit"> {this.props.btnText} </button>
    </form>
    );
  }
}


ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  btnText: PropTypes.string
};