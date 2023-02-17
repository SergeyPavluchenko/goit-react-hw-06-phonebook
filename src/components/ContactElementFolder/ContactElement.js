import PropTypes from 'prop-types';
import { ListEl, Text, TextEl, Button } from './ContactElement.Styled';
import { deleteContacts } from 'redux/contactSlice';
import { useDispatch } from 'react-redux';

const ContactElement = ({ id, name, number, onDelete }) => {
  const dispatch = useDispatch();

  return (
    <ListEl key={id}>
      <Text>
        <TextEl>{name}:</TextEl>
        <TextEl> {number}</TextEl>
      </Text>
      <Button onClick={() => dispatch(deleteContacts(id))} type="button">
        Delete
      </Button>
    </ListEl>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactElement;
