import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions';

export const ContactForm = ({
  name,
  number,
  onNameChange,
  onNumberChange,
  onSubmit,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="comtainer">
      <label htmlFor="name" className="form-label">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="name"
          className="form-input"
          value={name}
          onChange={onNameChange}
        />
      </label>
      <label htmlFor="number" className="form-label">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="number"
          className="form-input"
          value={number}
          onChange={onNumberChange}
        />
      </label>
      <button type="submit" className="form-button">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onNumberChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
