import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

import userIcon from '../../../../../assets/images/IconGoGreen.png';
import {useAuthentication} from '../../../../../context/Authentication';

import {
  ImageIcon,
  HeaderContainer,
  UserNameDark,
  UserNameLight,
} from './styled';

const Header = () => {
  const {logout} = useAuthentication();

  return (
    <HeaderContainer>
      <UserNameLight>
        Olá,{'\n'}
        <UserNameDark>Usuário</UserNameDark>
      </UserNameLight>
      <TouchableOpacity onPress={logout}>
        <ImageIcon source={userIcon} />
      </TouchableOpacity>
    </HeaderContainer>
  );
};

export default Header;
