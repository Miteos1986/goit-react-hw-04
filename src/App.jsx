import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initialContacts from "./components/сontacts.json";
import ContactForm from "./components/ContactForm/ContactForm";


function App() {
const [contacts, setContacts]= useState(() => {
  const savedContacts = window.localStorage.getItem('saved-contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return initialContacts;
});

const [filter, setFilter] = useState("") 

// добавляем контакты в локалСтор с Use
useEffect(() => {
  window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
}, [contacts]);


  const filterContact = contacts.filter((contact)=>contact.name.toLowerCase().includes(filter.toLowerCase()) )
 
  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId)=>{
    setContacts(prevContacts => {
      return prevContacts.filter((contact)=> contact.id !== contactId )
    })
  }

return (
<div>
<h1>Phonebook</h1>
  <ContactForm onAdd={addContact} />
  <SearchBox value={filter} onFilter={setFilter} />
  <ContactList contacts={filterContact} onDelete={deleteContact} />
   
</div>

)

}

export default App;
