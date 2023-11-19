import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import {
  selectorContactsError,
  selectorContactsFilter,
  selectorContactsIsLoading,
} from 'redux/contacts/selectors';
import Loader from 'components/Loader/Loader';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { StyledContacts } from './ContactsCard.styled';
import { IconButton } from '@mui/material';

const ContactsCard = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectorContactsIsLoading);
  const error = useSelector(selectorContactsError);
  const filteredContacts = useSelector(selectorContactsFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <StyledContacts>
      <ul>
        {filteredContacts.length > 0 ? (
          filteredContacts.map(contact => (
            <li key={contact.id} className="item">
              {contact.name}: {contact.number}
              <IconButton
                className="btn_delete"
                aria-label="delete"
                onClick={() => handleDeleteContact(contact.id)}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </li>
          ))
        ) : (
          <p>No contacts found</p>
        )}
      </ul>

      {isLoading && <Loader />}
      {error && <p>Oppsss Erorr</p>}
    </StyledContacts>
  );
};

export default ContactsCard;
