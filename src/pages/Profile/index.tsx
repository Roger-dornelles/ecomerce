import * as styled from './styled';
import { useState } from 'react';

import AsideProfile from './AsideProfile';
import InfoUser from './InfoUser';
import Purchases from './Purchases';

const Profile = () => {
  const [typeNavigation, setTypeNavigation] = useState<string>('user');

  const handleNavigation = (type: string) => {
    setTypeNavigation(type);
  };

  return (
    <styled.Container>
      <AsideProfile typeNavigation={handleNavigation} />

      {typeNavigation && typeNavigation === 'user' && <InfoUser />}
      {typeNavigation && typeNavigation === 'purchases' && <Purchases />}
    </styled.Container>
  );
};

export default Profile;
