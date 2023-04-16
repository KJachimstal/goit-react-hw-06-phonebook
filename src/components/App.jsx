import { useEffect, useState } from 'react';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { Contacts } from './Contacts';
import { FindContacts } from './FindContacts';
import { nanoid } from 'nanoid';

export const App = props => {
  const [contacts, setContacts] = useState([
    { name: 'Ala', number: '11-11-11', id: 1 },
    { name: 'Hela', number: '11-11-11', id: 2 },
    { name: 'Ela', number: '11-11-11', id: 3 },
  ]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(props.localStorageContacts);
    if (parsedContacts && parsedContacts.length !== 0)
      setContacts(parsedContacts);
  }, [props.localStorageContacts, setContacts]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const searchContacts = name => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  const addContact = async data => {
    await setContacts(prevContacts => [...prevContacts, data]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const id = nanoid();

    if (searchContacts(name).length !== 0) {
      alert(`${name} is already in contacts.`);
    } else {
      addContact({ name, number, id });
    }
  };

  const handleDelete = async id => {
    await setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleChangeName = async event => {
    await setName(event.target.value);
  };

  const handleChangeNumber = async event => {
    await setNumber(event.target.value);
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
    searchContacts(event.target.value);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Phonebook">
        <ContactForm
          onSubmit={handleSubmit}
          name={name}
          number={number}
          onNameChange={handleChangeName}
          onNumberChange={handleChangeNumber}
        />
      </Section>
      <Section title="Contacts">
        <FindContacts filter={filter} onFilterChange={handleFilterChange} />
        <Contacts
          contacts={searchContacts(filter)}
          onContactDelete={handleDelete}
        />
      </Section>
    </div>
  );
};
