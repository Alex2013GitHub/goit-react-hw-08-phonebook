import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/authOperations';
import { selectUserName } from 'redux/contacts/selectors';

import { StyledUserMenu } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <StyledUserMenu>
      <p className="text">Welcome, {name} ! </p>
      <button onClick={onLogOut} className="button">
        Log Out
      </button>
    </StyledUserMenu>
  );
};

export default UserMenu;
