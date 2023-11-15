import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectorContacts } from 'redux/contacts/selectors';

import { StyledPhoneForm } from './PhoneForm.styled';

const PhoneForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;

    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      name,
      number,
    };

    dispatch(addContact(newContact));
    event.currentTarget.reset();
  };

  return (
    <StyledPhoneForm>
      <h1 className="text">
        <span className="text-white">Your </span>Phonebook
      </h1>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          <span className="title">Name</span>
          <input
            className="input"
            name="name"
            type="text"
            required
            placeholder="Enter name"
          />
          <span className="title">Number</span>
          <input
            className="input"
            type="tel"
            name="number"
            required
            placeholder="Number"
            minLength="7"
            maxLength="12"
          />
        </label>
        <button className="btn" type="submit">
          Add contact
        </button>
      </form>
    </StyledPhoneForm>
  );
};

export default PhoneForm;
