import * as styled from './styled';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
const Profile = () => {
  const { user } = useContext(UserContext);
  console.log('CONTEXT ', user);
  return (
    <styled.Container>
      <h2>Pagina Perfil</h2>
    </styled.Container>
  );
};

export default Profile;
