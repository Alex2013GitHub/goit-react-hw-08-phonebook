import PhoneForm from 'components/PhoneForm/PhoneForm';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';

import { StyledContainer } from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <StyledContainer>
      <div className="appstyled">
        <PhoneForm />
        <h2 className="text">Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    </StyledContainer>
  );
};

export default ContactsPage;
