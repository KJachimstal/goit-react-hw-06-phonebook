import PropTypes from 'prop-types';

export const Contacts = ({ contacts, onContactDelete }) => {
  if (contacts.length === 0) {
    return <h4>No contacts avaliable</h4>;
  }

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}{' '}
          <button type="submit" onClick={() => onContactDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};
