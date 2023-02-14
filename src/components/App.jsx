import { useState, useEffect } from 'react';
// import 'modern-normalize';
import ContactForm from './FormFolder/Form';
import Filter from './FilterFolder/Filter';
import ContactList from './ContactListFolder/ContactList';
import { nanoid } from 'nanoid';
import { Wrap } from 'Global.Styles';

export function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? ''
  );

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContacts = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.find(contact => contact.name === name)
      ? alert(name + 'add in contacts.')
      : setContacts([contact, ...contacts]);
  };

  const getFilterOnContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <Wrap>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <ContactList
          contacts={getFilterOnContact()}
          onDelete={deleteContacts}
        />
        <Filter value={filter} onChange={e => setFilter(e.target.value)} />
      </Wrap>
    </>
  );
}
