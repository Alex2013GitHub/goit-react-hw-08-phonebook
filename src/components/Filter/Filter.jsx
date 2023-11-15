import { useDispatch, useSelector } from 'react-redux';
import { selectorfilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/sliceContacts';

import { StyledFilter } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectorfilter);
  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <StyledFilter>
      <p className="title">Find contacts by name:</p>
      <form>
        <input
          type="text"
          placeholder="Search contacts"
          value={filter}
          onChange={handleFilterChange}
          className="input"
        />
      </form>
    </StyledFilter>
  );
};

export default Filter;
