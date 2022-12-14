import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

import { useAuthentication } from '../../../../../context/Authentication';
import themes from '../../../../../themes/themes';

import { HeaderContainer, UserNameDark, UserNameLight } from './styled';

export type HeaderType = {
  username: string;
};

const Header = ({ username }: HeaderType) => {
  const { logout } = useAuthentication();

  function firstName(): string {
    return username.split(' ')[0].toString();
  }

  return (
    <HeaderContainer>
      <UserNameLight>
        Olá,{'\n'}
        <UserNameDark>{firstName()}</UserNameDark>
      </UserNameLight>
      <TouchableOpacity onPress={logout}>
        <Icon name="exit-outline" size={30} color={themes.color.primary} />
      </TouchableOpacity>
    </HeaderContainer>
  );
};

export default Header;
