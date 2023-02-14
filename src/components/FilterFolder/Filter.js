import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { Input, Label } from './Filter.Styled';

const filterId = nanoid();

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <>
      <Label htmlFor="fname">Fined contacts by name</Label>
      <Input
        id={filterId}
        onChange={e => dispatch(setFilter(e.target.value))}
        value={filter}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
