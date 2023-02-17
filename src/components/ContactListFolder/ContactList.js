// import ContactElement from '../ContactElementFolder/ContactElement';
// import { List } from './List.Styled';
// import { useSelector } from 'react-redux';
// import { getContact, getFilter } from 'redux/selectors';

// const ContactList = () => {
//   const filter = useSelector(getFilter);
//   const contacts = useSelector(getContact);
//   console.log(filter);
//   console.log(contacts);
//   const filtredContacts = () => {
//     if (filter) {
//       const normalizedFilter = filter.toLowerCase();
//       if (contacts.length !== 0) {
//         return contacts.filter(contact =>
//           contact.name.toLowerCase().includes(normalizedFilter)
//         );
//       }
//     }
//     return contacts;
//   };
//   const contactsFiltred = filtredContacts();
//   console.log(contactsFiltred);
//   return (
//     <List>
//       {contactsFiltred &&
//         contactsFiltred.map(({ id, name, number }) => {
//           return (
//             <ContactElement id={id} key={id} name={name} number={number} />
//           );
//         })}
//     </List>
//   );
// };

// export default ContactList;

import PropTypes from 'prop-types';
import ContactElement from '../ContactElementFolder/ContactElement';
import { List } from './List.Styled';
import { useSelector } from 'react-redux';
import { getContact, getFilter } from 'redux/selectors';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContact);
  const filtredContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      if (contacts.length !== 0) {
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      }
    }
    return contacts;
  };
  const contactsFiltred = filtredContacts();
  return (
    <List>
      {contactsFiltred &&
        contactsFiltred.map(({ id, name, number }) => {
          return (
            <ContactElement key={id} name={name} id={id} number={number} />
          );
        })}
    </List>
  );
};

ContactList.PropTypespropTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
