import css from './Searchbar.module.css';
import { Component } from "react";


export class Searchbar extends Component { 

state = {
    inputValue: '',
}


inputChange = event => {
    this.setState({
        inputValue: event.target.value,
    })
}   


onFormSubmit = e => {
    e.preventDefault(); 
    this.props.onFormSubmit(this.state.inputValue);
}



render() {
    return( 
    <header className={css.header}>
    <form onSubmit={this.onFormSubmit} className={css.form}>
      <button  className={css.button}>
        <span>Search</span>
      </button>
  
      <input className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={this.inputChange}
      />
    </form>
  </header>  
    )
}




}