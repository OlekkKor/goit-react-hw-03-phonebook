import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from 'nanoid';

export class App extends Component{

  state = {
    contacts: [],
    filter: '',
  }

componentDidMount(){
  
  const initialContact = localStorage.getItem('contact');
  const parsedContact = JSON.parse(initialContact);
  if (parsedContact){this.setState({
    contacts: parsedContact,
  })}
}



componentDidUpdate(){
  localStorage.setItem('contact', JSON.stringify(this.state.contacts));
}


  onInputChange = filter => {
    this.setState({
     filter,
    });
  };


  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };


  deleteToDo = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))}



  onFormSubmit = info => {
    const isContactRepeat = this.state.contacts.find(
      el => el.name === info.name
    );
    if (isContactRepeat) {
      alert('Already in Contacts');
      return;
    }
    const contact = {
      ...info,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };


  render() {
    const filteredContact = this.filteredContacts();
    const {filter} = this.state;
    return( 

      <div style={{
        width: 400,
        padding: "12px 16px",
        borderRadius: 20,
        backgroundColor: "#006d00",
        color: "white",
        textAlign: "center",
      }} >
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={this.onFormSubmit} btnText="Add contact" />

      <h2>Contacts</h2>
      <Filter onInputChange={this.onInputChange} />

      
      {filter.length > 0 ? (
       <ContactList data={filteredContact} deleteToDo={this.deleteToDo}/>
      ) : (
        <ContactList data={this.state.contacts} deleteToDo={this.deleteToDo}/>
      )}
      </div>
    )
  }


} 
 
 

