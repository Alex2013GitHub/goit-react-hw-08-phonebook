import PhoneForm from 'components/PhoneForm/PhoneForm';
import Filter from 'components/Filter/Filter';

import { StyledContainer } from './Contacts.styled';
import ContactsCard from 'components/ContactsCard/ContactsCard';

const Contacts = () => {
  return (
    <StyledContainer>
      <div className="appstyled">
        <PhoneForm />
        <h2 className="text">Contacts</h2>
        <Filter />
        <ContactsCard />
      </div>
    </StyledContainer>
  );
};

export default Contacts;
