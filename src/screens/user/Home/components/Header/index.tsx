import React from 'react';

import userIcon from '../../../../../assets/images/IconGoGreen.png';

import {
  ImageIcon,
  HeaderContainer,
  UserNameDark,
  UserNameLight,
} from './styled';

const Header = () => {
  return (
    <HeaderContainer>
      <UserNameLight>
        Olá,{'\n'}
        <UserNameDark>Usuário</UserNameDark>
      </UserNameLight>
      <ImageIcon source={userIcon} />
    </HeaderContainer>
  );
};

export default Header;
