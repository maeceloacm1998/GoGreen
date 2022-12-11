import React, { useState } from 'react';

import CheckBox, { CheckBoxProps } from '@react-native-community/checkbox';
import { Container, Title } from './styles';
import themes from '../../themes/themes';

export interface CheckboxType extends CheckBoxProps {
  title?: string;
  defaultValueCheckbox?: boolean;
  onCheckedValue?: (checked: boolean, value: string) => void;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const checkProps = (props: CheckboxType) => ({
  title: props.title ? props.title : 'default',
  defaultValueCheckbox: props.defaultValueCheckbox ? props.defaultValueCheckbox : false,
  onCheckedValue: props.onCheckedValue ? props.onCheckedValue : () => {},
  marginTop: props.marginTop ? props.marginTop : 0,
  marginBottom: props.marginBottom ? props.marginBottom : 0,
  marginLeft: props.marginLeft ? props.marginLeft : 0,
  marginRight: props.marginRight ? props.marginRight : 0
});

const CheckboxComponent = (props: CheckboxType) => {
  const {
    title,
    defaultValueCheckbox,
    onCheckedValue,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight
  } = checkProps(props);

  const [toggleCheckBox, setToggleCheckBox] = useState(defaultValueCheckbox);

  return (
    <Container
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}>
      <Title>{title}</Title>
      <CheckBox
        tintColors={{
          true: themes.color.primary_dark,
          false: themes.color.text_color
        }}
        value={toggleCheckBox}
        onValueChange={(checked) => {
          onCheckedValue(checked, title);
          setToggleCheckBox(checked);
        }}
        {...props}
      />
    </Container>
  );
};

export default CheckboxComponent;
