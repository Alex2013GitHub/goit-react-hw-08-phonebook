import { ColorRing } from 'react-loader-spinner';

import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <ColorRing height="100" width="100" />
    </StyledLoader>
  );
};

export default Loader;
