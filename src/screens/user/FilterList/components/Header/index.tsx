import React from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {ClearButton, Divider, HeaderContainer, Title} from './styled';
import themes from '../../../../../themes/themes';

export type HeaderProps = {
  onClickGoBackListener: () => void;
  onClickClearListener: () => void;
};

const checkProps = (props: HeaderProps) => ({
  onClickGoBackListener: props.onClickGoBackListener
    ? props.onClickGoBackListener
    : () => {},
  onClickClearListener: props.onClickClearListener
    ? props.onClickClearListener
    : () => {},
});

const Header = (props: HeaderProps) => {
  const {onClickGoBackListener, onClickClearListener} = checkProps(props);
  return (
    <>
      <HeaderContainer>
        <TouchableOpacity style={{padding: 10}} onPress={onClickGoBackListener}>
          <Icon
            name="arrow-back-ios"
            size={18}
            color={themes.color.text_color}
          />
        </TouchableOpacity>
        <Title>Filtrar</Title>
        <ClearButton onPress={onClickClearListener}>
          <Title color={themes.color.primary}>Limpar</Title>
        </ClearButton>
      </HeaderContainer>
      <Divider />
    </>
  );
};

export default Header;
