import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  console.log(filter);

  const filterValue = filter.toLowerCase().trim();
  console.log(filterValue);
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
  return (
    <>
      {contacts.length === 0 && (
        <p>
          <b>Contact list is empty</b>
        </p>
      )}
      <ul>
        {filterContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <ContactListItem
                id={id}
                name={name}
                number={number}

                // handleDeleteContact={handleDeleteContact}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  handleDeleteContact: PropTypes.func,
};
