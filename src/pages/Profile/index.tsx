import * as styled from './styled';
import { useState } from 'react';

import AsideProfile from './AsideProfile';
import InfoUser from './InfoUser';
import Purchases from './Purchases';
import AddProduct from './AddProduct';
import DeleteUser from './DeleteUser';

const Profile = () => {
  const [typeNavigation, setTypeNavigation] = useState<string>('user');

  let isVisible: boolean = false;
  const handleNavigation = (type: string) => {
    setTypeNavigation(type);

    if (type === 'purchases') {
      isVisible = true;
    }
  };

  return (
    <styled.Container>
      <AsideProfile typeNavigation={handleNavigation} />

      {typeNavigation && typeNavigation === 'user' && <InfoUser />}
      {typeNavigation && typeNavigation === 'purchases' && <Purchases isVisible={isVisible} />}
      {typeNavigation && typeNavigation === 'addProduct' && <AddProduct />}
      {typeNavigation && typeNavigation === 'deleteUser' && <DeleteUser />}
    </styled.Container>
  );
};

export default Profile;
