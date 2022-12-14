import React, { useState } from 'react';
import SelectList from 'react-native-dropdown-select-list';
import { ErrorContainer, ErrorText } from '../InputForm/styled';

import { Container } from './styled';

export interface SelectListComponentType {
  data: SelectListItemType[];
  placeholder: string;
  selectedItem: (item: string) => void;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  errorMessage?: string;
}

export interface SelectListItemType {
  key: string;
  value: string;
}

const checkProps = (props: SelectListComponentType) => ({
  data: props.data ? props.data : [],
  placeholder: props.placeholder ? props.placeholder : 'Selecione um item',
  selectedItem: props.selectedItem ? props.selectedItem : () => {},
  marginTop: props.marginTop ? props.marginTop : 0,
  marginBottom: props.marginBottom ? props.marginBottom : 0,
  marginLeft: props.marginLeft ? props.marginLeft : 0,
  marginRight: props.marginRight ? props.marginRight : 0,
  errorMessage: props.errorMessage
});

const SelectListComponent = (props: SelectListComponentType) => {
  const {
    data,
    placeholder,
    selectedItem,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    errorMessage
  } = checkProps(props);

  const [selected, setSelected] = useState('');

  return (
    <Container
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}>
      <SelectList
        placeholder={placeholder}
        setSelected={setSelected}
        data={data}
        onSelect={() => selectedItem(selected)}
      />
      {errorMessage && (
        <ErrorContainer>
          <ErrorText>Esse campo é obrigatório</ErrorText>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default SelectListComponent;
