import PropTypes from 'prop-types';

export const FindContacts = ({ filter, onFilterChange }) => {
  return (
    <label htmlFor="find" className="form-label">
      Search by name:
      <input
        className="form-input"
        type="text"
        id="find"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};

FindContacts.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
