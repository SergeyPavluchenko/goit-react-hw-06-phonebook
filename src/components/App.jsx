import ContactForm from './FormFolder/Form';
import Filter from './FilterFolder/Filter';
import ContactList from './ContactListFolder/ContactList';
import { Wrap } from 'Global.Styles';

export function App() {
  return (
    <>
      <Wrap>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactList />
        <Filter />
      </Wrap>
    </>
  );
}
