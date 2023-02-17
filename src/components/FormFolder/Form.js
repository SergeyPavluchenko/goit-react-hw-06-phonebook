import { useState } from 'react';
import { Form, Label, Input, Button } from './Form.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from 'redux/selectors';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
// import { Notify } from 'notiflix';
import { addNewContacts } from 'redux/contactSlice';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already in contact`);
      return false;
    } else if (contacts.find(contact => contact.number === number)) {
      toast.error(`${number} is already in contact`);
      return false;
    }
    dispatch(addNewContacts(name, number));
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="fname">Name </Label>
        <Input
          id={nameId}
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor="fname">Number</Label>
        <Input
          id={numberId}
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">add contact</Button>
        <Toaster position="top-right" reverseOrder={false} />
      </Form>
    </>
  );
}
