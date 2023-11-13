import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const { StyledContainer } = require('./ContactsPage.styled');

const ContactsPage = () => {
  return (
    <StyledContainer>
      <div className="appstyled">
        <ContactForm>
          <h2 className="text">Contacts</h2>
          <Filter />
          <ContactList />
        </ContactForm>
      </div>
    </StyledContainer>
  );
};

export default ContactsPage;
